import React from 'react';
import { I18n } from 'react-redux-i18n';

import './style.css';
import FormField from "../../components/formField/FormField";
import Button from "../../components/button/Button";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import signIn from '../../actions/user/signIn';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueLogin: '',
            valuePassword: '',
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
        );
    };

    onChangePassword = (event) => {
        this.setState({
                valuePassword: event.target.value,
            }
        );
    };

    onSubmit = (event) => {
        event.preventDefault();

        const username = event.target["sign in"].value;
        const password = event.target["password"].value;

        this.props.signIn(username, password);
    };

    formStatus = () => {
        return !this.props.valid ?
            "sign-in-form_invalid" :
            ''
    };

    render() {
        return (
            <div className="sign-in-page">
                <form
                    className={"sign-in-form"}
                    onSubmit={this.onSubmit}
                >
                    <FormField
                        className={`sign-in-form__field ${this.formStatus()}`}
                        name={"sign in"}
                        type={"text"}
                        placeholder={I18n.t('authorization.email')}
                        autoFocus={true}
                        value={this.state.valueLogin}
                        onChange={this.onChangeLogin}
                    />
                    <FormField
                        className={`sign-in-form__field ${this.formStatus()}`}
                        name={"password"}
                        type={"password"}
                        placeholder={I18n.t('authorization.password')}
                        value={this.state.valuePassword}
                        onChange={this.onChangePassword}
                    />
                    <Button
                        className={"sign-in-form__button"}
                        type={"submit"}
                        value={I18n.t('authorization.sign-in.title')}
                        disabled={this.state.valueLogin === ''
                        || this.state.valuePassword === ''}
                    />
                </form>
                <p className={"sign-in-form__text"}>{I18n.t('authorization.sign-in.question')}</p>
                <a className={"sign-in-form__link"} href="/signup">
                    <p className={"sign-in-form__link-text"}>Sign up</p>
                </a>
            </div>
        )
    }
}

SignIn.propTypes = {
    authorized: PropTypes.bool.isRequired,
    valid: PropTypes.bool,
    signIn: PropTypes.func,
    history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
    signIn: bindActionCreators(signIn, dispatch)
});

const mapStateToProps = (state) => ({
    authorized: state.authorizeReducer.authorized,
    valid: state.authorizeReducer.valid
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);