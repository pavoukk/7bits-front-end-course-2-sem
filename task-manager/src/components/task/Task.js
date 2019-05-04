import React from 'react';
import {connect} from 'react-redux';
import deleteTask from "../../actions/tasksList/deleteTask";
import patchTask from "../../actions/tasksList/patchTask";


import PropTypes from 'prop-types';
import Button from '../button/Button';
import './style.css';
import {bindActionCreators} from "redux";
import getCurrentTasksList from "../../actions/tasksList/getCurrentTasksList";

class Task extends React.Component {
    render() {
        const {id, text, status, className} = this.props;
        return (
            <article className={`article${className ? ` ${className}` : ''}`}>
                <Button className={status === 'inbox' ? "ratio" : "check"} onClick={() => this.onPatchClick(id)}/>
                <p className="article__description">{text}</p>
                {status === 'inbox' ? <Button className="edit"/> : ''}
                <Button className="delete" onClick={() => this.onDeleteClick(id)}/>
            </article>
        );
    };

    onDeleteClick = (id) => {
        this.props.deleteTask(id)
            .then(
                () => this.props.getCurrentTasksList(this.props.status)
            )
    };
    onPatchClick = (id) => {
        this.props.patchTask({
            status: "done"
        }, id)
            .then(
                () => this.props.getCurrentTasksList(this.props.status)
            )
    }
}

Task.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.string,
    className: PropTypes.string,
};

Task.defaultProps = {
    id: '',
    text: '',
    status: 'inbox',
    className: ''
};
const mapDispatchToProps = (dispatch) => ({
    deleteTask: bindActionCreators(deleteTask, dispatch),
    getCurrentTasksList: bindActionCreators(getCurrentTasksList, dispatch),
    patchTask: bindActionCreators(patchTask, dispatch)
});

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Task);
