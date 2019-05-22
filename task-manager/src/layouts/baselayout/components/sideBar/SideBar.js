import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
          <NavLink className='side-bar__link' activeClassName={'side-bar__link_active'} exact to={'/'}>{I18n.t('layout.base.sidebar.todo')}</NavLink>
          <NavLink className={'side-bar__link'} activeClassName={'side-bar__link_active'} to={'/done'}>{I18n.t('layout.base.sidebar.done')}</NavLink>
      </aside>
    );
  }
}

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};
