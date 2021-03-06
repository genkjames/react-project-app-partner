import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className="top-navigation">
      <p>Reactor</p>
      <nav>
        {props.login && <Link to="/login">Log In</Link>}
      </nav>
    </div>
  )
}

export default Navigation;