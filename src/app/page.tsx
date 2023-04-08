import { GithubIcon, Linkedin } from "lucide-react"
import Image from "next/image"
import profilePic from "public/images/Franklin.webp"

import { Button } from "src/components/ui/button"

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
      <h1 className="custom-h1 text-center">Franklin Jara</h1>
      <div className="flex items-center gap-2 justify-center">
        <Button variant="link">
          <GithubIcon />
        </Button>
        <Button variant="link">
          <Linkedin />
        </Button>
      </div>
    </main>
  )
}
