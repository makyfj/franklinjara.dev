import Head from "next/head"
import Image from "next/image"

import Socials from "@/components/socials"
import Toolkit from "@/components/toolkit"

const Home = () => {
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
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <Image
            src="/images/franklin.png"
            alt="Franklin Jara"
            className="rounded-full"
            width={140}
            height={150}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold text-center">Franklin Jara</h1>
            <Socials />
          </div>
        </div>

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
