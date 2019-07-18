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
    this.setState({title: name , isSelected: false })
  }

  render() {
    const {isSelected, title} = this.state

    const hamburgerNav = 
                        <section id='menu'>
                            <NavLink to='/Assets' name='Assets' onClick={this.handleChange} className='link1'>
                            <i className="material-icons menu-icons"> insert_chart</i>
                                Assets
                            </NavLink>
                            <NavLink to='/Parts_and_Inventory'name='Parts' onClick={this.handleChange}> 
                              <i className="material-icons menu-icons"> business_center</i>
                                Parts
                            </NavLink>
                            <NavLink to='/Companies' name='Companies' onClick={this.handleChange}>
                              <i className="material-icons menu-icons"> business </i>
                              Companies
                            </NavLink>
                          </section>

return  this.props.name === undefined ? (
      <div>
        <div className='nav'>
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
    ) : (
      <div>
      <div className='nav'>
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
      </section>
      {title.length === 0 ? <h3> <span>Pocket</span> Ramiro</h3> : <h3>{title}</h3>}
      <NavLink to="" className="nav-login">
        signout
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
