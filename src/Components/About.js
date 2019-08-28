import React, { Component } from "react";
import "./AboutCss.css";

class About extends Component {
  render() {
    return (
      <div className="card mb-3 about" id='about'>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.15752-9/69449953_944567479260120_6373345392653762560_n.jpg?_nc_cat=108&_nc_oc=AQlj6Ui5nNwpvY6fpA4mb-HFEtLEfACiYnFInIYBHHuHAthsxqSqSk9mvq93rTgUXyI&_nc_ht=scontent.fgdl5-2.fna&oh=02dc47142e3b786419a4f907b11ca387&oe=5DD331EC" 
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
