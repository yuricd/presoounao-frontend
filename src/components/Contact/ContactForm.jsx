import React from 'react';
import './ContactForm.scss';

export default class ContactForm extends React.Component {

  handleStatus = () => {
    this.setState({ showForm: true });
  }
  
  render() {
    const { name, id } = this.props;
    
    return (
      <div className="contact-form">
        <form target="_blank" action="https://formspree.io/brasilnuoficial@gmail.com" method="POST">
          <input type="hidden" name="politician" value={name} />
          <input type="hidden" name="id" value={id} />
          <textarea name="feedback" placeholder="Escreva aqui o erro." />
          <button className="send"><i className="fas fa-paper-plane" /></button>
        </form>
      </div>
    )
  }
}