import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TicketDashboard from '../../container/TicketDashboard'
import CreateTask from '../CreateTask';
import Error from '../Error';

class App extends Component {

  render() {

    return (
      <Switch>
        <Route exact path='/' component={TicketDashboard}/>
        <Route path='/task' component={CreateTask}/>
        <Route component={Error}/>
      </Switch>
    )
  }
}

export default App;
