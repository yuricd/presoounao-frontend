import React from 'react';
import './PoliticianInfo.scss';
import ContactForm from '../Contact/ContactForm';

export default class PoliticianInfo extends React.Component {

  state = {
    showForm: false
  }

  handleStatus = () => {
    this.setState({ showForm: true });
  }
  
  render() {
    const { id, name, position, picture, arrestment, details, references, handleNext } = this.props;
    const { showForm } = this.state;

    return (
      <div className="politician-info">
        <div className="info">
          <div className="info-wrapper">
            <div className="picture">
              <img src={`${process.env.REACT_APP_API_URL}/static/pictures/${picture}`} alt={name} />
            </div>

            <div className="description">
              <h2>{ name }</h2>
              <h4>{ position }</h4>
              {(arrestment.isArrested) 
              ? <span className="arrested">Preso em {arrestment.date}</span>
              : <span className="arrested">Livre</span>}
              <div className="bottom">
                <button onClick={this.handleStatus}>Não está mais {(arrestment.isArrested) ? 'preso' : 'livre'}?</button>
                {(showForm) && <ContactForm name={name} id={id} />}
              </div>
            </div>
          </div>
        </div>

        <div className="details">
          { details }

          <div className="references">
            <h4>Referências:</h4>
            <ol>
              {references.map((ref, idx) => {
                return (
                  <li key={idx}>
                    <a href={ref} target="_blank" rel="noopener noreferrer">{ref}</a>
                  </li>
                )}
              )}
            </ol>
          </div>
        </div>

        <button className="default-btn" onClick={handleNext}>Voltar ao jogo</button>
      </div>
    )
  }
}