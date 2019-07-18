import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPath } from '../../actions';

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false,
      title: ''
    }
  }

  componentDidMount() {
    const splitHref = window.location.href.split('/')
    const path = splitHref[splitHref.length - 1];
    this.props.setPath(path)
  }

  componentDidUpdate() {
    const splitHref = window.location.href.split('/')
    const path = splitHref[splitHref.length - 1];
    if(path !== this.props.path) {
      this.props.setPath(path)
    }
  }

  handleSelected = (e) => {
    const { checked } = e.target
    this.setState({isSelected: checked})
  }

  handleChange = (e) => {
    const { name } = e.target.closest('.nav-link');
    if(!name) return;
    this.setState({title: name , isSelected: false })
  }

  render() {
    const {isSelected, title} = this.state

    const mainNavigation = (
      <section id='menu' onClick={this.handleChange}>
        <NavLink to='/tickets' name='Tickets' className='nav-link'>
          <i className="material-icons menu-icons"> insert_chart</i>
            Tickets
        </NavLink>
        <NavLink to='/assets' name='Assets' className='nav-link'>
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

export const mapStateToProps = state => ({
  path: state.path
})

export const mapDispatchToProps = dispatch => ({
  setPath: (path) => dispatch(setPath(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
