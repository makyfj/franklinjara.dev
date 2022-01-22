import Image from "next/image";

import Socials from "./socials";
import ContactForm from "./contactForm";

const Main = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 py-4">
        <Image
          src="/images/profile.jpeg"
          alt="Profile image"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-center">Franklin Jara</h1>
        <p className="text-center w-4/5">
          Student @ Adelphi University pursuing a Master{`'`}s Degree in
          Computer Science with specialization in Software Engineering. I enjoy
          coding, working out and techno. Always pushing myself harder than
          yesterday to become a great software engineer and human being.
        </p>
        <Socials />
      </div>
      <ContactForm />
    </>
  );
};

export default Main;
