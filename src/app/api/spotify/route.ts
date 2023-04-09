import { headers } from "next/headers"

import { getNowPlaying } from "src/utils/spotify"

export async function GET() {
  if (process.env.NODE_ENV !== "production") {
    return new Response(
      JSON.stringify({
        artist: "Development",
        isPlaying: true,
      })
    )
  }
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    const error = await response.text()
    console.log("Error", error)
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
    })
  }

  const song = await response.json()

  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
    })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ")
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify
  const previewUrl = song.item.preview_url

  return new Response(
    JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      previewUrl,
    }),
    {
      status: 200,
      headers: {
        cacheControl: "s-maxage=1, stale-while-revalidate",
      },
    }
  )
}
