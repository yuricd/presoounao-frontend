import React from 'react';
import './Loading.scss';

export const Loading = (props) => {
  return (
    <div className="loading">
      <span className="icon">
        <i className="fas fa-spinner" />
      </span>
      <span className="text">Carregando...</span>
    </div>
  )
}