import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../NotFound';
import Nav from '../Nav';
import Dashboard from '../Dashboard';
import CreateTask from '../CreateTask';
import TicketForm from '../TicketForm';
import UserLogin from '../UserLogin/';
import Item from '../Item';

class App extends Component {


  render() {
  
    return (
      <main className="route-main">
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Redirect to="/tickets"/>} />
          <Route path='/tickets' component={Dashboard}/>
          <Route path='/resources' component={Dashboard}/>
          <Route path='/task' component={CreateTask} />
          <Route path='/login' component={UserLogin} />
          <Route path='resource/part' component={Item} />
          <Route component={NotFound}/>
        </Switch>
        <TicketForm/>
      </main>
    );
  }
}

export default App;
