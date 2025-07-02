import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skills';
import Project from './components/Project';
import hinhNen from './assets/hinhnen.mp4';
function App() {
  return (
    <>
      <Navbar />

      <div className='main-content'>
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={hinhNen} type='video/mp4'/>
        </video>

       
          <div className='page-content'>
             <div className="overlay"></div>
          <section id='home' className='section'>
             <Hero />
          </section>

          <section id='about' className='section'>
              <About />
          </section >
          <section id='skills' className = 'section'>
              <Skill />
          </section>
           <section id='project' className = 'section'>
              <Project />
          </section>
           </div>
          

        </div>



 



    </>
  );
}

export default App;
