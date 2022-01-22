import Link from "next/link";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileTextFill as Resume,
} from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <div className="flex justify-center gap-4">
        <a href="https://www.github.com/makyfj">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/franklinjara-fj">
          <BsLinkedin />
        </a>
        <a href="files/FranklinJaraResume.pdf">
          <Resume />
        </a>
      </div>
    </>
  );
};

export default Socials;
