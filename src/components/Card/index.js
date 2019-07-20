import React from 'react';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  const {notes, priority, created_at, resource_type_id, name, cost, id} = props.item;
  const calcDaysSinceCreation = (t) => Math.floor(t / (24 * 60 * 60 * 1000));
  const days = calcDaysSinceCreation(Math.abs(new Date() - new Date(created_at)));

  return (
    <section className='' >
      <header>
        {
          <p> #{id}</p>
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
            business
            </i>Cost: {cost}
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
          </i>{`${days} days since ticket opened`}
        </p>

        { 
          resource_type_id &&
            <Link to={{
              pathname: '/resources/parts',
              state: {
                resourceId: resource_type_id
              }
            }}>
              <i className="material-icons">
                more_horiz
              </i>
            </Link>
        }

      </header>
      { notes && <p className='card-notes' >
        <i class="material-icons header-icon">
          notes
        </i>
        Notes: {notes} </p>}
    </section>
  );
};

export default Card;