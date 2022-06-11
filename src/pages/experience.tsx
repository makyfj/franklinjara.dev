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

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-1">
          <h1 className="text-lg">What do I do?</h1>
          <FcBusinessman className="w-6 h-6" />
        </div>
        <span className="text-center max-w-sm sm:max-w-lg mt-2 mx-2">
          I am driven by knowledge and passion. With a keen interest in Software
          Engineering, I strive to gain more knowledge and abilities by
          constantly challenging myself to learn new technologies and concepts
          beyond my work though personal projects and self-learning. Outside of
          work, I like to listen techno music and workout.
        </span>
      </div>
      <div className="grid grid-cols-1 my-10 max-w-lg mx-auto">
        <ExperienceItem
          id={1}
          title="Full Stack Developer"
          company="Cherry Hill Programs"
          date="January 2022 - Present"
          description="I work on the front end of the application, and the back end of the API. I work with React, Typescript, Node.js, GraphQL, AWS and Amplify"
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
