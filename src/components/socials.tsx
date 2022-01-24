import {
  BsGithub,
  BsLinkedin,
  BsFillFileTextFill as Resume,
} from "react-icons/bs"
import { motion } from "framer-motion"

import { itemVariants } from "@/utils/animation"

const Socials = () => {
  return (
    <>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={1 * 0.3}
        className="flex justify-center gap-4"
      >
        <a href="https://www.github.com/makyfj">
          <BsGithub className="social-hover" />
        </a>
        <a href="https://www.linkedin.com/in/franklin-jara-fj">
          <BsLinkedin className="social-hover" />
        </a>
        <a href="files/FranklinJaraResume.pdf">
          <Resume className="social-hover" />
        </a>
      </motion.div>
    </>
  )
}

export default Socials
