import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class UserSignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name: ''
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
    const { email, password } = this.state;
    
    return (
      <div className='user-login-container'>
        <form onSubmit={this.handleSubmit}>
      <h1>Login</h1>
          <label htmlFor='email' className='login-label'>
            <i class="material-icons">
              account_circle
            </i>
            <input 
              id='email'
              type='text' 
              name='email' 
              placeholder='Enter Username'
              onChange={this.handleChange}
              value={email}/>
          </label>
          <label htmlFor='password' className='login-label'>
            <i class="material-icons">
              lock
            </i>
            <input 
              id='password'
              type='password' 
              name='password'
              placeholder='Password'
              pattern=".{8,}"
              required title="8 characters minimum"
              onChange={this.handleChange}
              value={password}/>
          </label>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}
