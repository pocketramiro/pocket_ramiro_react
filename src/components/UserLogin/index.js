import React, { Component } from 'react'

export default class UserSignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()

  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
              <input 
              type='text' 
              name='email' 
              onChange={this.handleChange}
              value={email}
              />
          </label>
          <label>
            Password
            <input 
            type='password' 
            name='password'
            onChange={this.handleChange}
            value={password}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
