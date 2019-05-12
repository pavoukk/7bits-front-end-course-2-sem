import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class FormField extends React.Component {
    render() {
        const {value, className, type, name, placeholder, onChange, autoFocus} = this.props;
        return (
            <input className={`form-field ${className}`}
                   value={value}
                   type={type}
                   name={name}
                   placeholder={placeholder}
                   autoFocus={autoFocus}
                   onChange={onChange}
            />
        );
    };
};


FormField.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func

};

FormField.defaultProps = {
    className: '',
    value: '',
    type: 'text',
    name: '',
    placeholder: '',
    onChange: () => {
    }
};
