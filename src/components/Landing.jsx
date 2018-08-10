import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Article from './content/articles/Article';

function Landing(props) {
  return (
    <div>
      <header className="wrapper">
        <Navigation login={true}/>
        <h1>Hello, Welcome to Reactor</h1>
      </header>
      <About />
      <Article />
    </div>
  )
}

export default Landing;