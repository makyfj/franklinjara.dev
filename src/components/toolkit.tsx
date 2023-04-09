"use client"

import { IconType } from "react-icons"
import { motion } from "framer-motion"

import {
  SiNextdotjs,
  SiNeovim,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPrettier,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiVercel,
  SiPython,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiApollographql,
  SiGithub,
  SiGit,
  SiEslint,
  SiAmazondynamodb,
  SiAwsamplify,
  SiSass,
  SiDocker,
  SiAwslambda,
  SiTrpc,
  SiPrisma,
  SiJirasoftware,
  SiVite,
} from "react-icons/si"
import { Card, CardContent } from "./ui/card"

const Toolkit = () => {
  return (
    <Card className="w-[360px] md:w-[650px] mx-auto">
      <CardContent className="grid grid-cols-3 place-content-between mt-4 gap-4">
        <ToolkitItem name="NextJS" icon={SiNextdotjs} />
        <ToolkitItem name="Neovim" icon={SiNeovim} />
        <ToolkitItem name="TypeScript" icon={SiTypescript} />
        <ToolkitItem name="JavaScript" icon={SiJavascript} />
        <ToolkitItem name="React" icon={SiReact} />
        <ToolkitItem name="Prettier" icon={SiPrettier} />
        <ToolkitItem name="HTML5" icon={SiHtml5} />
        <ToolkitItem name="Tailwindcss" icon={SiTailwindcss} />
        <ToolkitItem name="CSS3" icon={SiCss3} />
        <ToolkitItem name="Vercel" icon={SiVercel} />
        <ToolkitItem name="Python" icon={SiPython} />
        <ToolkitItem name="Git" icon={SiGit} />
        <ToolkitItem name="Github" icon={SiGithub} />
        <ToolkitItem name="Apollo" icon={SiApollographql} />
        <ToolkitItem name="GraphQL" icon={SiGraphql} />
        <ToolkitItem name="Redux" icon={SiRedux} />
        <ToolkitItem name="MongoDB" icon={SiMongodb} />
        <ToolkitItem name="Express" icon={SiExpress} />
        <ToolkitItem name="NodeJS" icon={SiNodedotjs} />
        <ToolkitItem name="MySQL" icon={SiMysql} />
        <ToolkitItem name="Eslint" icon={SiEslint} />
        <ToolkitItem name="Vite" icon={SiVite} />
        <ToolkitItem name="DynamoDB" icon={SiAmazondynamodb} />
        <ToolkitItem name="Amplify" icon={SiAwsamplify} />
        <ToolkitItem name="Sass" icon={SiSass} />
        <ToolkitItem name="Docker" icon={SiDocker} />
        <ToolkitItem name="Lambda" icon={SiAwslambda} />
        <ToolkitItem name="tRPC" icon={SiTrpc} />
        <ToolkitItem name="Prisma" icon={SiPrisma} />
        <ToolkitItem name="Jira" icon={SiJirasoftware} />
        <ToolkitItem name="PostgreSQL" icon={SiPostgresql} />
      </CardContent>
    </Card>
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
