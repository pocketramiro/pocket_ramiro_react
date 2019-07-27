import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { postResource } from '../../thunks/postResource';
import { withRouter } from "react-router-dom";
const shortid = require('shortid');


class ResourceForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cost: '',
      error: '',
      resource_type_id: 0,
      optionLabel: ''
    };
  }

  handleChange = e => {

    const { data } = this.props.resources;
    if (data.length > 0) {
      console.log(data);
      let result = data.find(label => label.attributes.resource_type_id == e.target.value).attributes.name;
      console.log(result);
      this.setState({optionLabel: result});
    }
    
    const { name, value } = e.target;
    this.setState({ [name]: value } );
  }

  handleSubmit = async e => {
  
    e.preventDefault();
    const { name, cost, resource_type_id } = this.state;
    const { postResource, user_id } = this.props;
    const id = parseInt(resource_type_id)
    const newResource = {
      cost,
      name,
      user_id
    };
    

    const response = await postResource(newResource, id);
    

    // if ( response.error === 'Forbidden') {
    //   this.setState({error: response.message});
    // } else {
    //   this.props.history.push('/resources');
    // }
  }

  makeOptions = () => {
    const { data } = this.props.resources;
    if (data.length > 0) {
      return  data.map(resource => {
        return <option key={shortid.generate()} 
          value={`${resource.attributes.resource_type_id}`}>
          {resource.attributes.name}
        </option>;
      });
    }
  }

  render() {
    const { name, cost, error, optionLabel, resource_type_id} = this.state;

    return (
      <div id='form-login-container' className='form-container'>
        <form onSubmit={this.handleSubmit} className='resource-form-bg'>
          <h1>Create Resouce</h1>
          <select 
            onChange={this.handleChange}
            name='resource_type_id'>
            <option  value={resource_type_id}>{optionLabel}</option>
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
            { (error.length) ? <p className='feedback'>{error}</p> : <p className='login-message'></p> }
          </div>
          <button id='sign-in-btn'>Submit</button>
        </form>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  user_id: state.session.user_id,
  resources: state.resources
});

export const mapDispatchToProps = dispatch => ({
  postResource: (resource) => dispatch(postResource(resource))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResourceForm)
);

