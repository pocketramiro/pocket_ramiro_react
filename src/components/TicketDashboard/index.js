import React from 'react';
import CardContainer from '../CardContainer';
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom';

export const TicketDashboard = ({ location }) => {
  const dataKey = location.pathname.split('/').slice(-1)[0] || 'tickets';
  return (
    <main>
      <CardContainer dataKey={dataKey} />
    </main>
  )
};

export default withRouter(TicketDashboard);