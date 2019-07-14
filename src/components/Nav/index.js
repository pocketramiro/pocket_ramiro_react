import React, { Component } from 'react';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
  }

  handleSelected = () => {
    this.setState({isSelected: !this.state.isSelected})
  }


  render() {
    return (
      <section className='nav-wrapper'>
        <input type='checkbox' className='nav-toggle' id='menu' 
        onClick={this.handleSelected} 
        />
        <label htmlFor='menu'>
        <div className='bar nav-top'></div>
        <div className='bar nav-middle'></div>
        <div className='bar nav-bottom'></div>
        </label>
      </section>
    )
  }
};

export default Nav;