import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Nav from '../Nav';
import Assets from '../../container/Assets'
import TicketDashboard from '../../container/TicketDashboard'
import CreateTask from '../CreateTask';
import TicketForm from '../TicketForm';

class App extends Component {

  render() {
    return (
      <main>
        <Nav/>
        <Switch>
          <Route exact path='/' component={TicketDashboard}/>
          <Route path='/Assets' component={Assets}/>
          <Route path='/task' component={CreateTask}/>
          <Route component={NotFound}/>
        </Switch>
        <TicketForm/>
      </main>
    )
  }
}

export default App;
