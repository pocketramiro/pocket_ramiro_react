import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postLoginUser } from '../../thunks/postLoginUser';
import { setError } from '../../actions';

export class CreateUser extends Component {

  passwordsMatch = (pass1, pass2) => {
    return pass1 === pass2 ? true : false;
  }

  arePasswordsLongEnough = (pass1, pass2) => {
    return pass1.length > 7 && pass2.length > 7 ? true : false;
  }

  checkPasswords = (pass1, pass2) => {
    let error = '';

    if (!this.passwordsMatch(pass1, pass2)) {
      error = 'The passwords do not match';
    }

    if (!this.arePasswordsLongEnough(pass1, pass2)) {
      error = 'Your password must have at least 8 characters';
    }

    this.setError(error);
    return error ? false : true;
  }



  handleSubmit = e => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('.create-user-input');
    const values = Array.from(inputs).map(input => input.value);
    
    const user = {
      name: values[0],
      email: values[1],
      password_digest: values[2],
      "role": "admin"
    };

    this.checkPasswords(values[2], values[3]) && this.props.postLoginUser(user);
  }

  render() {
    return (
      <div id='create-user-form' className='user-container'>
        <form onSubmit={this.handleSubmit}>
          <h1>Create New User Account</h1>
          <label htmlFor='name' className='login-label'>
            <i className="material-icons">
              account_circle
            </i>
            <input 
              id='name'
              className='create-user-input'
              type='text' 
              name='user-name' 
              placeholder='Enter Name'
            />
          </label>
          <label htmlFor='email' className='login-label'>
            <i className="material-icons">
              account_circle
            </i>
            <input 
              id='email'
              className='create-user-input'
              type='text' 
              name='email' 
              placeholder='Enter Email'
            />
          </label>
          <label htmlFor='password' className='login-label'>
            <i className="material-icons">
              lock
            </i>
            <input 
              id='password'
              className='create-user-input'
              type='password'
              placeholder='Password'
              required 
            />
          </label>
          <label htmlFor='confirmation_password' className='login-label'>
            <i className="material-icons">
              lock
            </i>
            <input 
              id='confirmation_password'
              className='create-user-input'
              type='password' 
              placeholder='Confirm Your Password'
              required 
            />
          </label>
          <p>{this.props.error}</p>
          <input type='submit' className="sign-in-btn"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  postLoginUser: (user) => dispatch(postLoginUser(user)),
  setError: (error) => dispatch(setError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);