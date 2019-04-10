import React from 'react';
import './Score.scss';

export const Score = (props) => {
  const { score, total, handleRestart } = props;
  const percentual = score/total;

  return (
    <div className="final-score">
      <div className="container">
        <h1>Você fez</h1>
        <span className="total-score">{score}/{total}</span>
        {(percentual >= .8) ? <h3>Parabéns! Você conhece bem o cenário político e as reviravoltas dos supremos.</h3> :
        (percentual >= .5 && percentual < .8) ? <h3>Você até que tem algum conhecimento, mas ainda não é suficiente para entender a mentalidade dos ministros.</h3> : 
        (percentual >= .3 && percentual < .5) ? <h3>Talvez política pareça uma grande confusão pra você, mas não se preocupe, realmente é.</h3> :
        (percentual < .3) ? <h3>Sua pontuação é a nota que você daria para os políticos?</h3> : ''}
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.hostname}&quote=Eu acertei ${score} de ${total} políticos! E você, consegue dizer quem está preso?`} target="_blank" rel="noopener noreferrer" className="default-btn">Compartilhe!</a>
        <button className="default-btn" onClick={handleRestart}>Jogar novamente</button>
      </div>
    </div>
  )
}
