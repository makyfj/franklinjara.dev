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

        <Socials />
        <p className="text-center max-w-sm sm:max-w-xl my-2 mx-2">
          Student @ Adelphi University pursuing a Master{`'`}s Degree in
          Computer Science with specialization in Software Engineering. I enjoy
          coding, working out and techno. Always pushing myself harder than
          yesterday to become a great software engineer and human being.
        </p>
        <Toolkit />
      </div>
    </>
  )
}

export default Main
