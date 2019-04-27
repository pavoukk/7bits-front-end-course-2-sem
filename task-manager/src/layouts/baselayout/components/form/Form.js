import React from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';


import FormField from '../../../../components/formField/FormField';
import Button from '../../../../components/button/Button';

import './style.css';
import Task from "../../../../components/task/Task";
import getTasksList from "../../../../actions/tasksList/getTasksList";

class Form extends React.Component {

    componentDidMount() {
        this.props.getTasksList();
    };

    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            value: '',
            tasksList: []
        };
    };

    getElements = (itemList) => {
        let res = itemList.data.map((item, index) => {
            return item.text
        });
        return res;
    };

    renderList = () => {

        const items = this.props.tasksList.map((item, index) => {
            return (
                <li key={index} className={'list__item'}>
                    {<Task className="article_todo" key={index} id={item.id} text={item} status={item.status}/>}
                </li>
            );
        });
        return (
            <ul className={"form__list list"}>
                {items}
            </ul>
        );
    };

    onChange = (event) => {
        this.setState({
                value: event.target.value,
                disabled: event.target.value === ''
            }
        )
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            tasksList: [this.state.value,
                ...this.state.itemList
            ]
        });
        this.setState({
            value: '',
            disabled: true
        })
    };


    render() {
        return (
            <React.Fragment>
                <form className={'form'}
                      onSubmit={this.onSubmit}>
                    <FormField
                        className={'form__field'}
                        placeholder={'Type your new task'}
                        onChange={this.onChange}
                        value={this.state.value}
                    />
                    <Button
                        className={'form__button'}
                        type={'submit'}
                        value={'Create'}
                        disabled={this.state.disabled}
                    />
                </form>
                {this.renderList()}
            </React.Fragment>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    getTasksList: bindActionCreators(getTasksList, dispatch)
});

const mapStateToProps = (state) => ({
    tasksList: state.tasksListReducer.tasksList
});

export default connect(mapStateToProps, mapDispatchToProps) (Form);

