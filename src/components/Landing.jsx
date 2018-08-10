import React from 'react';
import Navigation from './Navigation';
import About from './About';

function Landing(props) {
  return (
    <div>
      <header className="wrapper">
        <Navigation login={true}/>
        <h1>Hello, Welcome to Reactor</h1>
      </header>
      <About />
    </div>
  )
}

export default Landing;