export interface INowPlayingSong {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

const client_id = process.env.SPOTIFY_ID
const client_secret = process.env.SPOTIFY_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

async function getAccessToken() {
  console.log(client_id, client_secret, refresh_token)
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  })

  return response.json()
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken()

  const data = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return data
}
