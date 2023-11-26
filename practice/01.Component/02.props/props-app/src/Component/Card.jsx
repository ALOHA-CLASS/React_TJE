import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
