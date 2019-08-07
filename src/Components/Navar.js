import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Diseño.css";

export default class Navar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#home">
              Cristal Cabrera
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Sobre mi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Educacion">
                    Educacion <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#habilidades">
                    Habilidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#proyectos">
                    Proyectos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contactos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
