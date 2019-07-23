import React, { Component } from 'react';

class ResourceType extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      company: '',
      contact_number: 0,
      contact_name: ''
    };
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newResource = {
      ...this.state
    };

    this.setState({
      category: '',
      contact_name: '',
      contact_number: 0,
      company: ''
    });
  }
 

  render() {
    const {category, company, contact_name, contact_number} = this.state;


    return (
      <div>
        <section className='nav-wrapper'>
          <input
            id='category'
            type='text' 
            className='part-inputs'
            onChange={this.handleChange}
            value={category}
            name='category'
            placeholder='Enter Category'
          />
          <input
            id='company'
            type='text' 
            className='part-inputs'
            onChange={this.handleChange}
            value={company}
            name='company'
            placeholder='Enter Company'
          />
          <input
            id='contact-name'
            type='text' 
            className='part-inputs'
            onChange={this.handleChange}
            value={contact_name}
            name='contact_name'
            placeholder='Enter contact name'
          />
          <input
            id='contact-number'
            type='number' 
            className='part-inputs'
            onChange={this.handleChange}
            value={contact_number}
            name='contact_number'
            placeholder='Enter Number 3034567890'
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </section>
      </div> 
    );
  }
}





export default ResourceType;
