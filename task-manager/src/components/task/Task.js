import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './style.css';

export default class Task extends React.Component {
    render() {
        const {text, status, className} = this.props;
        return (
            <article className={`article${className ? ` ${className}` : ''}`}>
                <Button className={status === 'inbox' ? "ratio" : "check"}/>
                <p className="article__description">{text}</p>
                {status === 'inbox' ? <Button className="edit"/> : ''}
                <Button className="delete"/>
            </article>
        );
    };
};

Task.propTypes = {
    text: PropTypes.string,
    status: PropTypes.string,
    className: PropTypes.string
};

Task.defaultProps = {
    text: '',
    status: 'inbox',
    className: ''
};
