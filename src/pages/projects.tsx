import { GetStaticProps, InferGetStaticPropsType } from "next"
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

const Projects = ({
  pinnedRepositories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: projects = pinnedRepositories } =
    useGitHubPinnedRepositories("makyfj")
  return (
    <>
      <Head>
        <title>Projects | Franklin Jara</title>

        <meta
          name="description"
          content="
          Franklin Jara is a Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master{`'`}s Degree in
          Computer Science with specialization in Software Engineering. 
        "
        />
        <meta name="title" content="Franklin Jara | Projects" />
        <meta
          name="keywords"
          content="Franklin, Jara, Software, Engineering, Full Stack Developer, Projects"
        />
      </Head>
      <div className="flex justify-center gap-1">
        <h1 className="mb-4 text-lg font-bold">Did you say side projects?</h1>
        <FcBusiness className="h-7 w-7" />
        <FcSalesPerformance className="h-7 w-7" />
      </div>
      <div className="flex justify-center max-w-lg mx-auto my-2">
        <p className="mx-2 text-center">
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

export const getStaticProps: GetStaticProps<ProjectsProps> = async (
  context
) => {
  const pinnedRepositories = await fetch(
    "https://gh-pinned-repos.egoist.sh/?username=makyfj"
  ).then(async (response) => response.json() as Promise<PinnedRepositories[]>)

  return {
    props: {
      pinnedRepositories,
    },
    revalidate: 1000
  }
}
