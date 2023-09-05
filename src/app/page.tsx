import {
  FileText,
  GithubIcon,
  Linkedin,
  Mail,
  Settings,
  Wrench,
} from "lucide-react"
import Image from "next/image"

import { Button } from "src/components/ui/button"
import Toolkit from "src/components/toolkit"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Image
        src="https://avatars.githubusercontent.com/u/65879341?v=4"
        width={200}
        height={200}
        alt="Picture of the author"
        className="mx-auto rounded-full"
        priority={true}
      />
      <Card>
        <CardHeader>
          <CardTitle className="custom-h1 text-center">Franklin Jara</CardTitle>
          <CardDescription>
            <span className="font-bold">Software Engineer</span> @ Cherry Hill
            Programs. I find joy in coding, working out, and listening to techno
            music. As a passionate Software Engineer and driven individual, I
            strive to continuously push myself beyond my limits and grow both
            professionally and personally every day.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center gap-2">
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
          <a
            href="files/FranklinJaraResume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Franklin Jara Resume"
          >
            <Button variant="link" aria-label="Resume">
              <FileText />
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 custom-h2">
            Toolkit <Settings /> <Wrench />
          </CardTitle>
          <CardDescription>
            As a Software Engineer, I am well-versed in a variety of tools to
            overcome obstacles with maximum efficiency. TypeScript is one of my
            favorite statically typed languages to work with, as it
            significantly reduces the risk of errors in the codebase and enables
            a rapid feedback loop for debugging during code writing and
            refactoring.
          </CardDescription>
        </CardHeader>
        <Toolkit />
      </Card>
    </main>
  )
}
