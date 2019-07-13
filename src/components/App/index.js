import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TicketDashboard from '../../container/TicketDashboard/index'
import CreateTask from '../CreateTask/index';

class App extends Component {

  render() {

    return (
      <Switch>
        <Route exact path='/' component={TicketDashboard}/>
        <Route path='/task' Component={CreateTask}/>
      </Switch>
    )
  }
}

export default App;
