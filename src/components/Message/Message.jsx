import React from 'react';
import './Message.scss';

export const Message = (props) => {
  const { correct, handleShowDetails, handleNext } = props;
  return (
    <div className="message">
      {(correct) ? (
        <div className="correct">
          <i className="fas fa-check-circle" /> Você acertou!
        </div>
      ) : (
        <div className="wrong">
          <i className="fas fa-times-circle" /> Você errou!
        </div>
      )}
      <div className="bottom">
        <button className="default-btn" onClick={handleShowDetails}>Detalhes</button>
        <button className="default-btn" onClick={handleNext}>Próximo</button>
      </div>
    </div>
  )
}
