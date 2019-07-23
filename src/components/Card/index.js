import React from 'react';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  const {notes, priority, created_at, resource_type_id, name, cost, id, inventory} = props.item;
  const calcDaysSinceCreation = (t) => Math.floor(t / (24 * 60 * 60 * 1000));
  const days = calcDaysSinceCreation(Math.abs(new Date() - new Date(created_at)));

  return (
    <section className={`card card-${priority}`}>

      <header>
        {
          <h3 className='title'>{name ? name : `Ticket Id: ${id}`}</h3>
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
          inventory && <p className="header-icon-container">
            <i className={`material-icons header-icon`}>
              drafts
            </i>Inventory: {inventory}
          </p>
        }

        <p className="header-icon-container">
          <i className={`material-icons header-icon`}>
            drafts
          </i>Opened: {created_at.substr(0, 10)}
        </p>

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

        { notes && <p className='card-notes' >
          <i id='single-note' className="material-icons header-icon">
          notes
          </i>
        Notes: {notes} </p>}
      </header>
    </section>
  );
};

export default Card;
