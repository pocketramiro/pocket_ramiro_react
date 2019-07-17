import React from 'react';

export const Card = (props) => {
  const {notes, priority, created_at} = props.ticket
  const calcDaysSinceCreation = (t) => Math.floor(t / (24 * 60 * 60 * 1000));
  const days = calcDaysSinceCreation(Math.abs(new Date() - new Date(created_at)))

  return (
    <section>
      <p className={priority}>Priority: {priority}</p>
      <p>Opened: {created_at.substr(0, 10)}</p>
      <p>{`${days} days since ticket opened`}</p>
      <p>Notes: {notes}</p>
    </section>
  )
}

export default Card;