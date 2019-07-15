import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TicketDashboard from '../../container/TicketDashboard/index'
import CreateTask from '../CreateTask/index';
import Error from '../Error/index';
import Header from '../Header/index';
import Assets from '../../container/Assest/index'

class App extends Component {

  render() {

    return (
      //Header
      <Header>
      <Switch>
        <Route exact path='/' component={TicketDashboard}/>
        <Route path='/Assets' component={Assets}/>
        <Route path='/task' component={CreateTask}/>
        <Route component={Error}/>
      </Switch>
      </Header>
    )
  }
}

export default App;
