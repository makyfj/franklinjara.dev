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
import { ModeToggle } from "@/components/mode-toggle"

export default async function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-1">
        <Card className="transition-color duration-300 hover:border-foreground md:w-2/5">
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
            <CardTitle className="custom-h3 text-center">
              Franklin Jara
            </CardTitle>
            <CardDescription className="text-center">
              I{`'`}m a Software Engineer who absolutely loves coding, working
              out, and grooving to some techno beats. I{`'`}m all about pushing
              my limits and constantly striving to enhance both my personal and
              professional development, with a special focus on the exciting
              world of AI.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="transition-color duration-300 hover:border-foreground md:w-2/5">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 custom-h3">
              Toolkit <Settings /> <Wrench />
            </CardTitle>
            <CardDescription className="text-center">
              I{`'`}m pretty handy with various tools when it comes to solving
              problems efficiently. TypeScript is a real favorite of mine
              because it helps cut down on code errors and speeds up the whole
              debugging process, especially when I{`'`}m knee-deep in
              development and refactoring.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-around items-center gap-2">
            <a
              href="https://github.com/makyfj"
              target="_blank"
              rel="noreferrer"
              aria-label="Github Repository"
              className="border rounded-xl p-4 transition-color duration-300 hover:border-foreground"
            >
              <Button variant="link" aria-label="Github Link">
                <GithubIcon className="text-2xl" />
              </Button>
            </a>
            <a
              href="mailto:franklinjaradev@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Address"
              className="border rounded-xl p-4 transition-color duration-300 hover:border-foreground"
            >
              <Button variant="link" aria-label="Email Link">
                <Mail className="text-2xl" />
              </Button>
            </a>
            <ModeToggle />
          </CardFooter>
        </Card>
      </div>
      <Card className="pt-4 transition-color duration-300 hover:border-foreground md:w-4/5 md:mx-auto">
        <Toolkit />
      </Card>
    </main>
  )
}
