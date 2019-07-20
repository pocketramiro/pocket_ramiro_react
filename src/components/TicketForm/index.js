import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTicket } from '../../thunks/postTicket';

class TicketForm extends Component {
  constructor() {
    super();
    this.state = {
      notes: "",
      priority: "low",
      due: ""
    };
  }

  getTodaysDate = () => {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    return (new Date(Date.now() - tzoffset)).toISOString().substr(0, 10);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className="ticket-form" onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <textarea name="notes" placeholder="Ticket Description"></textarea>
        <section className="priority-btns">
          <input type="radio" id="low" name="priority" value="low" defaultChecked />
          <label htmlFor="low">Low</label>
          <input type="radio" id="medium" name="priority" value="medium" />
          <label htmlFor="medium">Medium</label>
          <input type="radio" id="high" name="priority" value="high" />
          <label htmlFor="high">High</label>
          <input type="radio" id="urgent" name="priority" value="urgent" />
          <label htmlFor="urgent">Urgent</label>
          <input type="radio" name="priority" value="safety" />
          <label htmlFor="safety">Safety</label>
        </section>
        <label htmlFor="due-date">Due date:</label>
        <input type="date" id="due-date" name="due" min={this.getTodaysDate()}/>
        <input type="submit" value="Create New Ticket"/>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  postTicket: () => dispatch(postTicket())
});

export default connect(null, mapDispatchToProps)(TicketForm);