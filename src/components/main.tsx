import Image from "next/image"
import Head from "next/head"

import Socials from "./socials"
import Toolkit from "./toolkit"

const Main = () => {
  return (
    <>
      <Head>
        <title>Home | FJ</title>
        <meta
          name="description"
          content="
          Franklin Jara is a Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master{`'`}s Degree in
          Computer Science with specialization in Software Engineering. 
        "
        />
        <meta name="title" content="Franklin Jara" />
        <meta
          name="keywords"
          content="Franklin, Jara, Software, Engineering, Full Stack Developer"
        />
      </Head>
      <div className="flex flex-col items-center gap-4 my-2">
        <div>
          <Image
            src="/images/profile.jpeg"
            alt="Profile image"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="text-center text-lg">Franklin Jara</h1>
        </div>

        <Socials />
        <p className="text-center max-w-sm sm:max-w-xl my-2 mx-2">
          Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi
          University pursuing a Master{`'`}s Degree in Computer Science with
          specialization in Software Engineering. I enjoy coding, working out
          and techno. Always pushing myself harder than yesterday to become a
          great software engineer and human being.
        </p>
        <Toolkit />
      </div>
    </>
  )
}

export default Main
