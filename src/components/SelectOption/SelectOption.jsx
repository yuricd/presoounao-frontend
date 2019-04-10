import React from 'react';
import handcuff from '../../assets/handcuff-icon.png';
import liberty from '../../assets/liberty-icon.png';
import './SelectOption.scss';

export default class SelectOption extends React.Component {
  render() {
    const { isArrested, loading } = this.props;

    return (
      <div className={`options ${(loading) ? 'disabled' : ''}`}>
        <button className="option handcuff" disabled={loading} onClick={() => isArrested(true)} >
          <img src={handcuff} alt="Preso" className="fadeIn" />
        </button>

        <button className="option free" disabled={loading} onClick={() => isArrested(false)}>
          <img src={liberty} alt="Preso" />
        </button>
      </div>
    )
  }
}