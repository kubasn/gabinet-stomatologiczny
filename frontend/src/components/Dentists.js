import React from "react";

const Dentists = () => {
  return (
    <div className="relative w-full h-screen  flex flex-col justify-between ">
      <div className="flex items-center max-v-[1200px] m-auto">
        <div className=" flex flex-col justify-center md:items:start w-full px-2 py-8">
          <p className="mx-auto text-2xl">Leczenie bez stresu</p>
          <p className="mx-auto text-4xl py-3 font-bold ">
            Uśmiechnięci pacjenci
          </p>
          <p className="mx-auto text-3xl">
            Doświadczenie i nowoczesne rozwiązania
          </p>
          <img
            className="absolute z-[-1] grayscale left-0 top-0 opacity-50 blur-sm h-full w-full"
            src={require("../assets/3.jpg")}
          ></img>
        </div>
        {/* <div
          className="absolute flex flex-col py-8 md:min-w-[760px] 
      buttom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
      border border-slate-300 rounded-xl text-center shadow-xl
      "
        ></div> */}
        <p>Usługi</p>
      </div>
    </div>
  );
};

export default Dentists;
