import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BsFillMoonFill as Moon, BsFillSunFill as Sun } from "react-icons/bs";
import { FcHome } from "react-icons/fc";

const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex justify-center gap-10 py-5 py-10">
      <Link href="/">
        <a>
          <FcHome className="icon-size" />
        </a>
      </Link>

      <Link href="/">
        <a className="heading">Experience</a>
      </Link>
      <Link href="/">
        <a className="heading">Projects</a>
      </Link>
      <Link href="/contact">
        <a className="heading">Contact</a>
      </Link>
      <Link href="/">
        <a className="heading">Blog</a>
      </Link>
      {theme === "dark" ? (
        <button onClick={toggleTheme}>
          <Moon className="theme-mode" />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <Sun className="theme-mode" />
        </button>
      )}
    </header>
  );
};

export default Header;
