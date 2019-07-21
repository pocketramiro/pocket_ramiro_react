import React from 'react';
import CardContainer from '../CardContainer';
import { Link } from 'react-router-dom';

export const Dashboard = () => {

  return (
    <section>
      <CardContainer />
      {/* {
        <Link to={`/create-${dataKey}`} className="create-btn-container">
          <button className="create-btn">Create {dataKey}</button>
        </Link>
      } */}
    </section>
  );
};

export default Dashboard;