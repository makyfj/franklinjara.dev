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
    <header className="flex justify-center gap-10 py-5 bg-blue-400 py-10">
      <Link href="/">
        <a>
          <FcHome className="w-5 h-5" />
        </a>
      </Link>

      <Link href="/">
        <a>Experience</a>
      </Link>
      <Link href="/">
        <a>Projects</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
      {theme === "dark" ? (
        <button onClick={toggleTheme}>
          <Moon className="w-5 h-5" />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <Sun className="w-5 h-5" />
        </button>
      )}
    </header>
  );
};

export default Header;
