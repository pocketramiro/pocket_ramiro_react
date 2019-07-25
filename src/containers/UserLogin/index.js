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
      <div id='login-form' className='user-container'>
        <form onSubmit={this.handleSubmit} >
          <h1>Login</h1>
          <label htmlFor='email' className='login-label'>
            <i className="material-icons">
              account_circle
            </i>
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
            <i className="material-icons">
              lock
            </i>
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
          <button id='sign-in-btn'>Sign In</button>
          { (error.length) ? <p>{error}</p> : <p></p> }
          <p>Want to create a new account? <Link to="/create-user">Create a new account</Link></p>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  postSession: (login_info) => dispatch(postSession(login_info))
});

export default connect(null, mapDispatchToProps)(withRouter(UserLogin));
