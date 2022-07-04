import React from "react";
import styled from "styled-components";
import { BsArrowDownCircleFill } from "react-icons/bs";
import InfoDetails from "./InfoDetails";
import { useState } from "react";

const Dentists = () => {
  return (
    <div
      name="services"
      className="relative w-full h-screen  flex flex-col justify-between "
    >
      <div className="flex flex-col items-center max-v-[1200px] m-auto">
        <div className=" flex flex-col justify-center md:items:start w-full px-2 py-8 my-10">
          <p className="mx-auto text-2xl">Leczenie bez stresu</p>
          <p className="mx-auto text-4xl py-3 font-bold ">
            Uśmiechnięci pacjenci
          </p>
          <p className="mx-auto sm:text-3xl text-2xl">
            Doświadczenie i nowoczesne rozwiązania
          </p>
          <img
            className="absolute z-[-1] grayscale left-0 top-0 opacity-50 blur-sm h-full w-full"
            src={require("../assets/3.jpg")}
          ></img>
        </div>
        <div className="border border-slate-300 rounded-xl text-center md:min-w-[760px] sm:min-w-[480px] min-w-full bg-zinc-100 py-3 px-2 ">
          <div className="flex justify-between flex-col sm:flex-row ">
            <div className="flex flex-col justify-center items-center relative">
              <p className="flex px-4 pb-2  rounded-lg text-slate-800 font-semibold uppercase">
                Ortodoncja
              </p>
              <InfoDetails info="ortodoncja" />
            </div>
            <div className="flex flex-col justify-center items-center relative">
              <p className="flex px-4 pb-2  text-slate-800 font-semibold rounded-lg uppercase">
                Stomatologia
              </p>
              <InfoDetails info="stomatologia" />
            </div>
            <div className="flex flex-col justify-center items-center relative">
              <p className="flex px-4 pb-2  text-slate-800 font-semibold rounded-lg uppercase">
                Profilaktyka
              </p>
              <InfoDetails info="profilaktyka" />
            </div>
            <div className="flex flex-col justify-center items-center relative">
              <p className="flex px-4 pb-2  text-slate-800 font-semibold rounded-lg uppercase">
                Protetyka
              </p>
              <InfoDetails info="protetyka" />
            </div>
          </div>
        </div>
        {/* <div
          className="absolute flex flex-col py-8 md:min-w-[760px] 
      buttom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
      border border-slate-300 rounded-xl text-center shadow-xl
      "
        ></div> */}
      </div>
    </div>
  );
};

const Arrow = styled(BsArrowDownCircleFill)`
  transition: 1s all ease-in-out;

  &:hover {
    transform: scale(1.5);
    color: gray;
    cursor: pointer;
  }
`;

export default Dentists;
