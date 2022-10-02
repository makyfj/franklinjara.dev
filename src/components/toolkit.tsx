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
  SiAmazondynamodb,
  SiAwsamplify,
  SiSass,
  SiDocker,
} from "react-icons/si"

import ToolkitItem from "./toolkit-item"

const Toolkit = () => {
  return (
    <>
      <div className="flex gap-1">
        <h2 className="text-lg font-bold text-center">Toolkit</h2>
        <FcSettings className="icon-size" />
        <FcSupport className="icon-size" />
      </div>
      <p className="max-w-sm mx-2 mb-2 text-center sm:max-w-xl">
        I use a variety of tools to get through all the obstacles as efficiently
        as possible. I really enjoy working with statically typed languages,
        especially TypeScript. This negates most of the silly bugs that could
        sneak into the codebase and creates a quick feedback loop to fix all the
        little bugs as you write and refactor new code.
      </p>
      <div className="grid max-w-sm grid-cols-3 gap-4 p-3 rounded shadow-xl p--auto sm:grid-cols-4 sm:max-w-lg bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
        <ToolkitItem id={1} name="NextJS" icon={SiNextdotjs} />
        <ToolkitItem id={2} name="Neovim" icon={SiNeovim} />
        <ToolkitItem id={3} name="TypeScript" icon={SiTypescript} />
        <ToolkitItem id={4} name="JavaScript" icon={SiJavascript} />
        <ToolkitItem id={5} name="React" icon={SiReact} />
        <ToolkitItem id={6} name="Prettier" icon={SiPrettier} />
        <ToolkitItem id={7} name="HTML5" icon={SiHtml5} />
        <ToolkitItem id={8} name="Tailwindcss" icon={SiTailwindcss} />
        <ToolkitItem id={9} name="CSS3" icon={SiCss3} />
        <ToolkitItem id={10} name="Vercel" icon={SiVercel} />
        <ToolkitItem id={11} name="Python" icon={SiPython} />
        <ToolkitItem id={12} name="Git" icon={SiGit} />
        <ToolkitItem id={13} name="Github" icon={SiGithub} />
        <ToolkitItem id={14} name="Apollo" icon={SiApollographql} />
        <ToolkitItem id={15} name="GraphQL" icon={SiGraphql} />
        <ToolkitItem id={16} name="NestJS" icon={SiNestjs} />
        <ToolkitItem id={17} name="Java" icon={SiJava} />
        <ToolkitItem id={18} name="C++" icon={SiCplusplus} />
        <ToolkitItem id={19} name="Heroku" icon={SiHeroku} />
        <ToolkitItem id={20} name="Redux" icon={SiRedux} />
        <ToolkitItem id={21} name="Chakra" icon={SiChakraui} />
        <ToolkitItem id={22} name="MongoDB" icon={SiMongodb} />
        <ToolkitItem id={23} name="Express" icon={SiExpress} />
        <ToolkitItem id={24} name="NodeJS" icon={SiNodedotjs} />
        <ToolkitItem id={25} name="MySQL" icon={SiMysql} />
        <ToolkitItem id={26} name="Eslint" icon={SiEslint} />
        <ToolkitItem id={27} name="PostgreSQL" icon={SiPostgresql} />
        <ToolkitItem id={28} name="DynamoDB" icon={SiAmazondynamodb} />
        <ToolkitItem id={29} name="Amplify" icon={SiAwsamplify} />
        <ToolkitItem id={30} name="Sass" icon={SiSass} />
        <ToolkitItem id={31} name="Docker" icon={SiDocker} />
      </div>
    </>
  )
}

export default Toolkit
