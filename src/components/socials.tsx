import {
  BsGithub,
  BsLinkedin,
  BsFillFileTextFill as Resume,
} from "react-icons/bs"
import { motion } from "framer-motion"

import { iconVariants } from "@/utils/animation"

const Socials = () => {
  return (
    <>
      <div className="flex justify-center gap-4">
        <motion.a
          variants={iconVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          href="https://www.github.com/makyfj"
        >
          <BsGithub className="social-hover" />
        </motion.a>
        {/* <motion.a */}
        {/*   variants={iconVariants} */}
        {/*   whileHover="whileHover" */}
        {/*   whileTap="whileTap" */}
        {/*   href="https://www.linkedin.com/in/franklin-jara-fj" */}
        {/* > */}
        {/*   <BsLinkedin className="social-hover" /> */}
        {/* </motion.a> */}
        {/* <motion.a */}
        {/*   variants={iconVariants} */}
        {/*   whileHover="whileHover" */}
        {/*   whileTap="whileTap" */}
        {/*   href="files/FranklinJaraResume.pdf" */}
        {/* > */}
        {/*   <Resume className="social-hover" /> */}
        {/* </motion.a> */}
      </div>
    </>
  )
}

export default Socials
