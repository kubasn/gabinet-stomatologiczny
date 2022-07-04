import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail, AiFillClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import styled from "styled-components";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-cyan-900 text-white flex flex-col px-10 sm:px-0  py-5 sm:items-start sm:justify-around sm:flex-row"
    >
      <div className="">
        <div>
          <h2 className="text-2xl capitalize">informacja</h2>
          <p className=" py-1">
            <span className="flex justify-start ">
              <PhoneIcon /> 12 312 54 43
            </span>
            <span className="flex justify-start">
              <PhoneIcon /> 532 542 430
            </span>
            <span className="flex justify-start">
              <MailIcon /> kontakt@dentistplus.pl
            </span>
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl uppercase">dentist+</h2>
        <p className="py-1 capitalize">
          <span className="flex justify-start">
            <LocationIcon /> ul. Wielicka 5
          </span>{" "}
          <span className="flex justify-start"> 30-522 Kraków</span>
        </p>
      </div>
      <div className="">
        <h2 className="capitalize text-2xl">godziny otwarcia</h2>
        <p className="capitalize py-1">
          <span className="flex justify-start">
            <ClockIcon /> poniedziałek - piątek
          </span>
          <span className="flex justify-start">8.00 - 15.00</span>
        </p>
        <p className="capitalize py-1">
          <span className="flex justify-start">
            <ClockIcon />
            sobota
          </span>
          <span className="flex justify-start">10.00 - 13.00</span>
        </p>
      </div>
    </div>
  );
};

//icons
const PhoneIcon = styled(BsFillTelephoneFill)`
  transform: translate(0, 3px);
  margin-right: 5px;
`;

const MailIcon = styled(AiFillMail)`
  transform: translate(0, 3px);
  margin-right: 5px;
`;

const ClockIcon = styled(AiFillClockCircle)`
  transform: translate(0, 4px);
  margin-right: 5px;
`;

const LocationIcon = styled(HiLocationMarker)`
  transform: translate(0, 3px);
  margin-right: 5px;
`;

export default Contact;
