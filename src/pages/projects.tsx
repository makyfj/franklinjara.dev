import { GetStaticProps } from "next"
import Head from "next/head"
import { FcBusiness, FcSalesPerformance } from "react-icons/fc"

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
      <Head>
        <title>Projects | FJ</title>
      </Head>
      <div className="flex justify-center gap-1">
        <h1 className="text-lg sm:text-xl mb-4">Did you say side projects?</h1>
        <FcBusiness className="h-7 w-7" />
        <FcSalesPerformance className="h-7 w-7" />
      </div>
      <div className="flex justify-center max-w-lg mx-auto my-2">
        <p className="text-center mx-2">
          I am always learning new technologies and I enjoy creating and playing
          with side projects to have a better understanding of each technology
          that I am learning.
        </p>
      </div>
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
      revalidate: 120,
    },
  }
}
