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
            <li>Start</li>
            <li>Usługi</li>
            <li>Lokalizacja</li>
            <li>Kontakt</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="">Umów wizytę</button>
        </div>
        <div onClick={onClick} className="md:hidden">
          {show ? <XIcon className="w-5" /> : <MenuIcon className="w-10" />}
        </div>
      </div>
      <ul
        className={
          show ? "absolute w-full px-8 bg-zinc-200 text-black" : "hidden"
        }
      >
        <li className="border-b-2 text-3xl border-zinc-300 w-full">Start</li>
        <li className="border-b-2 text-3xl border-zinc-300 w-full">Usługi</li>
        <li className="border-b-2 text-3xl border-zinc-300 w-full">
          Lokalizacja
        </li>
        <li className="border-b-2 text-3xl border-zinc-300 w-full">Kontakt</li>
        <div className="flex flex-col my-4">
          <button className="bg-tr py-3 px-3 mb-3">Umów wizytę</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
