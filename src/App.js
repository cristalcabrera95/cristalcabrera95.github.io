import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Navar from './Components/Navar';
import About from './Components/About'
import Education from './Components/Education';
import Proyectos from './Components/Proyectos';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Portada from './Components/Portada';
import{BrowserRouter} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navar/>
        <Portada/>
        <About/>
        <Education/>
        <Skills/>
        <Proyectos/>
        <Contact/> 
        <Switch></Switch>
         </BrowserRouter>
    )
  }
}

export default App;