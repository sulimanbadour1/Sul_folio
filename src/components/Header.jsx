import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logos/white.webp";
import menu from "../assets/assets/menu.svg";
import close from "../assets/assets/close.svg";
import { Link } from "react-router-dom";
import { linkedin, github, dribble, behance, email } from "../assets/index";
const Header = () => {
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  const socialLinks = [
    {
      name: "Email",
      icon: email,
      link: "mailto:suliman.badour1@gmail.com",
    },
    {
      name: "Behance",
      icon: behance,
      link: "https://www.behance.net/sulimanbadour",
    },
    {
      name: "Dribbble",
      icon: dribble,
      link: "https://dribbble.com/SulimanBadour",
    },
    {
      name: "github",
      icon: github,
      link: "https://github.com/sulimanbadour1",
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/sulimanbadour/",
    },
  ];
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // console.log("Scrolling", scrollTop);
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] ">
      <nav
        className={`sm:px-16 px-6 w-full flex items-center py-4  top-0 z-50 bg-transparent 
       shadow-black/[0.05]  
       ${scrolled ? "bg-primary dark:bg-indigo-200" : "bg-transparent"}`}
      >
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
          className="w-full flex justify-between items-center max-w-7xl mx-auto "
        >
          {/* Social Icons */}
          <div className=" hidden md:flex flex-row items-center">
            <ul className="hidden sm:flex flex-row gap-4">
              {socialLinks.map((item) => (
                <li
                  key={item.name}
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    setActive(item.link);
                  }}
                >
                  <a
                    href={item.link}
                    target={item.link}
                    rel="noopener noreferrer"
                  >
                    <img src={item.icon} alt={item.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* LOGO */}
          <Link
            to="/"
            className="cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex flex-row items-center">
              <img
                src={Logo}
                alt="Suliman Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </Link>
          {/* Navigation */}
          <div>
            <nav className="flex flex-row items-center p-2 ">
              <ul className="list-none hidden sm:flex sm:flex-row flex-row gap-10">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-[#aaa6c3]"
                    } hover:text-white text-[14px] font-bold cursor-pointer `}
                    onClick={() => {
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
              <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] cursor-pointer object-contain"
                  onClick={() => setToggle(!toggle)}
                />
                <motion.div
                  initial={{ x: 500, opacity: 0, scale: 0.5 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
                  className={`${
                    !toggle ? "hidden" : "flex"
                  }  px-6 py-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 absolute top-20 right-0 mx-10 my-8 min-w[140px] z-10 rounded-xl`}
                >
                  <ul className="list-none flex justify-end items-start flex-col gap-4">
                    {navLinks.map((link) => (
                      <li
                        key={link.id}
                        className={`${
                          active === link.title
                            ? "text-gray-900"
                            : "text-gray-900"
                        }  hover:text-gray-400 font-bold cursor-pointer text-[16px]`}
                        onClick={() => {
                          setActive(link.title);
                          setToggle(!toggle);
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </nav>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
