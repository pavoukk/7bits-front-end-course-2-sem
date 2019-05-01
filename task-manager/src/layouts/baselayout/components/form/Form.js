import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addNewTask from "../../../../actions/tasksList/addNewTask";

import FormField from '../../../../components/formField/FormField';
import Button from '../../../../components/button/Button';
import './style.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            value: '',
        };
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
        addNewTask(this.state.value);
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
            </React.Fragment>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    addNewTask: bindActionCreators(addNewTask, dispatch)
});

const mapStateToProps = (state) =>
    ({
        tasksList: state.addNewTaskReducer.tasksList
    });

export default connect(mapStateToProps, mapDispatchToProps)(Form);

