import React, { Component } from 'react';
import Nav from '../Nav/index'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange = (title) => {
    this.setState({title})
  }


  render() {
    const { title, handleChange } = this.state

    return (
      <header>
        <Nav 
        handleChange={handleChange}
        />
        {title.length === 0 ? <h3>Work Task</h3> : <h3>{title}</h3>}
      </header>
    )
  } 
};
export default Header;