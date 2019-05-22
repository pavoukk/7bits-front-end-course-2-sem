import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class AuthorizationLayout extends React.Component {
    render() {
        return(
            <div className="authorization-layout">
                <header className="authorization-layout__header"/>
                {this.props.children}
            </div>
        );
    }
}

AuthorizationLayout.propTypes = {
    children: PropTypes.node.isRequired
};