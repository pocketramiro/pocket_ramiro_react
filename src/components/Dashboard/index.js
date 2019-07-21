import React from 'react';
import CardContainer from '../CardContainer';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  // const dataKey = location.pathname.split('/').slice(-1)[0] || 'tickets';
  // console.log(location)
  // console.log('dataKey', dataKey)
  //pathname is two long when clicking on a resource ticket icon above.
  // datakey is slicing off info we need so I will use the pathname that is being passed in from
  // card a s a prop for render

  // { dataKey === 'tickets' && <CardContainer dataKey={dataKey} /> }
  // { dataKey === 'resources' && <CardContainer dataKey={dataKey} /> }
  // { dataKey === 'parts' && <CardContainer dataKey={dataKey} id={location.state.resourceId}/> }
  // { location.pathname === 'resources/tickets' && 
  return (
    <main>
      <CardContainer />}
      {/* {
        <Link to={`/create-${dataKey}`} className="create-btn-container">
          <button className="create-btn">Create {dataKey}</button>
        </Link>
      } */}
    </main>
  );
};

export default Dashboard;