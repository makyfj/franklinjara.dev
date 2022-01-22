import { FcSettings, FcSupport } from "react-icons/fc"

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
        sneak into your codebase and creates a quick feedback loop to fix all
        the little bugs as you write and refactor new code.
      </p>
    </>
  )
}

export default Toolkit
