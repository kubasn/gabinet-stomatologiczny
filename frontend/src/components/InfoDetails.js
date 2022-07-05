import React, { Component, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { BsArrowDownCircleFill } from "react-icons/bs";
import CSSTransition from "react-transition-group/CSSTransition";

const InfoDetails = (props) => {
  const transitionName = `example`;
  const appearDuration = 5000;

  const Component = styled.div`
    /* &.fade-enter {
      visibility: hidden;
      opacity: 0;
    }

    // enter to
    &.fade-enter-active {
      visibility: visible;
      opacity: 1;
    }

    // exit from
    &.fade-exit {
      visibility: visible;
      opacity: 1;
    }

    // exit to
    &.fade-exit-active {
      visibility: hidden;
      opacity: 0;
    } */
  `;

  const Paragraph = styled.p`
    /* &:before {
      content: "";
      top:0;
      left:0;
    } */
  `;

  return (
    <>
      {props.info ? (
        <CSSTransition in={true} classNames="fade" timeout={3000} unmountOnExit>
          <Component className="bg-slate-300 top-[210px] w-full left-0 sm:top-[65px] absolute p-3   text-p-2 z-[1] rounded-b-xl">
            <h2 className="text-2xl text-left  font-semibold ">
              {details(props.info).h2}
            </h2>
            <Paragraph className="text-left pl-2">
              {details(props.info).p}
            </Paragraph>
          </Component>
        </CSSTransition>
      ) : null}
    </>
  );
};

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

export default InfoDetails;
