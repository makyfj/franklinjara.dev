import { FcSupport, FcSettings } from "react-icons/fc"
import Head from "next/head"
import { motion } from "framer-motion"

import { itemVariants } from "@/utils/animation"

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | FJ</title>
      </Head>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={1 * 0.2}
        className="flex justify-center items-center gap-1"
      >
        <h1 className="text-lg text-center">Coming soon...</h1>
        <FcSupport className="icon-size" />
        <FcSettings className="icon-size" />
      </motion.div>
    </>
  )
}

export default Blog
