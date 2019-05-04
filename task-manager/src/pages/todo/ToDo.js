import React from 'react';
import {connect} from 'react-redux';
import getCurrentTasksList from "../../actions/tasksList/getCurrentTasksList";

import {bindActionCreators} from 'redux';

import Task from '../../components/task/Task';

import './style.css';
import Form from "../../layouts/baselayout/components/form/Form";
import PropTypes from "prop-types";

class ToDo extends React.Component {

    componentDidMount() {
        this.props.getCurrentTasksList("inbox");
    };

    renderList = () => {
        const items = this.props.tasks.map((item, index) => {
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
        if (this.props.tasks.length === 0) {
            return (
                <div className={"empty-todo todo"}>
                    <Form className={'article_form'} update={() => this.props.getCurrentTasksList()}/>
                    <article class="empty-todo__article">
                        <p className={"empty-todo__text"}>
                            You do not have any tasks in «To Do».
                        </p>
                        <p className={"empty-todo__text"}>
                            But you can create them right here!
                        </p>
                    </article>
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <Form className={'article_form'}/>
                    {this.renderList()}
                </React.Fragment>
            )
        }
    };
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentTasksList: bindActionCreators(getCurrentTasksList, dispatch),
});

const mapStateToProps = (state) => ({
    tasks: state.currentTasksListReducer.tasks
});
ToDo.propTypes = {
    tasks: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
