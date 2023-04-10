import { GithubIcon, Linkedin, Mail, Settings, Wrench } from "lucide-react"
import Image from "next/image"
import profilePic from "public/images/Franklin-min.png"

import { Button } from "src/components/ui/button"
import Toolkit from "src/components/toolkit"
import Spotify from "src/components/spotify"
import { INowPlayingSong } from "src/utils/spotify"

export default async function Home() {
  const response = await fetch(`${process.env.URL}/api/spotify`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 5,
    },
  })

  const data: INowPlayingSong = await response.json()

  return (
    <main className="flex flex-col gap-4">
      <Image
        src={profilePic}
        width={200}
        height={200}
        placeholder="blur"
        alt="Picture of the author"
        className="mx-auto"
        priority={true}
      />
      <h1 className="custom-h1 text-center">Franklin Jara</h1>
      <div className="flex items-center gap-2 justify-center">
        <a
          href="https://github.com/makyfj"
          target="_blank"
          rel="noreferrer"
          aria-label="Github Repository"
        >
          <Button variant="link" aria-label="Github Link">
            <GithubIcon />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/franklin-jara-fj/"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin Profile"
        >
          <Button variant="link" aria-label="Linkedin Link">
            <Linkedin />
          </Button>
        </a>
        <a
          href="mailto:franklinjaradev@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email Address"
        >
          <Button variant="link" aria-label="Email Link">
            <Mail />
          </Button>
        </a>
      </div>
      <p className="mx-4 md:max-w-2xl md:mx-auto custom-p">
        <span className="font-bold">Software Engineer</span> @ Cherry Hill
        Programs and <span className="font-bold">Graduate Student</span> @
        Adelphi University pursuing a Master{`'`}s Degree in Computer Science
        with specialization in Software Engineering. I find joy in coding,
        working out, and listening to techno music. As a passionate Software
        Engineer and driven individual, I strive to continuously push myself
        beyond my limits and grow both professionally and personally every day.
      </p>
      <h2 className="custom-h2 flex gap-2 items-center justify-center">
        Toolkit <Settings />
        <Wrench />
      </h2>
      <p className="mx-4 md:max-w-2xl md:mx-auto custom-p">
        As a Software Engineer, I am well-versed in a variety of tools to
        overcome obstacles with maximum efficiency. TypeScript is one of my
        favorite statically typed languages to work with, as it significantly
        reduces the risk of errors in the codebase and enables a rapid feedback
        loop for debugging during code writing and refactoring.
      </p>
      <Toolkit />
      <Spotify data={data} />
    </main>
  )
}
