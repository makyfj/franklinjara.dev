import Image from "next/image"
import Head from "next/head"

import Socials from "./socials"
import Toolkit from "./toolkit"

const Main = () => {
  return (
    <>
      <Head>
        <title>Home | FJ</title>
      </Head>
      <div className="flex flex-col items-center gap-4 my-2">
        <Image
          src="/images/profile.jpeg"
          alt="Profile image"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-center text-2xl">Franklin</h1>
        <p className="text-center w-4/5 md:w-3/5 lg:w-2/5 my-2">
          Student @ Adelphi University pursuing a Master{`'`}s Degree in
          Computer Science with specialization in Software Engineering. I enjoy
          coding, working out and techno. Always pushing myself harder than
          yesterday to become a great software engineer and human being.
        </p>
        <Socials />
        <Toolkit />
      </div>
    </>
  )
}

export default Main
