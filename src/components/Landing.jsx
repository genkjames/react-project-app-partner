import React from 'react';
import Navigation from './Navigation';

function Landing(props) {
  return (
    <div>
      <Navigation login={true}/>
      <h1>Landing</h1>
    </div>
  )
}

export default Landing;