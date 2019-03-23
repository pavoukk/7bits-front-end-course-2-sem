import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
    render() {
        const {className} = this.props;
        return (
            <button className={`button article__${className} ${className}`}/>
        );
    };
};

Button.propTypes = {
    className: PropTypes.string
};

Button.defaultProps = {
    className: ''
};
