import React, { Component } from "react";
import "./Diseño.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="page-section" id="contact">
          <h4 className="widget-title contacts "><strong>CONTACTAME</strong></h4>
      <div className="row">
          <div className="col-md-6">
      <div className="row wrapper">
          <form action="https://formspree.io/cristalcabrera9507@gmail.com" method="POST" className="contact-form">
              <fieldset className='form-group'>
                  <input type="text" name="name" id="your-name" placeholder="Nombre" className='form-control' />
              </fieldset>
              <fieldset className="form-group" >
                  <input type="email" id="email" placeholder="Correo" name="_replyto" className='form-control' />
              </fieldset>
              <fieldset className="form-group">
                  <input name="Subject" type="text" id="your-subject" placeholder="Asunto" className='form-control' />
              </fieldset>
              <fieldset className="form-group" >
                  <textarea name="message" id="message" cols="30" rows="6"
                      placeholder="Deja tu mensaje"className='form-control'></textarea>
              </fieldset>
              <fieldset className="col-md-12 col-sm-12">
                  <input type="submit" className="btn btn-primary" value="Enviar" />
              </fieldset>
          </form>
          </div>
          </div>
          <div className="col-md-6">
          <ul class="list-unstyled">
  <li class="media">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/245px-Gmail_Icon.svg.png" class="mr-3" alt="..."/>
    <div class="media-body">
      <h5 class="mt-0 mb-1">cristalcabrera9507@gmail.com</h5>
    </div>
  </li>
  <li class="media my-4">
    <img src="http://www.cascognv.com.mx/wp-content/uploads/2017/06/icono-telefono.png" class="mr-3" alt="..."/>
    <div class="media-body">
      <h5 class="mt-0 mb-1">33-22-07-14-03</h5>
    </div>
  </li>
  <li class="media">
    <img src="https://fatimamartinez.es/wp-content/uploads/2019/02/Logo-Linkedin.png" class="mr-3" alt="..."/>
    <div class="media-body">
      <h5 class="mt-0 mb-1">rosa-cristal-cabrera</h5>
    </div>
  </li>
</ul>
              </div>
          
      </div>
  </div>
    );
  }
}

