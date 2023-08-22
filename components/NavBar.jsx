import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import UserImg from "../public/assets/images/icons/icon-565x565.png";
import { GITHUB_USERNAME } from "../config";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const webLinks = [
    { name: "Skills", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Repositories", path: "/open-source" },
    // { name: 'Guestbook', path: '/guestbook' },
  ];

  return (
    <div className="bg-sh-dark-500 bg-opacity-80 fixed w-full top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg mb-28">
      <div className="max-w-[50rem] mx-auto w-full px-5 py-2.5 md:px-10 lg:px-0">
        <div className="flex items-center w-full">
          <div className="w-3/4 justify-start items-center inline-flex">
            <div className="dropdown">
              <label
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <HiOutlineMenuAlt1 className="bg-sh-dark p-2 rounded-lg h-9 w-9 mr-5 cursor-pointer" />
              </label>
              {isMenuOpen && (
                <ul className="border border-sh-white-500 bg-sh-dark-500 bg-opacity-[0.97] backdrop-filter shadow-lg shadow-sh-dark-500 rounded-md absolute mt-3 px-2 py-5 w-64 space-y-5">
                  {webLinks.map((link, index) => (
                    <li key={index} onClick={() => setIsMenuOpen(false)}>
                      <Link href={link.path}>
                        <a
                          className={
                            router.pathname == link.path
                              ? "menu-item active"
                              : "menu-item"
                          }
                        >
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link href="/">
              <a className="rounded-full border-2 border-sh-blue flex mr-7 w-10 h-10 scale-90 hover:scale-100 transition ease-in select-none">
                <Image
                  className="rounded-full"
                  src={UserImg}
                  alt="Arth Avatar"
                  objectFit="contain"
                  draggable="false"
                />
              </a>
            </Link>
            <div className="hidden md:flex">
              <ul className="inline-flex flex-row gap-3">
                {webLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>
                      <a
                        className={
                          router.pathname == link.path
                            ? "menu-item active"
                            : "menu-item"
                        }
                      >
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-1/4 justify-end text-xl flex gap-3">
            <a
              target="_blank"
              aria-label="github link"
              rel="noopener noreferrer"
              href={`https://github.com/${GITHUB_USERNAME}`}
              className="cursor-pointer p-3 rounded-xl hover:bg-sh-dark transition ease-in"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
