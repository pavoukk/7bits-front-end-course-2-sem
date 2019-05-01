import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCompletedTasksList from "../../actions/tasksList/getCompletedTasksList";

import Task from '../../components/task/Task';

import list from './list';



import './style.css';
import PropTypes from "prop-types";

class Done extends React.Component {
    componentDidMount() {
        this.props.getCompletedTasksList();
    }


    renderList = () => {
        const items = this.props.tasksList.map((item, index) => {
            return (
                <li key={index} className={'list__item'}>
                    {<Task className="article_todo" key={index} id={item.id} text={item.text} status={item.status}/>}
                </li>
            );
        });
        return (
            <ul className={"form__list list"}>
                {items}
            </ul>
        );
    };

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    getCompletedTasksList: bindActionCreators(getCompletedTasksList, dispatch)
});

const mapStateToProps = (state) => ({
    tasksList: state.completedTasksListReducer.tasksList
});
Done.propTypes = {
    tasksList: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Done);
