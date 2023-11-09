import { ClipboardList, Github, Link, Star } from "lucide-react"
import { Metadata } from "next"

import { Button } from "src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Franklin Jara | Projects",
}

export interface PinnedRepositories {
  owner: string
  repo: string
  description: string
  language: string
  languageColor: string
  stars: string
  forks: string
  link: string
  website: string
}

const Page = async () => {
  const response = await fetch(`https://gh-pinned.nxl.sh/api/user/makyfj`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  })
  const data: PinnedRepositories[] = await response.json()

  return (
    <main className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="custom-h1 justify-center flex items-center gap-2">
            Projects
            <ClipboardList className="h-7 w-7 md:w-10 md:h-10" />
          </CardTitle>
          <CardDescription>
            I have a passion for staying at the forefront of emerging
            technologies, and I am committed to continuously expanding my
            knowledge by actively seeking out new learning opportunities. To
            deepen my understanding of each technology that I study, I often
            embark on side projects, experimenting with new concepts and
            techniques in a hands-on, practical way. This approach not only
            enhances my own skill set but also enables me to bring fresh
            insights and perspectives to my work as a Software Engineer.
          </CardDescription>
        </CardHeader>
      </Card>
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((repo, i) => (
            <Card key={i} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-center custom-h2">
                  {repo.repo}
                </CardTitle>
                <CardDescription className="flex items-center justify-center gap-2">
                  {repo.language} <Star className="h-4 w-4 text-yellow-500" />{" "}
                  {repo.stars}
                </CardDescription>
              </CardHeader>
              <CardContent className="custom-p">{repo.description}</CardContent>
              <CardFooter className="flex items-center justify-around gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button disabled={!repo.website}>
                        <a
                          className="flex items-center gap-2"
                          href={repo.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo <Link className="text-blue-400 h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="custom-p">View Demo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>
                        <a
                          className="flex items-center gap-2"
                          href={repo.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code{" "}
                          <Github className="text-blue-400 h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="custom-p">View Source Code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  )
}

export default Page
