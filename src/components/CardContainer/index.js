import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../thunks/getTickets';
import { Card } from '../Card';

export class CardContainer extends Component {

  componentDidMount() {
    this.props.getTickets()
  }

  render () {
    // Needs to be refactored so different items can be accepted
    const displayCards = this.props.tickets.map(data => {
      return <Card key={data.id} data={data}/>
    })
    return (
      <section>
        {displayCards}
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