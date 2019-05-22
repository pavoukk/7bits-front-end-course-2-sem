import React from 'react';
import './style.css';

import logotype from './images/logo.png';
export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <a className='header__logo' href='/'>
              <img className='header__image' src={logotype} alt="logo"/>
          </a>
        </div>
      </header>
    );
  }
}
