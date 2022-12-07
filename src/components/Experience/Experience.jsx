import React from "react";
import "./Experience.css";
import { FaClipboardCheck } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experticed</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaClipboardCheck className="experience__details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
