import React, { useState } from "react";
import { MenuIcon, XIcon, xIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-cyan-900 fixed drop-shadow-lg text-white">
      <div className="px-2 flex justify-between item-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl mr-5 sm:text-4xl ">DENTIST+</h1>
          <ul className="hidden md:flex text-2xl">
            <li className="cursor-pointer">Start</li>
            <li className="cursor-pointer">Usługi</li>
            <li className="cursor-pointer">Lokalizacja</li>
            <li className="cursor-pointer">Kontakt</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 items-center">
          <button className="bg-zinc-50 text-stone-800 font-semibold  h-12 p-2 rounded-md">
            Umów wizytę
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
            Start
          </li>
          <li className="border-b-2 cursor-pointer text-3xl border-zinc-300 w-full">
            Usługi
          </li>
          <li className="border-b-2 cursor-pointer text-3xl border-zinc-300 w-full">
            Lokalizacja
          </li>
          <li className="border-b-2 cursor-pointer text-3xl border-zinc-300 w-full">
            Kontakt
          </li>
        </div>
        <div className="flex flex-col my-4">
          <button className="border-rose-700 bg-cyan-900 text-zinc-50 py-1 rounded-sm">
            Umów wizytę
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
