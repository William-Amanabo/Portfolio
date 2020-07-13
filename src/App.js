import React from "react";

import "./css/App.css";
import './css/responsive.css'

import "./css/animate/animate.css";



import Navigation from "./components/Navigation";
import HeroScreen from "./components/HeroScreen";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroScreen />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

