import React, { Component } from "react";
import "./Diseño.css";

export default class Skills extends Component {
  render() {
    return (
      <div className=" skills" id='habilidades'>
        <br />
        <h2 className="titleS">Skills</h2>
        <div className="row">
          <div className="col-sm-6">
            <ul className="list-group">
              <h3>Habilidades Blandas</h3>
              <li className="list-group-item list-skills">
                <img
                  src="https://www.edu.xunta.es/espazoAbalar/sites/espazoAbalar/files/datos/1450257386/contido/Instrumentos_de_medida_de_capacidad_alumnado/trabajo_grupo.png"
                  className="Skillimg"
                  alt="..."
                />
                Trabajo en equipo</li>
                <li className="list-group-item list-skills"><img
                  src="https://www.rhpaenews.com/wp-content/uploads/2018/04/adaptabilidad-flechas.png"
                  className="Skillimg"
                  alt="..."
                />
                Adaptabilidad</li>
              <li className="list-group-item list-skills">
                <img
                  src="http://edyaut.blogspot.es/media/cache/resolve/media/files/01/460/659/2017/06/5ce68764399f2936a16b64458e28b402.png"
                  className="Skillimg"
                  alt="..."
                />
                Autodidacta</li>
                <li className="list-group-item list-skills"><img
                  src="https://lh3.googleusercontent.com/xqkrGGedD816-wFE_1HOhAEvlG2NrOnxUq_hfvGS0dg_zt3bVly4_jMjIJfWiuMDk0pI8hP9LPq95unI8zIFDSyMJVihxcqO6C33QswzxACZ7kpA5OVARRHIpsWjPWDy-I9bY_qlvYU_qqMzqYBivaNJCFKqTc3AnMYxKC8064W7Uu4u-C7VAMtXOMBagvjbic3yWAMlrmpcZbUgym_k2oeEoLwusQhmO7ZLpzG27YqeAYfgG9BcW6hOsZnU06pQorI7eTnJUlx2d4-vf0MnRQqMcnJAB6zFRPl_zynNp8csevecEYwmhveXyV2gz2XeE7K514N4wc1j-jNineh7AqdexC5OVnxWM8yEuc0hWXmdrjIJxixIAPu68L2EpOqE29eqrhQTFwewf_wmYfclJxJVvPw5bwrSEFR-Oo7ISFiEoGHswiB5SICojLSmcai4nKi7UvIXi7bcttqhKQD9TZpH8BNYXGPNEJ6zA7KKr4kKqi91-nQIgLPLjNXxMmzX1HoWqx3iIZaUzmPpC41yNZVx3PSm9NA6OSKf3RmW176aP0dif04-JwjeS9EheiTKbBi_DonMYlCtYxYeIFfZ8cnwFalV67hvrmOtBm6sMs-9KyTlPNRffaB8sNOQb6_cyaZEJaYitm0_6wx2UypcJO5-hzjotVzJzgoGzzCtXbmbSJKZfMoSRuTbkLm9RGnhelkPOOQrfbGZKw0zZA=w485-h515-no"
                  className="Skillimg"
                  alt="..."
                />
                Persistente
              </li>
              <li className="list-group-item list-skills">
                <img
                  src="https://infoes.goconqr.com/files/2015/10/Creatividad-1024x1016.png"
                  className="Skillimg"
                  alt="..."
                />
                Creativa
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list-group">
              <h3>Herramientas Tecnicas</h3>
              <li className="list-group-item list-skills"><img
                  src="http://lore.ie/wp-content/uploads/2015/01/responsive-website-design-menu.png"
                  className="Skillimg"
                  alt="..."
                />
                Responsive Web Design</li>
                <li className="list-group-item list-skills"><img
                  src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/landscape/javascriptlang.png"
                  className="Skillimg"
                  alt="..."
                />
                JavaScript ES6</li>
              <li className="list-group-item list-skills"><img
                  src="https://www.pinclipart.com/picdir/big/35-353932_bootstrap-bootstrap-4-logo-png-clipart.png"
                  className="Skillimg"
                  alt="..."
                />Boostrap</li>
                <li className="list-group-item list-skills"><img
                  src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                  className="Skillimg"
                  alt="..."
                />HTML 5</li>
              <li className="list-group-item list-skills"><img
                  src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/89/formation-react-native.png"
                  className="Skillimg"
                  alt="..."
                />ReactJs</li>
                <li className="list-group-item list-skills"><img
                  src="https://i0.wp.com/yogaaereocartagena.es/wp-content/uploads/css-logo-1.png?fit=500%2C500"
                  className="Skillimg"
                  alt="..."
                />CSS 3</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
