import { FcSupport, FcSettings } from "react-icons/fc"
import Head from "next/head"

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | FJ</title>
      </Head>
      <div className="flex justify-center items-center gap-1">
        <h1 className="text-lg sm:text-xl text-center">Coming soon...</h1>
        <FcSupport className="text-4xl" />
        <FcSettings className="text-4xl" />
      </div>
    </>
  )
}

export default Blog
