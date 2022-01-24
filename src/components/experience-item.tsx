import { motion } from "framer-motion"

import { itemVariants } from "@/utils/animation"

interface ExperienceItemProps {
  id: number
  title: string
  company: string
  date: string
  description: string
}

const ExperienceItem = ({
  id,
  title,
  company,
  date,
  description,
}: ExperienceItemProps) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      custom={(id + 1) * 0.2}
      className="bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded p-4 m-2 shadow shadow-xl"
    >
      <div className="mb-4 text-center">
        <h2 className="text-lg">{title}</h2>
        <p className="text-sm sm:text-md">{date}</p>
      </div>
      <h3 className="text sm:text-lg mb-2">{company}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

export default ExperienceItem
