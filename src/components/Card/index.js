import React from 'react';

export const Card = (props) => {
  const {notes, priority, created_at, resource_type_id, name, cost} = props.ticket
  const calcDaysSinceCreation = (t) => Math.floor(t / (24 * 60 * 60 * 1000));
  const days = calcDaysSinceCreation(Math.abs(new Date() - new Date(created_at)))

  return (
    <section className="card">
      <header>
        { priority && <p className="header-icon-container">
          <i className={`material-icons header-icon ${priority}`}>
            flag
          </i>Priority: {priority}
        </p> } 

        { resource_type_id && <p className="header-icon-container">
          <i className={`material-icons header-icon ${name}`}>
            business
          </i>Name: {name}
        </p> }
        
        { cost && <p className="header-icon-container">
          <i className={`material-icons header-icon ${name}`}>
            business
          </i>Cost: {cost}
        </p> }

        <p className="header-icon-container">
          <i className={`material-icons header-icon`}>
            drafts
          </i>Opened: {created_at.substr(0, 10)}
        </p>

        <p className="header-icon-container">
          <i className={`material-icons header-icon`}>
            access_time
          </i>{`${days} days since ticket opened`}
        </p>

      </header>
      { notes && <p>Notes: {notes}</p>}
    </section>
  )
}

export default Card;