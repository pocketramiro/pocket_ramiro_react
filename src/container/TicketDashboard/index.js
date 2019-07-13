import React, { Component } from 'react';
import logo from '../../assets/logo.svg'

class TicketDashboard extends Component {

  render() {
    return (
          <main>
            <section>
                <header>
                  <img alt="logo" src={logo}/>
                  <p>Edit <code>src/App.js</code> and save to reload.</p>
                  <a href=
                  "https://reactjs.org" rel="noopener noreferrer" target="_blank">Learn
                  React</a>
                </header>
            </section>
          </main>
    )
  }
}
export default TicketDashboard