import type { IconType } from "react-icons"
import { motion } from "framer-motion"

import { itemVariants } from "@/utils/animation"

interface ToolkitItemProps {
  id: number
  icon: IconType
  name: string
}

const ToolkitItem = ({ icon, name, id }: ToolkitItemProps) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      custom={(id + 1) * 0.2}
      className="flex space-x-2 justify-center items-center"
      key={id}
    >
      <span>{icon({ className: "w-6 h-6" })}</span>
      <p className="text-sm">{name}</p>
    </motion.div>
  )
}

export default ToolkitItem
