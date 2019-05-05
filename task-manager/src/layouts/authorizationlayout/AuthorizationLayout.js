import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class AuthorizationLayout extends React.Component {
    render() {
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    };
};

AuthorizationLayout.propTypes = {
    children: PropTypes.node.isRequired
};