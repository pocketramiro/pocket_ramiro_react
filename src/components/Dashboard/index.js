import React from 'react';
import CardContainer from '../CardContainer';
import CreateItem from '../CreateItem';
import { withRouter } from 'react-router';

export const Dashboard = ({ location }) => {
  const dataKey = location.pathname.split('/').slice(-1)[0] || 'tickets';
  
  return (
    <main>
      { dataKey === 'tickets'&& <CardContainer dataKey={dataKey} /> }
      { dataKey === 'resources' && <CardContainer dataKey={dataKey} /> }
      <CreateItem/>
    </main>
  )
}

export default withRouter(Dashboard);
