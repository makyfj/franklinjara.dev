import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { FcBusiness, FcSalesPerformance } from "react-icons/fc"
import { motion } from "framer-motion"

import { itemVariants } from "@/utils/animation"

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
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: projects = pinnedRepositories } =
    useGitHubPinnedRepositories("makyf")
  return (
    <>
      <Head>
        <title>Projects | FJ</title>
      </Head>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={0.8 * 0.2}
      >
        <div className="flex justify-center gap-1">
          <h1 className="text-lg mb-4">Did you say side projects?</h1>
          <FcBusiness className="h-7 w-7" />
          <FcSalesPerformance className="h-7 w-7" />
        </div>
        <div className="flex justify-center max-w-lg mx-auto my-2">
          <p className="text-center mx-2">
            I am always learning new technologies and I enjoy creating and
            playing with side projects to have a better understanding of each
            technology that I am learning.
          </p>
        </div>
      </motion.div>
      <ProjectItem projectItems={projects} />
    </>
  )
}

export default Projects

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async (
  context
) => {
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
