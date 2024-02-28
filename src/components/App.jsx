import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header.jsx";
import Carosel from "./carosel";
import About from "./aboutus.jsx";
import Service from "./services";
import Projects from "./projects.jsx"
import Team from "./team.jsx"
import Contact from './contact.jsx'

function App() {

  return (
    <div>
    <Header />
    <Carosel/>
    <About/>
    <Service />
    <Projects />
    <Team />
    <Contact />
    </div>
  )
}

export default App;
