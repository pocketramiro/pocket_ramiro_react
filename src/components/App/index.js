import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Nav from '../Nav';
import Assets from '../../containers/Assets'
import TicketDashboard from '../TicketDashboard'
import CreateTask from '../CreateTask';
import TicketForm from '../TicketForm';
import UserLogin from '../UserLogin/';

class App extends Component {

  render() {
    return (
      <main>
        <Nav/>
        <UserLogin/>
        {/* <Switch>
          <Route exact path='/' component={TicketDashboard}/>
          <Route path='/Assets' component={Assets}/>
          <Route path='/task' component={CreateTask}/>
          <Route component={NotFound}/>
        </Switch> */}
        {/* <TicketForm/> */}
      </main>
    )
  }
}

export default App;
