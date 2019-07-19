import React, { Component } from 'react';

export class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='create-user-container'>
        <form onSubmit={this.handleSubmit}>
          <h1>Create New User Account</h1>
          <label htmlFor='email' className='login-label'>
            <i className="material-icons">
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
            <i className="material-icons">
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

export default CreateUser;