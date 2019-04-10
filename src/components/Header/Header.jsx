import React from 'react';
import './Header.scss';
import logo from '../../assets/logo-3.png'; 

export default class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="contribute">
          <a href="https://github.com">
            <i className="fab fa-github" />
          </a>
        </div>
      </header>
    )
  }
}