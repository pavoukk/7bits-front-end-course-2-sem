import React from 'react';

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
            disabled: true
        }
    }
    componentDidMount() {

        if(this.props.authorized) {
            this.props.history.replace("/");
        }
    }

    componentDidUpdate() {
        if(this.props.authorized) {
            this.props.history.replace("/");
        }
    }

    onChangeLogin = (event) => {
        this.setState({
                valueLogin: event.target.value,
                disabled: this.state.valueLogin === '' && this.state.valuePassword === ''
            }
        )
    };

    onChangePassword = (event) => {
        this.setState({
                valuePassword: event.target.value,
                disabled: this.state.valueLogin === '' && this.state.valuePassword === ''
            }
        )
    };

    onSubmit = (event) => {
        event.preventDefault();

        const username = event.target["sign in"].value;
        const password = event.target["password"].value;

        this.props.signIn(username, password);
    };

    render() {
        return(
            <form
                className={"sign-in-form"}
                onSubmit={this.onSubmit}
            >
                <FormField
                className={"sign-in-form__field"}
                name={"sign in"}
                placeholder={"E-mail"}
                value={this.state.valueLogin}
                onChange={this.onChangeLogin}
                />
                <FormField
                className={"sign-in-form__field"}
                name={"password"}
                placeholder={"Password"}
                value={this.state.valuePassword}
                onChange={this.onChangePassword}
                />
                <Button
                className={"sign-in-form__button"}
                type={"submit"}
                value={"Sign In"}
                disabled={this.state.disabled}
                />
            </form>
        )
    }
}

SignIn.propTypes = {
    authorized: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    signIn: bindActionCreators(signIn, dispatch)
});

const mapStateToProps = (state) => ({
    authorized: state.authorizeReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);