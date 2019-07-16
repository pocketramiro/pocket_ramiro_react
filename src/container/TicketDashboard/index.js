import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveTickets } from '../../thunks/getActiveTickets';

export class TicketDashboard extends Component {

  componentDidMount() {
    this.props.getActiveTickets();
  }

  render() {

    return (
      <main>
      </main>
    )
  }
};

export const mapStateToProps = (state) => ({
  tickets: state.tickets
});

export const mapDispatchToProps = (dispatch) => ({
  getActiveTickets: () => dispatch(getActiveTickets())
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketDashboard);