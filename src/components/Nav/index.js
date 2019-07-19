import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false,
      title: ''
    }
  }

  handleSelected = (e) => {
    const { checked } = e.target
    this.setState({isSelected: checked})
  }

  handleClick = (event) => {
    if (!event.target.closest('.nav-link')) return;
    const { name } = event.target.closest('.nav-link')
    this.setState({title: name , isSelected: false })
  }

  render() {
    const {isSelected, title} = this.state

    const hamburgerNav = (
      <section id='menu' onClick={this.handleClick}>
        <NavLink to='/tickets' name='Tickets' className='nav-link'>
          <i className="material-icons menu-icons"> insert_chart</i>
            Tickets
        </NavLink>
        <NavLink to='/resources' name='resources' className='nav-link'>
          <i className="material-icons menu-icons"> insert_chart</i>
            Assets
        </NavLink>
        <NavLink to='/parts' name='Parts' className='nav-link'> 
          <i className="material-icons menu-icons"> business_center</i>
            Parts
        </NavLink>
        <NavLink to='/companies' name='Companies' className='nav-link'>
          <i className="material-icons menu-icons"> business </i>
          Companies
        </NavLink>
      </section>
    );

    return (
      <div>
        <div className='nav'>
        <section className='nav-wrapper'>
          <input
            id='hamburger'
            type='checkbox' 
            className='nav-toggle'
            onChange={this.handleSelected}
            checked={isSelected}
          />
          <label htmlFor='hamburger'>
            <div className='bar nav-top'></div>
            <div className='bar nav-middle'></div>
            <div className='bar nav-bottom'></div>
          </label>
        </section>
        {title.length === 0 ? <h3> <span>Pocket</span> Ramiro</h3> : <h3>{title}</h3>}
        <NavLink to="/login" className="nav-login">
          Log in
        </NavLink>
        </div>
        <section className="mobile-menu">
          {isSelected && hamburgerNav}
        </section>
      </div> 
    )
  }
};

export default Nav;
