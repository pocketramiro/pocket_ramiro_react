import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../thunks/getTickets';
import { Card } from '../Card';

export class CardContainer extends Component {

  componentDidMount() {
    // this.props.getTickets()
 
    this.selectOption()
  }

  selectOption = () => {
    const { history } = this.props
    switch(history){
      case undefined:
        this.props.getTickets()
      case '/Assets'
        this.props.
      default:
        break
    }
  }

  render () {
    const { tickets } = this.props;
    //Needs to be refactored so different items can be accepted
    const displayCards = tickets.length && tickets.map(ticket => {
      return <Card key={ticket.id} ticket={ticket}/>
    })
    return (
      <section className='card-container'>
        {displayCards}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  tickets: state.tickets
})

export const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  getResources: () => dispatch(get)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);