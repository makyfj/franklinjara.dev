import { FcSettings, FcSupport } from "react-icons/fc"
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
  SiChakraui,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiHeroku,
  SiCplusplus,
  SiJava,
  SiNestjs,
  SiGraphql,
  SiApollographql,
  SiGithub,
  SiGit,
  SiEslint,
} from "react-icons/si"

import ToolkitItem from "./toolkit-item"

const Toolkit = () => {
  return (
    <>
      <div className="flex gap-1">
        <h2 className="text-2xl text-center">Toolkit</h2>
        <FcSettings className="icon-size" />
        <FcSupport className="icon-size" />
      </div>
      <p className="text-center w-4/5 md:w-3/5 lg:w-2/5">
        I use a variety of tools to get through all the obstacles as efficiently
        as possible. I really enjoy working with statically typed languages,
        especially TypeScript. This negates most of the silly bugs that could
        sneak into the codebase and creates a quick feedback loop to fix all the
        little bugs as you write and refactor new code.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 max-w-sm sm:max-w-lg mx-auto bg-slate-700 dark:bg-slate-300 text-slate-300 dark:text-slate-700 p-2 rounded shadow shadow-xl">
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
        <ToolkitItem name="SiGithub" icon={SiGithub} />
        <ToolkitItem name="Apollo" icon={SiApollographql} />
        <ToolkitItem name="GraphQL" icon={SiGraphql} />
        <ToolkitItem name="NestJS" icon={SiNestjs} />
        <ToolkitItem name="Java" icon={SiJava} />
        <ToolkitItem name="C++" icon={SiCplusplus} />
        <ToolkitItem name="Heroku" icon={SiHeroku} />
        <ToolkitItem name="Redux" icon={SiRedux} />
        <ToolkitItem name="Chakra" icon={SiChakraui} />
        <ToolkitItem name="MongoDB" icon={SiMongodb} />
        <ToolkitItem name="Express" icon={SiExpress} />
        <ToolkitItem name="NodeJS" icon={SiNodedotjs} />
        <ToolkitItem name="MySQL" icon={SiMysql} />
        <ToolkitItem name="Eslint" icon={SiEslint} />
        <ToolkitItem name="PostgreSQL" icon={SiPostgresql} />
      </div>
    </>
  )
}

export default Toolkit
