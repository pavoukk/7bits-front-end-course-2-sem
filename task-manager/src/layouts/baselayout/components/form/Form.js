import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';

import addNewTask from "../../../../actions/tasksList/addNewTask";

import FormField from '../../../../components/formField/FormField';
import Button from '../../../../components/button/Button';
import './style.css';
import getCurrentTasksList from "../../../../actions/tasksList/getCurrentTasksList";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    onChange = (event) => {
        this.setState({
                value: event.target.value,
                disabled: event.target.value === ''
            }
        )
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addNewTask({
            text: this.state.value
        })
            .then(
                () => this.props.getCurrentTasksList()
            );
        this.setState({
            value: '',
        })
    };

    render() {
        return (
            <React.Fragment>
                <form className={'form'}
                      onSubmit={this.onSubmit}>
                    <FormField
                        className={'form__field'}
                        placeholder={I18n.t('layout.page.todo.create-button.placeholder')}
                        onChange={this.onChange}
                        value={this.state.value}
                    />
                    <Button
                        className={'form__button'}
                        type={'submit'}
                        value={I18n.t('layout.page.todo.create-button.title')}
                        disabled={this.state.value === ''}
                    />
                </form>
            </React.Fragment>
        );
    }
}

Form.propTypes = {
    addNewTask: PropTypes.func,
    getCurrentTasksList: PropTypes.func

}

const mapDispatchToProps = (dispatch) => ({
    addNewTask: bindActionCreators(addNewTask, dispatch),
    getCurrentTasksList: bindActionCreators(getCurrentTasksList, dispatch)
});

const mapStateToProps = (state) => ({
    tasks: state.currentTasksListReducer.tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

