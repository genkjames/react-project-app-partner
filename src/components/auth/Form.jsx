import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state).then(data => console.log(data));
  }


  render() {
    return (
      <div className="signup-login">
        <div className="wrapper">
          <Navigation />
          <div className="login-inputs">
            <nav>
              <Link to="/register" className="register-link">Sign Up</Link>
              <Link to="/login" className="login-link">Login</Link>
            </nav>
            <form onSubmit={this.handleSubmit}>
              {this.props.label === "Sign Up" && 
              <div className="username inputs">
                <input 
                  type="text"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  name="username"
                />
              </div>}
              <div className="email inputs">
                <input 
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                />
              </div>
              <div className="password inputs">
                <input 
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  name="password"
                />
              </div>
              <button>{this.props.label}</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;