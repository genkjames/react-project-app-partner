import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

class Form extends Component {
  render() {
    return (
      <div className="signup-login">
        <div className="wrapper">
          <Navigation />
          <div className="login-inputs">
            <nav>
              <Link to="/register">Sign Up</Link>
              <Link to="/login">Login</Link>
            </nav>
            <form>
              {this.props.label === "Register" && 
              <input 
                type="text"
                placeholder="Username"
              />}
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
      </div>
    )
  }
}

export default Form;