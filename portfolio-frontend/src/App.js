import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills'
import Contact from './pages/contact'
import About from './pages/about'
import './App.css';
import Certificates from './pages/certificates';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <Skills/>
      <Certificates/>
      <Contact/>
    </div>
  );
}

export default App;

