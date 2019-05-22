import React from 'react';
import { I18n } from 'react-redux-i18n';


import './style.css';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import FormField from "../../components/formField/FormField";
import Button from "../../components/button/Button";
import signUp from "../../actions/user/signUp";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueLogin: '',
            valuePassword: '',
            valueCheckbox: false
        }
    }

    componentDidMount() {
        if (this.props.authorized) {
            this.props.history.replace("/");
        }
    }

    componentDidUpdate() {
        if (this.props.authorized) {
            this.props.history.replace("/");
        }
    }

    onChangeLogin = (event) => {
        this.setState({
                valueLogin: event.target.value,
            }
        )
    };

    onChangePassword = (event) => {
        this.setState({
                valuePassword: event.target.value,
            }
        )
    };

    onSubmit = (event) => {
        event.preventDefault();
        const username = event.target["sign up"].value;
        const password = event.target["password"].value;

        this.props.signUp(username, password);
    };

    onClick = (event) => {
        event.preventDefault();
        this.setState({
            valueCheckbox: !this.state.valueCheckbox
        })
    };

    formStatus = () => {
        return !this.props.valid ?
            "sign-in-form_invalid" :
            ''
    };

    render() {
        return (
            <div className="sign-up-page">

                <form
                    className={"sign-up-form"}
                >
                    <FormField
                        className={`sign-up-form__field ${this.formStatus()}`}
                        name={"sign up"}
                        placeholder={I18n.t('authorization.email')}
                        type={"text"}
                        value={this.state.valueLogin}
                        onChange={this.onChangeLogin}
                    />
                    <FormField
                        className={`sign-up-form__field ${this.formStatus()}`}
                        name={"password"}
                        type={"password"}
                        placeholder={I18n.t('authorization.password')}
                        value={this.state.valuePassword}
                        onChange={this.onChangePassword}
                    />
                    <div className={"sign-up-form__agreement"}>
                        <Button
                            className={"sign-up-form__button-agreement"}
                            type={"checkbox"}
                            onClick={this.onClick}
                        />
                        <p className={"sign-up-form__text-agreement"}>
                            {I18n.t('authorization.sign-up.agreement')}
                        </p>
                    </div>
                    <Button
                        className={"sign-up-form__button-submit"}
                        type={"submit"}
                        value={I18n.t('authorization.sign-up.title')}
                        disabled={this.state.valueLogin === ''
                        || this.state.valuePassword === '' || !this.state.valueCheckbox}
                        onSubmit={this.onSubmit}
                    />
                </form>
                <p className={"sign-up-form__text"}>{I18n.t('authorization.sign-up.question')}</p>
                <a className={"sign-up-form__link"} href="/signin">
                    <p className={"sign-up-form__link-text"}>Sign in</p>
                </a>
            </div>
        )
    }
}

SignUp.propTypes = {
    authorized: PropTypes.bool.isRequired,
    signUp: PropTypes.func,
    valid: PropTypes.bool,
    history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
    signUp: bindActionCreators(signUp, dispatch)
});

const mapStateToProps = (state) => ({
    authorized: state.authorizeReducer.authorized,
    valid: state.authorizeReducer.valid

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);