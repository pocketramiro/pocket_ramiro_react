import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TicketDashboard from '../../container/TicketDashboard/index'
import CreateTask from '../CreateTask/index';
import NotFound from '../NotFound/index';
import Nav from '../Nav/index';
import Assets from '../../container/Assets/index'

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
