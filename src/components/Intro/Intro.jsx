import React from 'react';
import './Intro.scss';

export const Intro = (props) => {
  const { handleShowIntro } = props;
  return (
    <div className="intro">
      <div className="container">
        <h1>Com tantos políticos investigados e prisões feitas, fica difícil saber quem está preso e quem (ainda) não.</h1>
        <h1>Escolha se o político está preso (à esquerda) ou não (à direita).</h1>
        <p>Obs.: para não perder sua pontuação, utilize apenas os botões do jogo.</p>
        <button className="default-btn" onClick={handleShowIntro}>Começar</button>
      </div>
    </div>
  )
}
