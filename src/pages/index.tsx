import Head from "next/head"
import Image from "next/image"

import Socials from "@/components/socials"
import Toolkit from "@/components/toolkit"
import NowPlaying from "@/components/now-playing"

const Home = () => {
  return (
    <>
      <Head>
        <title>Franklin Jara | Software Engineer</title>
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
          content="Franklin, Jara, Software, Engineering, Full Stack Developer, Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center gap-4 my-2">
        <div className="flex flex-col items-center justify-between gap-4">
          <Image
            src="/images/ProfileLin.jpeg"
            alt="Franklin Jara"
            className="rounded-full h-44 w-auto"
            width={400}
            height={150}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-center">Franklin Jara</h1>
            <Socials />
          </div>
        </div>
        <p className="max-w-sm mx-2 my-2 text-center sm:max-w-xl text-lg">
          Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi
          University pursuing a Master{`'`}s Degree in Computer Science with
          specialization in Software Engineering. I enjoy coding, working out
          and techno. I{`'`}m always pushing myself harder than yesterday to
          become a great software engineer and human being.
        </p>
        <Toolkit />
        <NowPlaying />
      </div>
    </>
  )
}

export default Home
