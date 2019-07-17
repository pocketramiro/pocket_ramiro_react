import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../thunks/getTickets';
import { Card } from '../Card';

export class CardContainer extends Component {

  componentDidMount() {
    // this.props.getTickets()
  }

  render () {
    const mockTicket = {
        "id": 1,
        "table_key": 15,
        "table_name": "Resources",
        "user_id": 1,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "priority": "low",
        "frequency_unit": "1",
        "frequency_value": 0,
        "created_at": "2019-06-22T22:42:12.000Z",
        "updated_at": "2019-06-22T22:42:12.000Z",
        "active": true
    }
    // Needs to be refactored so different items can be accepted
    // const displayCards = this.props.tickets.map(data => {
    //   return <Card key={data.id} data={data}/>
    // })
    return (
      <section className='card-container'>
        <Card ticket={mockTicket}/>
        <Card ticket={mockTicket}/>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  tickets: state.tickets
})

export const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);