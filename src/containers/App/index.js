import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from '../../components/NotFound';
import Nav from '../Nav';
import Dashboard from '../../components/Dashboard';
import Loading from '../../components/Loading/Loading';
import ResourceType from '../../components/ResourceType/index';
import CreateUser from '../CreateUser';
import UserLogin from '../UserLogin';
import PartForm from '../../components/PartForm';
import TicketForm from '../../components/TicketForm'
import ResourceForm from '../CreateResource';

export class App extends Component {

  render() {
    const {isLoading} = this.props;

    return (
      <main className="route-main">
        <Nav />
        { isLoading && <Loading/> }
        <Switch>
          {this.props.session.user_id ?
            <Route exact path='/' render={() => <Redirect to="/resources"/>} /> :
            <Route exact path='/' render={() => <Redirect to="/login"/>} />
          }
          <Route path='/tickets' component={Dashboard}/>
          <Route path='/tickets_list' component={Dashboard}/>
          <Route path='/resources' component={Dashboard}/>
          <Route path='/login' component={UserLogin} />
          <Route path='/create-user' component={CreateUser}/>
          <Route path='/resource_types' component={Dashboard} />
          <Route path='/create-tickets' component={TicketForm} />
          <Route path='/create-parts' component={PartForm}/>
          <Route path='/create-resources' component={ResourceForm}/>
          <Route path='/create-resourcetypes' component={ResourceType}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  session: state.session
});

export default connect(mapStateToProps)(App);
