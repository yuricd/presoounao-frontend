import React from 'react';
import './Star.scss';

export const Star = (props) => {
  const { score } = props;
  return (
    <div className="star">
      <div className="score">
        <span>{ score }</span>
      </div>
    </div>
  )
}
