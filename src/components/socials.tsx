import {
  BsGithub,
  BsLinkedin,
  BsFillFileTextFill as Resume,
} from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <div className="flex justify-center gap-4 text-2xl">
        <a href="https://www.github.com/makyfj">
          <BsGithub className="social-hover" />
        </a>
        <a href="https://www.linkedin.com/in/franklin-jara-fj">
          <BsLinkedin className="social-hover" />
        </a>
        <a href="files/FranklinJaraResume.pdf">
          <Resume className="social-hover" />
        </a>
      </div>
    </>
  );
};

export default Socials;
