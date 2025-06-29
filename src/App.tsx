import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import hinhNen from './assets/hinhnen.mp4';
function App() {
  return (
    <>
      <Navbar />

      <div className='main-content'>
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={hinhNen} type='video/mp4'/>
        </video>

        <div className='overlay'>
          <div className='page-content'>
          <section id='home'>
             <Hero />
          </section>

          <section id='about'>
              <About />
          </section>
           </div>
          

        </div>



      </div>



    </>
  );
}

export default App;
