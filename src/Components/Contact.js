import React, { Component } from "react";
import "./Diseño.css";

export default class Contact extends Component {
  render() {
    return (
      <div class="page-section" id="contact">
      <div class="row">
          <div class="col-md-12">
              <h4 class="widget-title contacts "><strong>CONTACTAME</strong></h4>
          </div>
      </div>
      <div class="row wrapper">
          <form action="https://formspree.io/cristalcabrera9507@gmail.com" method="POST" class="contact-form">
              <fieldset class='form-group'>
                  <input type="text" name="name" id="your-name" placeholder="Nombre" className='form-control' />
              </fieldset>
              <fieldset class="form-group" >
                  <input type="email" id="email" placeholder="Correo" name="_replyto" className='form-control' />
              </fieldset>
              <fieldset class="form-group">
                  <input name="Subject" type="text" id="your-subject" placeholder="Asunto" className='form-control' />
              </fieldset>
              <fieldset class="form-group" >
                  <textarea name="message" id="message" cols="30" rows="6"
                      placeholder="Deja tu mensaje"className='form-control'></textarea>
              </fieldset>
              <fieldset class="col-md-12 col-sm-12">
                  <input type="submit" class="btn btn-primary" value="Enviar" />
              </fieldset>
          </form>
      </div>
  </div>
    );
  }
}

