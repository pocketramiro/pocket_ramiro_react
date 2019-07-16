import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound/index';
import Nav from '../Nav/index';
import Assets from '../../container/Assets/index'
import TicketDashboard from '../../container/TicketDashboard'
import CreateTask from '../CreateTask';

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
      </main>
    )
  }
}

export default App;
