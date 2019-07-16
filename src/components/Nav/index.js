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
    this.setState({title: name })
  }

  render() {
    const {isSelected, title} = this.state
    let mainNavigation = 
      <section id='menu'>
          <NavLink to='/Assets' name='Assets' onClick={this.handleChange}>
            <i class="material-icons"> business </i>
              Assets
          </NavLink>
          <NavLink><i class="material-icons">
business_center
</i>Parts and Inventory</NavLink>
          <NavLink>History</NavLink>
        </section>

return (
      <div>
        <section className='nav-wrapper'>
          <input type='checkbox' className='nav-toggle' id='hamburger'
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