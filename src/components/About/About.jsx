import React from "react";
import Me from "../../assets/Me.jpeg";
import Henry from "../../assets/logoHenry.png";
import { FaUsers, FaBookOpen } from "react-icons/fa";
import "./About.css"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="I_am" width="400px" />
          </div>
        </div>
        <div className="about__content" >
          <div className="about__cards">
            
          
          <div className="about__card">
            <img
              src="https://assets.soyhenry.com/icons/favicon-32x32.png"
              alt="Soy Henry"
              className="about__icon"
              height="32px"
              width="32px"
            />
            <h5>Henry</h5>
            <small>Full Stack Developer</small>
          </div>
          <div className="about__card">
            <FaBookOpen className="about__icon" />
            <h5>Extensive Knowledge</h5>
            <small>Image and software design</small>
          </div>
          <div className="about__card">
            <FaUsers className="about__icon" />
            <h5>Soft Skills</h5>
            <small>Git Flow, comunication, team work an more...</small>
          </div>
          </div>
          <p>
            Full Stack Developer. Currently improving my skills with the
            learning and efficient management of React, Redux, Express, NodeJs,
            Postgresql, Sequelize. Experience developing projects with agile
            methodologies, specialized in the development of user interfaces and
            user experiences in general. I like to work closely with designers
            and other web developers to create modern web sites and
            applications, and attractive, using the PERN Stack (PostgreSQL,
            Express, React, Nodejs) to generate scalable and customizable
            projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default About;
