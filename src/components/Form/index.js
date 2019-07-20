import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTicket } from '../../thunks/postTicket';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      notes: "",
      priority: "low"
    };
  }



  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    const { notes, priority } = this.state;
    //Will connect later
    const { user, postTicket } = this.props;
    e.preventDefault();

    const newTicket = {
      table_key: 1,
      table_name: 'Resources',
      user_id: 1,
      notes,
      priority,
    };
    //need to make resource second parameter dynamic
    postTicket(newTicket, 1);
  }

  render() {

    return (
      <div className=''>
        <form className="ticket-form" onSubmit={this.handleSubmit} onChange={this.handleChange} >
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
          <label htmlFor="Notes">Notes
            <textarea name="notes" placeholder="Ticket Description"></textarea>
          </label>
          <select>
            <option></option>
          </select>
          <input type="submit" value="Create New Ticket"/>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  user: store.user
});

export const mapDispatchToProps = (dispatch) => ({
  postTicket: (ticket, id) => dispatch(postTicket(ticket, id))
});

export default connect(null, mapDispatchToProps)(Form);