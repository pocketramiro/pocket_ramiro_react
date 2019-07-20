import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../NotFound';
import Nav from '../Nav';
import Dashboard from '../Dashboard';
import Form from '../Form';
import UserLogin from '../UserLogin/';
import CreateUser from '../CreateUser';

class App extends Component {


  render() {
  
    return (
      <main className="route-main">
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Redirect to="/tickets"/>} />
          <Route path='/tickets' component={Dashboard}/>
          <Route path='/resources' component={Dashboard}/>
          <Route path='/login' component={UserLogin} />
          <Route path='/create-user' component={CreateUser}/>
          <Route path='/create-tickets' component={Form} />
          {/* <Route path='./tickets/:id'render */}
          <Route component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

export default App;
