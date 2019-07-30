import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  handleClick = () => {
    const { expanded } = this.state;
    this.setState({expanded: !expanded});
  }
  
  render() {
    const { 
      notes, priority, created_at, resource_type_id, name,  cost, 
      id, inventory, company, category, manual_url, contact_name
    } = this.props.item;
    
    const { expanded } = this.state;

    const calcDaysSinceCreation = (t) => Math.floor(t / (24 * 60 * 60 * 1000));
    const days = calcDaysSinceCreation(Math.abs(new Date() - new Date(created_at)));


    return (
      <section className={priority ? `card card-${priority}` : 'card other-cards'}>
        <header>
          {
            <h3 className='title'>{name ? name : `Ticket ID: ${id}`}</h3>
          }
          {
            company && <p className="header-icon-container">
              <i className={`material-icons header-icon ${company}`}>
            store
              </i>Company: {company}
            </p>
          }

          {
            category && <p className="header-icon-container">
              <i className={`material-icons header-icon ${category}`}>
            category
              </i>Category: {category}
            </p>
          }


          {
            priority && <p className="header-icon-container">
              <i className={`material-icons header-icon ${priority}`}>
            flag
              </i>Priority: {priority}
            </p>
          }

          {
            resource_type_id && <p className="header-icon-container">
              <i className={`material-icons header-icon ${name}`}>
            business
              </i>Name: {name}
            </p>
          }

          {
            cost && <p className="header-icon-container">
              <i className={`material-icons header-icon ${name}`}>
            attach_money
              </i>Cost: {cost}
            </p>
          }

          {
            inventory && <p className="header-icon-container" >
              <i className='material-icons'>
              drafts
              </i>Inventory: {inventory}
            </p>
          }

          { notes &&
            <p className="header-icon-container">
              <i className={`material-icons header-icon`}>
              drafts
              </i>Opened: {created_at.substr(0, 10) }
            </p>
          }
  
          {
            contact_name  && <p className="header-icon-container">
              <i className={`material-icons header-icon`}>
          import_contacts
              </i>Contact: {contact_name}
            </p>
          }

          {
            manual_url && <p className="header-icon-container">
              <i className={`material-icons header-icon`}>
                book
              </i><a href={manual_url}>Manual</a>
            </p>
          }
          <p className="header-icon-container">
            <i className={`material-icons header-icon`}>
            access_time
            </i>{`${days} Days Open`}
          </p>
          <div className='links-container'>

            {
              resource_type_id &&
              <Link to={{
                pathname: `/resources/${resource_type_id}/parts`,
              }}>
                <i className="material-icons" id='parts-icon'>
                  build
                </i>
                <label htmlFor='parts-icon'>Parts</label>
              </Link>
            }

            {
              resource_type_id &&
            <Link to={{
              pathname: `/resources/${resource_type_id}/tickets`
            }}>
              <i className="material-icons" id='tickets-icon'>
                  notes
              </i>
              <label htmlFor='tickets-icon'>Tickets</label>
            </Link>
            }
          </div>

          { notes && 
            <div className='note-btn-ctn'>
              <button onClick={this.handleClick} className='card-content-btn'>
                { expanded ? 'Less' : 'More'}
              </button>
            </div>
          }
          { 
            notes && <p className= { expanded ? '' : 'card-notes'} >
              { expanded ? '' : <i id='single-note' className="material-icons header-icon">
           notes
              </i>}
            Notes: {notes} </p>
          }

        </header>
      </section>
    );
  }
}

export default Card; 

