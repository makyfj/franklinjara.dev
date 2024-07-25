import { FileText, GithubIcon, Mail, Settings, Wrench } from "lucide-react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-2">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Card className="duration-300 transition-color hover:border-foreground md:w-2/5 border-0">
          <CardHeader>
            <CardTitle>
              <Image
                src="/img/volg.png"
                width={400}
                height={400}
                alt="Picture of the author"
                className="mx-auto rounded"
                priority={true}
              />
            </CardTitle>
            <CardTitle className="text-center custom-h3">
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
        <Card className="duration-300 transition-color hover:border-foreground md:w-2/5 md:flex md:justify-between md:flex-col border-0">
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
          <CardFooter className="flex items-center justify-around gap-2">
            <a
              href="https://github.com/makyfj"
              target="_blank"
              rel="noreferrer"
              aria-label="Github Repository"
              className="p-4 duration-300 border rounded-xl transition-color hover:border-foreground"
            >
              <GithubIcon className="text-2xl" />
            </a>
            <a
              href="mailto:franklinjaradev@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Address"
              className="p-4 duration-300 border rounded-xl transition-color hover:border-foreground"
            >
              <Mail className="text-2xl" />
            </a>
            <a
              href="/files/Franklin_Jara_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Address"
              className="p-4 duration-300 border rounded-xl transition-color hover:border-foreground"
            >
              <FileText className="text-2xl" />
            </a>
            <ModeToggle />
          </CardFooter>
        </Card>
        <Card className="duration-300 transition-color hover:border-foreground md:w-2/5 md:flex md:justify-between md:flex-col border-0">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 custom-h3">
              Starlit AI
            </CardTitle>
            <CardDescription>
              DALL-E-powered image generator creates visuals from user prompts,
              featuring a community gallery, and credit system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/img/starlit-ai.png"
              alt="Starlit AI Logo"
              width={400}
              height={400}
              priority={true}
              className="w-full rounded"
            />
          </CardContent>
          <CardFooter>
            <a
              href="https://starlit-ai.com"
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <Button variant={"outline"} className="w-full">
                Check out my latest project 🚀
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
