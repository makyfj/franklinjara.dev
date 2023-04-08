import Image from "next/image"
import profilePic from "public/images/Franklin.webp"

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Image
        src={profilePic}
        width={200}
        height={200}
        alt="Picture of the author"
        className="mx-auto rounded-full"
      />
    </main>
  )
}
