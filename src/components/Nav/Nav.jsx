import React from "react";
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserCircle, FaBook } from "react-icons/fa";
import { MdContactPage, MdWork } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("");
  console.log(active);
  return (
    <div>
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <FaHome />
        {active === "#" ? <p>Home</p> : null}
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <FaUserCircle />
        {active === "#about" ? <p>About</p> : null}
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <FaBook />
        {active === "#experience" ? <p>Experience</p> : null}
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <MdWork />
        {active === "#portfolio" ? <p>Portfolio</p> : null}
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <MdContactPage />
        {active === "#contact" ? <p>Contact</p> : null}
      </a>
    </nav>
    </div>
  );
};

export default Nav;
