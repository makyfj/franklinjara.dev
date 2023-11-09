"use client"

import { IconType } from "react-icons"
import { motion } from "framer-motion"

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiGithub,
  SiGit,
  SiAwsamplify,
  SiDocker,
  SiAwslambda,
  SiTrpc,
  SiGo,
  SiRust,
} from "react-icons/si"
import { CardContent } from "./ui/card"

const Toolkit = () => {
  return (
    <CardContent className="grid grid-cols-2 md:grid-cols-3 place-content-between gap-4">
      <ToolkitItem name="NextJS" icon={SiNextdotjs} />
      <ToolkitItem name="TypeScript" icon={SiTypescript} />
      <ToolkitItem name="JavaScript" icon={SiJavascript} />
      <ToolkitItem name="Go" icon={SiGo} />
      <ToolkitItem name="Rust" icon={SiRust} />
      <ToolkitItem name="React" icon={SiReact} />
      <ToolkitItem name="Tailwindcss" icon={SiTailwindcss} />
      <ToolkitItem name="Python" icon={SiPython} />
      <ToolkitItem name="Git" icon={SiGit} />
      <ToolkitItem name="Github" icon={SiGithub} />
      <ToolkitItem name="GraphQL" icon={SiGraphql} />
      <ToolkitItem name="MongoDB" icon={SiMongodb} />
      <ToolkitItem name="NodeJS" icon={SiNodedotjs} />
      <ToolkitItem name="MySQL" icon={SiMysql} />
      <ToolkitItem name="Amplify" icon={SiAwsamplify} />
      <ToolkitItem name="Docker" icon={SiDocker} />
      <ToolkitItem name="Lambda" icon={SiAwslambda} />
      <ToolkitItem name="tRPC" icon={SiTrpc} />
      <ToolkitItem name="PostgreSQL" icon={SiPostgresql} />
    </CardContent>
  )
}

export default Toolkit

const ToolkitItem = ({ name, icon }: { name: string; icon: IconType }) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom },
    }),
  }

  const randomNumber = Math.floor(Math.random() * 32)

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      custom={randomNumber * 0.05}
      className="flex space-x-2 justify-center items-center"
      key={name}
    >
      <span>{icon({ className: "w-6 h-6" })}</span>
      <p className="text-sm">{name}</p>
    </motion.div>
  )
}
