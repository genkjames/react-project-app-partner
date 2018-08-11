import React, { Component } from 'react';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange}
            type="email"
            value={this.state.email}
            name="email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    )
  }
}

export default Subscribe;