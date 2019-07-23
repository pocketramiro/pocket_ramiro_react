import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSession } from '../../thunks/deleteSession';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
      title: ''
    };
  }

  handleSelected = (e) => {
    const { checked } = e.target;
    this.setState({isSelected: checked});
  }

  handleClick = (e) => {
    if (!e.target.closest('.nav-link')) {
      return;
    }
    const { name } = e.target.closest('.nav-link');
    this.setState({title: name, isSelected: false });
  }

  handleLogout = (e) => {
    this.props.deleteSession(this.props.session.user_id);
  }

  render() {
    const {isSelected, title} = this.state;
    const { name } = this.props.session;

    const hamburgerNav = (
      <section id='menu' onClick={this.handleClick}>
        <NavLink to='/tickets' name='Tickets' className='nav-link'>
          <i className="material-icons menu-icons"> insert_chart</i>
            Tickets
        </NavLink>
        <NavLink to='/resources' name='resources' className='nav-link'>
          <i className="material-icons menu-icons"> insert_chart</i>
            Resources
        </NavLink>
        <NavLink to='/parts' name='Parts' className='nav-link'> 
          <i className="material-icons menu-icons"> business_center</i>
            Parts
        </NavLink>
        <NavLink to='/resourcetypes' name='Resource-Types' className='nav-link'>
          <i className="material-icons menu-icons"> business </i>
          Resource-Types
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
          <div id='login-wrapper'>
            <NavLink to="/login" className="nav-login">
              { !this.props.session.user_id ? 
              <>
                <i className="material-icons">account_circle </i>
                <p id='logout'>Login</p> 
              </> 
                : 
              <>
                <i class="material-icons" id='login-icon'> how_to_reg</i>
                <p onClick={this.handleLogout } >Logout</p>
              </>
              }
            </NavLink>
          </div>
        </div>
        <section className="mobile-menu">
          {isSelected && hamburgerNav}
        </section>
      </div> 
    );
  }
}

export const mapStateToProps = state => ({
  session: state.session
});

export const mapDispatchToProps = dispatch => ({
  deleteSession: (id) => dispatch(deleteSession(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
