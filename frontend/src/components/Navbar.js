import React, { useState } from "react";
import { MenuIcon, XIcon, xIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };

  let scrollTop = () => scroll.scrollTo(0, 0);

  return (
    <div className="w-screen h-[80px] z-10 bg-cyan-900 fixed drop-shadow-lg text-white">
      <div className="px-2 flex justify-between item-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl mr-5 sm:text-4xl ">DENTIST+</h1>
          <ul className="hidden md:flex text-2xl">
            <Item onClick={scrollTop} className="cursor-pointer">
              {" "}
              {/* <Link
                to="myScrollToElement"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              > */}
              Start
              {/* </Link> */}
            </Item>
            <Item className="cursor-pointer">
              {" "}
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Usługi
              </Link>
            </Item>
            <Item className="cursor-pointer">
              {" "}
              <Link
                to="location"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Lokalizacja
              </Link>
            </Item>
            <Item className="cursor-pointer">
              {" "}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Kontakt
              </Link>
            </Item>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 items-center">
          <button className="bg-zinc-50 text-stone-800 font-semibold  h-12 p-2 rounded-md">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Umów wizytę
            </Link>
          </button>
        </div>
        <div onClick={onClick} className="md:hidden flex items-center">
          {show ? (
            <XIcon className="w-10 mx-2" />
          ) : (
            <MenuIcon className="w-10 mx-2 flex items:center" />
          )}
        </div>
      </div>
      <ul
        className={
          show
            ? "absolute w-full px-8 bg-zinc-200 text-black flex flex-col"
            : "hidden"
        }
      >
        <div className="flex flex-col items-center text-center">
          <li className="border-b-2 cursor-pointer text-3xl border-zinc-300 w-full">
            <Link
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Start
            </Link>
          </li>
          <li className="border-b-2 cursor-pointer text-3xl border-zinc-300 w-full">
            <Link
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Usługi
            </Link>
          </li>
          <li className="border-b-2 cursor-pointer text-3xl border-zinc-300 w-full">
            <Link
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Lokalizacja
            </Link>
          </li>
          <li className="border-b-2 cursor-pointer text-3xl border-zinc-300 w-full">
            <Link
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Kontakt
            </Link>
          </li>
        </div>
        <div className="flex flex-col my-4">
          <button className="border-rose-700 bg-cyan-900 text-zinc-50 py-1 rounded-sm">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Umów wizytę
            </Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

const Item = styled.li`
  position: relative;
  &:after {
    position: absolute;
    content: "";
    height: 2px;
    background-color: white;
    width: 0%;
    left: 0;
    right: 0;
    bottom: 10px;
    transition: all 1s ease-in-out;
  }
  &:hover:after {
    width: 100%;
  }

  &:hover {
  }
`;

export default Navbar;
