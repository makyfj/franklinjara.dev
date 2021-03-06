import type { NextPage } from "next"
import Image from "next/image"
import Head from "next/head"

import Socials from "@/components/socials"
import Toolkit from "@/components/toolkit"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Franklin Jara</title>
        <meta
          name="description"
          content="
          Franklin Jara is a Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master's Degree in
          Computer Science with specialization in Software Engineering. 
        "
        />
        <meta name="title" content="Franklin Jara" />
        <meta
          name="keywords"
          content="Franklin, Jara, Software, Engineering, Full Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center gap-4 my-2">
        <div>
          <h1 className="text-lg font-bold text-center">Franklin Jara</h1>
        </div>

        <Socials />
        <p className="max-w-sm mx-2 my-2 text-center sm:max-w-xl">
          Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi
          University pursuing a Master{`'`}s Degree in Computer Science with
          specialization in Software Engineering. I enjoy coding, working out
          and techno. I{`'`}m always pushing myself harder than yesterday to
          become a great software engineer and human being.
        </p>
        <Toolkit />
      </div>
    </>
  )
}

export default Home
