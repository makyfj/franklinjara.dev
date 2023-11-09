import { GithubIcon, Mail, Settings, Wrench } from "lucide-react"
import Image from "next/image"

import { Button } from "src/components/ui/button"
import Toolkit from "src/components/toolkit"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card"
import Background from "@/components/bg"

export default async function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-2 w-3/5 mx-auto">
      <Card className="w-96 mx-auto">
        <CardHeader>
          <CardTitle>
            <Image
              src="https://avatars.githubusercontent.com/u/65879341?v=4"
              width={80}
              height={80}
              alt="Picture of the author"
              className="mx-auto rounded-full"
              priority={true}
            />
          </CardTitle>
          <CardTitle className="custom-h3 text-center">Franklin Jara</CardTitle>
          <CardDescription className="text-center">
            Software Engineer at Cherry Hill Programs who enjoys coding, staying
            active, and listening to techno music. I{`'`}m dedicated to
            continually challenging my boundaries and advancing my personal and
            professional growth, particularly in the field of AI.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="mx-auto w-96 flex flex-col gap-4 justify-center items-center">
        <div className="flex justify-between items-center gap-4">
          <a
            href="https://github.com/makyfj"
            target="_blank"
            rel="noreferrer"
            aria-label="Github Repository"
            className="border rounded p-4"
          >
            <Button variant="link" aria-label="Github Link">
              <GithubIcon size={40} />
            </Button>
          </a>
          <a
            href="mailto:franklinjaradev@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email Address"
            className="border rounded p-4"
          >
            <Button variant="link" aria-label="Email Link">
              <Mail size={40} />
            </Button>
          </a>
        </div>
      </Card>
      <Card className="w-96 mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 custom-h3">
            Toolkit <Settings /> <Wrench />
          </CardTitle>
          <CardDescription className="text-center">
            I{`''`}m proficient in using various tools for efficient
            problem-solving.TypeScript, one of my favored statically typed
            languages, reduces code errors and expedites debugging during
            development and refactoring.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-96 mx-auto pt-4">
        <Toolkit />
      </Card>
    </main>
  )
}
