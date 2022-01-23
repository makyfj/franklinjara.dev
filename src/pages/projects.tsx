import { GetStaticProps } from "next"

import {
  PinnedRepositories,
  useGitHubPinnedRepositories,
} from "@/hooks/useGitHub"
import ProjectItem from "@/components/project-item"

interface ProjectsProps {
  pinnedRepositories: PinnedRepositories[]
}

const Projects = ({ pinnedRepositories }: ProjectsProps) => {
  const { data: projects = pinnedRepositories } =
    useGitHubPinnedRepositories("makyf")
  return (
    <>
      <h1 className="text-center text-lg sm:text-xl mb-4">
        Did you say side projects?
      </h1>
      <ProjectItem projectItems={projects} />
    </>
  )
}

export default Projects

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const pinnedRepositories = await fetch(
    "https://gh-pinned-repos.egoist.sh/?username=makyfj"
  ).then(async (response) => response.json() as Promise<PinnedRepositories[]>)

  return {
    props: {
      pinnedRepositories,
    },
  }
}
