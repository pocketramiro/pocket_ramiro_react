import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Nav from '../Nav';
import TicketDashboard from '../TicketDashboard'
import CreateTask from '../CreateTask';
import TicketForm from '../TicketForm';

class App extends Component {

  render() {
    return (
      <main>
        <Nav/>
        <Switch>
          <Route path='/tickets' component={TicketDashboard}/>
          <Route path='/assets' component={TicketDashboard}/>
          <Route path='/task' component={CreateTask}/>
          <Route component={NotFound}/>
        </Switch>
        <TicketForm/>
      </main>
    )
  }
}

export default App;
