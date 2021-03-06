import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postSession } from '../../thunks/postSession';
import { withRouter } from "react-router-dom";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = this.state;

    
    const response = await this.props.postSession({email, password});

    if ( response.error === 'Forbidden') {
      this.setState({error: response.message});
    } else {
      this.props.history.push('/resources');
    }
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <div id='form-login-container' className='form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-bg'>
          <h1>Login</h1>
          <div id="login-inputs-container">
            <label htmlFor='email' className='login-label'>
              <input
                id='email'
                type='text'
                name='email'
                className='input-login'
                placeholder='Enter Email'
                value={email}
                required title='Enter email'
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor='password' className='login-label'>
              <input
                id='password'
                type='password'
                name='password'
                className='input-login'
                placeholder='Password'
                pattern=".{8,}"
                required title="8 characters minimum"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            { (error.length) ? <p className='login-message'>{error}</p> : <p className='login-message'></p> }
          </div>
          <button id='sign-in-btn'>Sign In</button>
          <p><Link to="/create-user">Create a new account</Link></p>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  postSession: (login_info) => dispatch(postSession(login_info))
});

export default connect(null, mapDispatchToProps)(withRouter(UserLogin));
