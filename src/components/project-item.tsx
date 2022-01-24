import { AiFillStar, AiOutlineLink, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"

import { PinnedRepositories } from "@/hooks/useGitHub"

interface ProjectItemProps {
  projectItems: PinnedRepositories[]
}

const ProjectItem = ({ projectItems }: ProjectItemProps) => {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-4 mx-auto max-w-sm sm:max-w-lg p-2">
      {projectItems.map((project, index) => (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 bg-slate-300 dark:bg-slate-700 shadow shadow-xl p-3 rounded justify-items-center"
          key={index}
        >
          <h2 className="text-lg">{project.repo}</h2>
          <p className="flex justify-center items-center gap-1">
            {project.stars} <AiFillStar className="w-5 h-5 text-yellow-400" />
          </p>
          <p className="text-center my-2">{project.description}</p>
          <div className="flex justify-center items-center">
            <p className="">{project.language}</p>
          </div>
          <a
            href={project.link}
            className="flex justify-center items-center gap-1"
          >
            Source code
            <AiFillGithub className="w-5 h-5 text-sky-400 hover:text-sky-600" />
          </a>
          {project.website && (
            <a
              href={project.website}
              className="flex justify-center items-center gap-1"
            >
              Demo
              <AiOutlineLink className="w-5 h-5 text-sky-400 hover:text-sky-600" />
            </a>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectItem
