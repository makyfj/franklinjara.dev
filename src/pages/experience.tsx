import ExperienceItem from "@/components/experience-item"
import Head from "next/head"
import { FcBusinessman } from "react-icons/fc"

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience | Franklin Jara</title>

        <meta
          name="description"
          content="
          Franklin Jara is a Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master{`'`}s Degree in
          Computer Science with specialization in Software Engineering. 
        "
        />
        <meta name="title" content="Experience | Franklin Jara" />
        <meta
          name="keywords"
          content="Franklin, Jara, Software, Engineering, Full Stack Developer, Experience"
        />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-lg font-bold">What do I do?</h1>
          <FcBusinessman className="w-6 h-6" />
        </div>
        <span className="max-w-sm mx-2 mt-2 text-center sm:max-w-lg">
          I am driven by knowledge and passion. With a keen interest in Software
          Engineering, I strive to gain more knowledge and abilities by
          constantly challenging myself to learn new technologies and concepts
          beyond my work though personal projects and self-learning. Outside of
          work, I like to listen techno music and workout.
        </span>
      </div>
      <div className="grid max-w-lg grid-cols-1 mx-auto my-10">
        <ExperienceItem
          id={1}
          title="Full Stack Developer"
          company="Cherry Hill Programs"
          date="January 2022 - Present"
          description="I am currently working as a Full Stack Developer at Cherry Hill Programs. I am responsible for the 
          development of the front end and back end of the application using React, Node, DynamoDB, AWS, TypeScript, TailwindCSS, and more."
        />

        <ExperienceItem
          id={2}
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
