import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../thunks/getTickets';
import { getResources } from '../../thunks/getResources';
import { Card } from '../Card';

export class CardContainer extends Component {

  componentDidMount() {
    if(this.props.history === undefined){
      this.props.getTickets()
    } else {
      this.selectOption()
    }
  }

  selectOption = () => {
    const { pathname } = this.props.history
    switch(pathname){
      case '/Assets':
        this.props.getResources()
        break
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
  getResources: () => dispatch(getResources())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);