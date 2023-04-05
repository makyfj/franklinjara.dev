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
        <meta property="og:image" content="/images/franklin.webp" key="image" />
        <meta
          name="keywords"
          content="Franklin, Jara, Software, Engineering, Full Stack Developer, Engineer, Franklin Jara"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iwanttobeinmars" />
        <meta name="twitter:title" content="Franklin Jara" />
        <meta
          name="twitter:description"
          content="
          Franklin Jara is a Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master's Degree in
          Computer Science with specialization in Software Engineering. 
        "
        />

        <meta name="twitter:image" content="/images/franklin.webp" />
      </Head>
      <div className="flex flex-col items-center gap-4 my-2">
        <div className="flex flex-col items-center justify-between gap-4">
          <Image
            src="/images/franklin.webp"
            width={180}
            height={180}
            alt="Franklin Jara"
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold text-center">Franklin Jara</h1>
          <Socials />
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
