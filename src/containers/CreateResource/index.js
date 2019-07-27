import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postSession } from '../../thunks/postSession';
import { withRouter } from "react-router-dom";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cost: '',
      error: '',
      resource_type_id: 0
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {, password} = this.state;

    
    const response = await this.props.postSession({email, password});

    if ( response.error === 'Forbidden') {
      this.setState({error: response.message});
    } else {
      this.props.history.push('/resources');
    }
  }

  makeOptions = () => {
    const {resources} = this.props;
    if (resources.length > 0) {
      return  resources.map(prop => {
        return <option key={shortid.generate()} value={`${prop.project_title}`}>{prop.project_title}</option>;
      });
    }
  }

  render() {
    const { name, cost, error } = this.state;

    return (
      <div id='form-login-container' className='form-container'>
        <form onSubmit={this.handleSubmit} className='resource-form-bg'>
          <h1>Create Resouce</h1>
          <select>
          <option defaultValue value=''>Create Resource</option>
            {this.makeOptions()}
          </select>
          <div id="create-resource-inputs-container">
            <label htmlFor='name' className='login-label'>
              <input
                id='name'
                type='text'
                name='name'
                className='input-login'
                placeholder='Enter Name'
                value={name}
                required title='Enter email'
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor='cost' className='login-label'>
              <input
                id='cost'
                type='number'
                name='cost'
                className='input-login'
                placeholder='Password'
                pattern=".{8,}"
                required title="Enter number"
                value={cost}
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


export const mapStateToProps = state => ({
  user: state.session.user_id,
  resources: state.resources
});

export const mapDispatchToProps = dispatch => ({
  postResouce: (resource) => dispatch(postResource(resource))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResourceForm)
);

