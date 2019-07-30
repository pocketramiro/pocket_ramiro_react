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
    this.baseState = this.state;
  }

  handleChange = e => {

    const { data } = this.props.resources;
    //optionLabel displays below. The is a glitch preventing the label from showing and the value being passed to state 
    // in the form as an id
    //have to do this inorder for the form visual label to display on click
  
    if (data.length && this.state.resource_type_id === 0) {
      let result = data.find(label => label.attributes.resource_type_id == e.target.value).attributes.name;
      this.setState({optionLabel: result});
    }
    
    const { name, value } = e.target;
    this.setState({ [name]: value } );
  }

  handleSubmit = async e => {
  
    e.preventDefault();
    const { name, cost, resource_type_id } = this.state;
    const { postResource, user_id } = this.props;
    const id = parseInt(resource_type_id);
    const newResource = {
      cost,
      name,
      user_id,
      resource_type_id: id
    };
    

    const response = await postResource(newResource);
 

    // if ( response.error === 'Forbidden') {
    //   this.setState({error: response.message});
    // } else {
    //   this.props.history.push('/resources');
    // }
  }

  handleFormReset = () => {
    const baseState = {
      name: '',
      cost: '',
      error: '',
      resource_type_id: 0,
      optionLabel: ''
    };
    this.setState(() => baseState);
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
      <div id='create-resource-form-container' className='form-container'>
        <form onSubmit={this.handleSubmit} className='resource-form-bg' >
          <h1>Create Resouce</h1> 
          <select 
            className='input-create-resource-dd'
            onChange={this.handleChange}
            onClick={this.resetSelect}
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
                placeholder='Enter Number'
                pattern=".{8,}"
                required title="Enter number"
                value={cost}
                onChange={this.handleChange}
              />
            </label>
            { (error.length) ? <p className='feedback'>{error}</p> : <p className='login-message'></p> }
          </div>
          <button id='sign-in-btn' disabled={!this.state.optionLabel}>Submit</button>
          <button id='reset' onClick={this.handleFormReset} disabled={!this.state.optionLabel}>Reset Form</button>
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

