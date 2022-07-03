import React from "react";

const About = () => {
  return (
    <div className="w-full h-96 ">
      <div className="flex justify-center py-10 relative">
        <div className="w-80">
          <h2 className="text-2xl font-semibold text-cyan-900">Dlaczego my?</h2>
          <p className="text-xl text-slate-700">
            jesteśmy grupą dentystów z miłością do niesienia pomocy i pełnych
            pasji. Posiadamy nowoczesny gabinet stomatologi, ortodoncji oraz
            pracownię RTG. U nas każdy poczuje się konfortowo. Przykładany dużą
            uwagę do dezynfekcji pomiestrzeń i strelizacji narzędzi
          </p>
        </div>
        <img
          className="top-0 right-[15%] absolute z-[-1] h-96"
          src={require("../assets/dentist.png")}
        ></img>
      </div>
    </div>
  );
};

export default About;
