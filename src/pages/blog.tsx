import { FcSupport, FcSettings } from "react-icons/fc"
import Head from "next/head"

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Franklin Jara</title>
      </Head>
      <div className="flex justify-center items-center gap-1">
        <h1 className="text-lg text-center">Coming soon...</h1>
        <FcSupport className="icon-size" />
        <FcSettings className="icon-size" />
      </div>
    </>
  )
}

export default Blog
