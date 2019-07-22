import React from 'react';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  const {notes, priority, created_at, resource_type_id, name, cost, id} = props.item;
  const calcDaysSinceCreation = (t) => Math.floor(t / (24 * 60 * 60 * 1000));
  const days = calcDaysSinceCreation(Math.abs(new Date() - new Date(created_at)));

  const config = {
    priority: {
      icon: 'flag',
      label: 'Priority',
    },
    name: {
      icon: 'business',
      label: 'Priority'
    },
    cost: {
      icon: 'attach_money',
      label: 'Cost'
    }
  };
  //This is breaking other Cards info
  const nodes = Object.keys(props.item).map((keyName) => (
    config[keyName] && (
      <p className="header-icon-container">
        <i className={`material-icons header-icon ${props.item.priority}`}>
          {config[keyName].icon}
        </i>{`${config[keyName].label}: ${props.item[keyName]}`}
      </p> 
    )
  ));

  return (
    <section className='card' >
   
      <header>
        {
          <p>Card #:{id}</p>
        }
        {/* {nodes} */}
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

        { 
          resource_type_id &&
            <Link to={{
              pathname: `/resources/${resource_type_id}/parts`, 
            }}>
              <label htmlFor='parts'>
                <i className="material-icons" id='parts'>
                  build
                </i>
                Parts
              </label>
            </Link>
        }

        { 
          resource_type_id &&
            <Link to={{
              pathname: `/resources/${resource_type_id}/tickets`
            }}>
           
                <i className="material-icons" id='tickets'>
                  notes
                </i>
                Tickets

            </Link>
        } 

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