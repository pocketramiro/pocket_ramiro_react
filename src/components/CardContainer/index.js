import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CardContainer extends Component {

  componentDidMount() {
    this.props.getTickets()
  }

  render () {
    return (
      <section>
        <button>Create Task</button>
      </section>
    )
  }
} 

export const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets())
})

export default connect(null, mapDispatchToProps)(CreateTask);