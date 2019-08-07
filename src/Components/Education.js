import React, { Component } from "react";
import "./Diseño.css";

export default class Education extends Component {
  render() {
    return (
      <div className="container" id="Educacion">
        <div className="row">
          <div className="offset-sm-2 col-sm-8">
            <div className="headertext text-center">
              <h2>Educacion</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card van">
              <h5 className="card-title">2019</h5>
              <p className="card-text">Front end developer</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card cool ten">
              <p className="card-text">
                {" "}
                <b>LABORATORIA</b>
                <br />
               Curso intensivo de programacion web con especializacion en JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card van">
              <h5 className="card-title">2013-2018</h5>
              <p className="card-text">Derecho</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card cool ten2">
              <p className="card-text">
                {" "}
                <b>UDG Centro Universitario de la Cienega</b>
                <br />
               Licenciatura en Abogado.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
