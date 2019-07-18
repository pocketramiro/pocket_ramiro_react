import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Nav from '../Nav';
import Dashboard from '../Dashboard'
import CreateTask from '../CreateTask';
import TicketForm from '../TicketForm';

class App extends Component {

  render() {
    return (
      <main>
        <Nav/>
        <Switch>
          <Route path='/tickets' component={Dashboard}/>
          <Route path='/assets' component={Dashboard}/>
          <Route path='/task' component={CreateTask}/>
          <Route component={NotFound}/>
        </Switch>
        <TicketForm/>
      </main>
    )
  }
}

export default App;
