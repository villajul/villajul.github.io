import React from "react";
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserCircle, FaComments } from "react-icons/fa";
import { MdContactPage, MdWork } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("");
  console.log(active);
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <FaHome />
      {active === "#" ? <p>Home</p>: null}
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
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <MdWork />
      {active === "#portfolio" ? <p>Portfolio</p> : null}
      </a>
      <a
        href="#testimonials"
        onClick={() => setActive("#testimonials")}
        className={active === "#testimonials" ? "active" : ""}
      >
        <FaComments />
      {active === "#testimonials" ? <p>Testimonials</p> : null}
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
  );
};

export default Nav;
