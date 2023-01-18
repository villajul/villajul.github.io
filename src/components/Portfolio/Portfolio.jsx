import React from "react";
import "./Portfolio.css";
import Tecnomerch from "../../assets/Tecnomerch.png";
import Poke from "../../assets/PokemonApp.png";
import Port from "../../assets/Portfolio.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Tecnomerch} alt="Tecnomerch" className="img" />
          </div>
          <h3>Tecnomerch</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PT07G05-Henry/ecommerce-client"
              target="_blanc"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://tecnomerch.christianvillegas.com/"
              target="_blanc"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Poke} alt="PokemonApp" className="img" />
          </div>
          <h3>Pokemon App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/villajul/Pokemon-Api"
              target="_blanc"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://pokemon-client-ten.vercel.app/"
              target="_blanc"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port} alt="Portfolio" className="img" />
          </div>
          <h3>Julio Villacorta</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/villajul/Portfolio"
              target="_blanc"
              className="btn"
            >
              Github
            </a>
            {/* <a href="https://6evi.duckdns.org:1337/" target='_blanc' className="btn btn-primary">Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
