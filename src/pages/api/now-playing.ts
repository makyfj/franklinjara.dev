import type { NextApiRequest, NextApiResponse } from "next"
import { getNowPlaying } from "src/utils/spotify"

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  /* if (process.env.NODE_ENV !== "production") { */
  /*   return res.json({ */
  /*     artist: "Development", */
  /*     isPlaying: true, */
  /*   }) */
  /* } */
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    const error = await response.text()
    console.log(error)

    return res.status(200).json({ isPlaying: false })
  }
  const song = await response.json()

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
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

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  )

  return res.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    previewUrl,
  })
}
