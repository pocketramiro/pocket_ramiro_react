import React from 'react';
import { Link } from 'react-router-dom';

export const List = (props) => {
  const {notes, priority, created_at, resource_type_id, name, cost, id} = props.item;
  const calcDaysSinceCreation = (t) => Math.floor(t / (24 * 60 * 60 * 1000));
  const days = calcDaysSinceCreation(Math.abs(new Date() - new Date(created_at)));
}

  return (
    <section className={'list-container'}>
      <div className='list-heading'>
        <h4>{ id }</h4>
        <h4>{ business }</h4>
        <h4></h4>
      </div>
      <div className={`list-item ${priority}`}></div>
    </section>
  )
