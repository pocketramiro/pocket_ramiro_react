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

  handleSelected = (event) => {
    const { checked } = event.target
    this.setState({isSelected: checked})
  }

  handleChange = (event) => {
    const { name } = event.target
    if(!name) return;
    this.setState({title: name , isSelected: false })
  }

  render() {
    const {isSelected, title} = this.state

    const mainNavigation = (
      <section id='menu' onClick={this.handleChange}>
        <NavLink to='/tickets' name='Tickets' className='link1'>
          <i className="material-icons menu-icons"> insert_chart</i>
            Tickets
        </NavLink>
        <NavLink to='/assets' name='Assets' className='link1'>
          <i className="material-icons menu-icons"> insert_chart</i>
            Assets
        </NavLink>
        <NavLink to='/parts' name='Parts'> 
          <i className="material-icons menu-icons"> business_center</i>
            Parts
        </NavLink>
        <NavLink to='/companies' name='Companies'>
          <i className="material-icons menu-icons"> business </i>
          Companies
        </NavLink>
      </section>
    );

return (
      <div>
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
        {title.length === 0 ? <h3>Work Task</h3> : <h3>{title}</h3>}
        </section>
        <section className="mobile-menu">
          {isSelected && mainNavigation}
        </section>
      </div>
    )
  }
};

export default Nav;
