import { AiFillStar, AiOutlineLink, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"

import { PinnedRepositories } from "@/hooks/useGitHub"
import { iconVariants } from "@/utils/animation"

interface ProjectItemProps {
  projectItems: PinnedRepositories[]
}

const ProjectItem = ({ projectItems }: ProjectItemProps) => {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-4 mx-auto max-w-sm sm:max-w-lg p-2">
      {projectItems.map((project, index) => (
        <div
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
          <motion.a
            variants={iconVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            href={project.link}
            className="flex justify-center items-center gap-1"
          >
            Source code
            <AiFillGithub className="w-5 h-5 text-sky-400 hover:text-sky-600" />
          </motion.a>
          {project.website && (
            <motion.a
              variants={iconVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              href={project.website}
              className="flex justify-center items-center gap-1"
            >
              Demo
              <AiOutlineLink className="w-5 h-5 text-sky-400 hover:text-sky-600" />
            </motion.a>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectItem
