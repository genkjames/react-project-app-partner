import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Article from './content/articles/Article';
import Location from './content/locations/Location';
import Footer from './footer/Footer';

function Landing(props) {
  return (
    <div>
      <header>
        <div className="wrapper">
          <Navigation login={true}/>
          <h1>Hello, Welcome to Reactor</h1>
        </div>
      </header>
      <About />
      <Article />
      <Location />
      <Footer />
    </div>
  )
}

export default Landing;