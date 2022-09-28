import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === "light") {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  }, []);

  //toggle theme
  const setTheme = (theme: string) => {
    document.documentElement.classList.add(`${theme}`);
    document.documentElement.classList.remove(
      `${theme === "dark" ? "light" : "dark"}`
    );

    setCurrentTheme(`${theme}`);
    localStorage.theme = `${theme}`;
  };

  return (
    <nav className="w-screen bg-colorWhite dark:bg-colorWhite_DM py-[0.5rem]">
      <div className="flex justify-between items-center relative w-[96%] m-auto">
        <Link href="/">
          <Image
            className="cursor-pointer"
            width={40}
            height={25}
            src="/images/logo.png"
            alt="logo"
          />
        </Link>

        <div className="bg-colorLight dark:bg-colorLight_DM py-2 px-[1.6rem] rounded-md w-[32vw] items-center gap-3 text-colorGrayLight sm:hidden lg:flex">
          <i className={`bi bi-search text-sm flex items-center`}></i>
          <input
            className="text-colorDark outline-none dark:text-colorDark_DM bg-transparent w-[100%] placeholder:text-colorGrayDark dark:placeholder:text-colorGrayDark_DM"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="flex bg-colorLight dark:bg-colorLight_DM w-[5rem] h-[2rem] rounded-full cursor-pointer">
            <i
              className={`bi bi-brightness-high-fill text-sm w-1/2 h-full flex items-center justify-center ${
                currentTheme === "light" ? "active-theme" : ""
              }`}
              onClick={() => {
                setTheme("light");
              }}></i>
            <i
              className={`bi bi-moon-fill text-sm w-1/2 h-full flex items-center justify-center ${
                currentTheme === "dark" ? "active-theme" : ""
              }`}
              onClick={() => {
                setTheme("dark");
              }}></i>
          </div>
          <div className="flex items-center gap-2">
            <div className="block w-[2rem] h-[2rem] overflow-hidden rounded-[50%]">
              <Image
                width={40}
                height={40}
                src="/images/me.jpeg"
                alt="Oreol profile"
              />
            </div>
            <h5>Oreol Noumodong</h5>
            <div className="">
              <i
                className={`bi bi-chevron-down text-sm w-1/2 h-full flex items-center justify-center`}></i>
            </div>
          </div>
          <button className="sm:block lg:hidden">
            <i
              className={`bi bi-list w-1/2 h-full flex items-center justify-center text-lg`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
