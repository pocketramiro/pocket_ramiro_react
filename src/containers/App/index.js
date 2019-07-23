import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from '../../components/NotFound';
import Nav from '../Nav';
import Dashboard from '../../components/Dashboard';
import Form from '../Form';
import UserLogin from '../UserLogin';
import CreateUser from '../CreateUser';
import DynamicForm from '../../components/DynamicForm';
import Loading from '../../components/Loading/Loading';

export class App extends Component {


  render() {
    const {isLoading} = this.props;
  
    return (
      <main className="route-main">
        <Nav />
        { isLoading && <Loading/> } 
        <Switch>
          { <Route exact path='/' render={() => <Redirect to="/resources"/>} /> }
          <Route path='/tickets' component={Dashboard}/>
          <Route path='/resources' component={Dashboard}/>
          <Route path='/login' component={UserLogin} />
          <Route path='/create-user' component={CreateUser}/>
          <Route path='/resourcetypes' component={Dashboard} />
          <Route path='/create-tickets' component={Form} />
          <Route path='/create-parts' component={DynamicForm}/> 
          <Route path='/create-resources' component={''}/>
          <Route path='/create-resourcetypes' component={''}/>
          <Route component={NotFound}/>
        </Switch>  
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(App);