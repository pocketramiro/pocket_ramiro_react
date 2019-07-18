import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../thunks/getTickets';
import { getResources } from '../../thunks/getResources';
import { Card } from '../Card';

export class CardContainer extends Component {
  componentDidUpdate(prevProps) {
    if(prevProps.path !== this.props.path) {
      this.selectOption(this.props.path)
    }
  }

  selectOption = (path) => {
    if(!path) return;
    switch(path){
      case 'assets':
        this.props.getResources()
        break
      default:
        this.props.getTickets()
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
  tickets: state.tickets,
  path: state.path
})

export const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  getResources: () => dispatch(getResources())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);