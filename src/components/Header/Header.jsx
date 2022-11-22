import React from "react";
import CTA from "./CTA";
import "./Header.css";
import Me from "../../assets/header.png";
import Social from "./Social";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Julio Villacorta</h1>

        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Social />
        <div className="me">
          <img src={Me} alt="me" className="img mi" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
