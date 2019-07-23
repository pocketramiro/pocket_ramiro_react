import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postSession } from '../../thunks/postSession';

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.postSession({email, password});
  }

  render() {
    const { email, password } = this.state;

    return (
      <div id='login-form' className='user-container'>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h1>Login</h1>
          <label htmlFor='email' className='login-label'>
            <i className="material-icons">
              account_circle
            </i>
            <input 
              id='email'
              type='text' 
              name='email' 
              placeholder='Enter Username'
              value={email}
            />
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
              value={password}
            />
          </label>
          <button className='sign-in-btn'>Sign In</button>
          <p>Want to create a new account? <Link to="/create-user">Create a new account</Link></p>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  postSession: (login_info) => dispatch(postSession(login_info))
});

export default connect(null, mapDispatchToProps)(UserLogin)