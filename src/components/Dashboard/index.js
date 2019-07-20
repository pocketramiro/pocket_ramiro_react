import React from 'react';
import CardContainer from '../CardContainer';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

export const Dashboard = ({ location }) => {
  const dataKey = location.pathname.split('/').slice(-1)[0] || 'tickets';
  
  return (
    <main>
      { dataKey === 'tickets' && <CardContainer dataKey={dataKey} /> }
      { dataKey === 'resources' && <CardContainer dataKey={dataKey} /> }
      { dataKey === 'parts' && <CardContainer dataKey={dataKey} id={location.state.resourceId}/> }
      {
        <Link to={`/create-${dataKey}`} className="create-btn-container">
          <button className="create-btn">Create {dataKey}</button>
        </Link>
      }
    </main>
  );
};

export default withRouter(Dashboard);
