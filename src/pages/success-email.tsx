import Head from "next/head"
import { motion } from "framer-motion"

import { itemVariants } from "@/utils/animation"

const SuccessEmail = () => {
  return (
    <>
      <Head>
        <title>Thank you!</title>
      </Head>
      <div className="flex flex-col justify-center items-center gap-5">
        <motion.h1
          custom={1 * 0.2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-lg"
        >
          Thank you!
        </motion.h1>
        <motion.p
          custom={1 * 0.3}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md text-center"
        >
          I{`'`}ll contact you as soon as possible. Feel free to checkout my
          projects on GitHub. Thanks for reaching out 😉
        </motion.p>
        <motion.p
          custom={1 * 0.4}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          - Franklin
        </motion.p>
      </div>
    </>
  )
}

export default SuccessEmail
