import React, { Component } from "react";
import "./AboutCss.css";

class About extends Component {
  render() {
    return (
      <div className="card mb-3 about" id='about'>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://lh3.googleusercontent.com/oxs0arIm3YzQVtEJ9qzENyFZX639OTV6wkxiki3BrPk80qCfVSwS46FSzNbMIyTgfKZggDf6yOD0_EvBi9t3F3tOqd9JjE-4SyIyAxQAv_jlTD0bV3TDT-RPZ8bFDsznDXKbWAM-TknF-27dJgVv8cQcv3xIgTR9nQ8m7JISgu2mZ_ZpTLy0HFlalPH1kJcI9J82z3x6Q3qKqGq8_5Tv5DlSziPHfzDXsrFFKugjoN0-4iRXWUXQ1EZSr8htQcKbzPyC6P0uMh7zzvmRorIv3BEFu2dfHW6DwFdCmmAKoSFaAjEpLIu6N2qx4VMulz2vQQzUfHlOgq25watj7EWPaHklfEVlLX5hwZXah39RZy5AQpOFLSSpOfHgnqIHhzg4cG5lX0wRKy_NO64ZA0vjR2TCTzVlVL6lGniEzCLFqh4gzDa-6KUkQsbHTf55R76uT-w1R5CVqmYEnNCuizJCfDlrSJDwYMVyeIzdtYewAQha9j5-QZ9YQ1s8j13ZSALEJyraGfOL-3Y950drxz-qhHLK9H7BU0LsmV41RC-VRe8H7FkyayNnN6M303oeEnWBYI1U33j4UeLlt-qFMjZwTNx6DEFkBjOtrM-4RZSizs5XxxQGPULMj1k3CVQGBU3KUGWcF6ybJYUs4jYVR0WBHD38=s200-no" 
            className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Hola! Soy Cristal</h2>
              <p className="text-card">
                {" "}
                Soy Front End Developer egresada de Laboratoria y tengo un
                background en derecho. Como estudiante de Laboratoria realice
                varios proyectos que que me han permitido desarrollar mi
                conocimiento y obtener experiencia practica en el área de Front
                End Developer. Me considero una persona persistente, dinámica y
                creativa, me adapto facilmente, me encanta aprender cosas nuevas
                y trabajar con personas con las cueles pueda aprender y aportar
                conocimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
