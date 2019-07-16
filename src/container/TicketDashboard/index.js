import React, { Component } from 'react';
import Nav from '../../components/Nav/index';
import { connect } from 'react-redux';
import { getActiveTickets } from '../../thunks/getActiveTickets'

class TicketDashboard extends Component {

  componentDidMount() {
    this.props.getActiveTickets();
  }

  render() {

    return (
      <main>
        <header>
          <Nav/>
        </header>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  tickets: state.tickets
});

const mapDispatchToProps = (dispatch) => ({
  getActiveTickets: () => dispatch(getActiveTickets())
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketDashboard);