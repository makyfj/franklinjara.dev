import ExperienceItem from "@/components/experience-item"
import Head from "next/head"

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience | FJ</title>
      </Head>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center">What do I do?</h1>
        <p>Information about my software engineer career</p>
      </div>
      <div className="grid grid-cols-1 my-10 max-w-sm mx-auto">
        <ExperienceItem
          title="Full Stack Developer"
          company="Cherry Hill Programs"
          date="January 2022 - Present"
          description="I work on the front end of the application, and the back end of the API. I work with React, Typescript, and Node.js."
        />

        <ExperienceItem
          title="Graduate Teaching Assistant"
          company="Adelphi University"
          date="August 2021 - December 2021"
          description="Assistant for the Computer Science Department teaching the fundamentals of programming with Python."
        />
      </div>
    </>
  )
}

export default Experience
