import React, { Component } from 'react';
import Navigation from '../Navigation';

class Form extends Component {
  render() {
    return (
      <div className="signup-login">
        <div className="wrapper">
          <Navigation />
          <form>
            <input 
              type="text"
              placeholder="Username"
            />
            <input 
              type="email"
              placeholder="Email"
            />
            <input 
              type="password"
              placeholder="Password"
            />
            <button>{this.props.label}</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;