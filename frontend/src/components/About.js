import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col xl:flex-row">
        <div className="w-80">
          <h2 className="text-2xl font-semibold text-cyan-900">Dlaczego my?</h2>
          <Paragraph className="text-xl text-slate-700">
            jesteśmy grupą dentystów z miłością do niesienia pomocy i pełnych
            pasji. Posiadamy nowoczesny gabinet stomatologi, ortodoncji oraz
            pracownię RTG. U nas każdy poczuje się konfortowo. Przykładany dużą
            uwagę do dezynfekcji pomiestrzeń i strelizacji narzędzi
          </Paragraph>
        </div>
        <img
          className="md:h-50 sm:h-30"
          src={require("../assets/dentist.png")}
        ></img>
      </div>
    </div>
  );
};

const Paragraph = styled.p``;

export default About;
