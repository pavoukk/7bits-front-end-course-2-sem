import React from 'react';
import { connect } from 'react-redux';
import getCurrentTasksList from "../../actions/tasksList/getCurrentTasksList";

import  { bindActionCreators } from 'redux';

import Task from '../../components/task/Task';

import list from './list';

import './style.css';
import Form from "../../layouts/baselayout/components/form/Form";
import PropTypes from "prop-types";

class ToDo extends React.Component {

    componentDidMount() {
        this.props.getCurrentTasksList();
    };

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
                 <Form className={'article_form'}/>
                {this.renderList()}
             </React.Fragment>
         );
     };

};

const mapDispatchToProps = (dispatch) => ({
    getCurrentTasksList: bindActionCreators(getCurrentTasksList, dispatch)
});

const mapStateToProps = (state) => ({
    tasksList: state.currentTasksListReducer.tasksList
});
ToDo.propTypes = {
    tasksList: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps) (ToDo);
