import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/julio-augusto-villacorta-48a292238"
        target="_Blanc"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/villajul" target="_Blanc">
        <BsGithub />
      </a>
    </div>
  );
};

export default Social;
