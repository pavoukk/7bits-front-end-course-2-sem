import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './style.css';

export default class Task extends React.Component {
    render() {
        const {id, text, status, className} = this.props;
        return (
            <article className={`article${className ? ` ${className}` : ''}`}>
                <Button className={status === 'inbox' ? "ratio" : "check"}/>
                <p className="article__description">{text}</p>
                {status === 'inbox' ? <Button func={() => consoleLog(id)} className="edit"/> : ''}
                <Button  className="delete"/>
            </article>
        );
    };
};

function consoleLog(id) {
    console.log(id);
}

Task.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.string,
    className: PropTypes.string
};
Task.defaultProps = {
    id: '',
    text: '',
    status: 'inbox',
    className: ''
};
