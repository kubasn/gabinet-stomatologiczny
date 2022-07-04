import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowDownCircleFill } from "react-icons/bs";

const details = (info) => {
  let result = {};
  switch (info) {
    case "ortodoncja":
      result = {
        h2: "Ortodoncja",
        p: "Zajmujemy się leczeniem wad zgryzu, wad szczękowo-twarzowych oraz korygowaniem nieprawidłowości zębowych. Leczenie ortodontyczne przeprowadza się u pacjentów w każdym wieku z powodów profilaktycznych i estetycznych",
      };
      break;
    case "stomatologia":
      result = {
        h2: "Stomatologia",
        p: "Leczymy zmiany próchnicowe, stosujemy rozwiązania które pozwolą skutecznie przywrócić pełny konfort jedzenia",
      };
      break;
    case "profilaktyka":
      result = {
        h2: "Profilaktyka",
        p: "Profilaktyka w naszym centrum, obejmuje pakiet regularnych wizyt kontrolnych i zabiegów, co najmniej raz na pół roku. Pozwoli to zachować zdrowe uzębienie  ",
      };
      break;
    case "protetyka":
      result = {
        h2: "Protetyka",
        p: "Bezbolesne uzupełnienie braków w uzębieniu. W ramach protetyki wykonujemy rekonstrukcje pojedynczych zębów, mosty protetyczne, oraz protezy ( odbudowa całego łuku zębowego)",
      };
      break;
  }
  return result;
};

const InfoDetails = (props) => {
  const [show, setShow] = useState(false);
  const Arrow = styled(BsArrowDownCircleFill)`
    transition: 1s all ease-in-out;
    ${show ? `transform: rotate(180deg) scale(1.5)` : null};

    &:hover {
      transform: scale(1.5) rotate(180deg);
      color: gray;
      cursor: pointer;
    }
  `;

  return (
    <>
      <Arrow onClick={() => setShow(!show)}></Arrow>
      {show ? (
        <div className="bg-slate-300 absolute top-[60px]">
          <h2>{details(props.info).h2}</h2>
          <p>{details(props.info).p}</p>
        </div>
      ) : null}
    </>
  );
};

export default InfoDetails;
