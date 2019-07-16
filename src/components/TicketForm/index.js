import React, { Component } from 'react';

class TicketForm extends Component {
  constructor() {
    super()
    this.state = {
      notes: "",
      priority: "low"
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <form className="ticket-form">
        <textarea 
          name="notes" 
          onChange={e => this.handleChange(e)} 
          placeholder="Ticket Description">
        </textarea>
        <section onChange={e => this.handleChange(e)} className="priority-btns">
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
      </form>
    )
  }
}

export default TicketForm;