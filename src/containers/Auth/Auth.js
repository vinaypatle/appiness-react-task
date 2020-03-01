import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Auth.css';

class Auth extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.username === this.props.user.username && this.state.password === this.props.user.password) {
            this.props.loginSuccess();
            this.props.history.push('/');
        } else {
            this.setState({
                error: 'Please enter valid username/password.'
            });
            this.props.loginFailed();
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className="Auth">
                <h1>Login to continue...</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="AuthControls">
                        <label>Enter Username</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required />
                    </div>
                    <div className="AuthControls">
                        <label>Enter Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required />
                    </div>
                    <div className="AuthControls">
                        <button type="submit">LOGIN</button>
                    </div>
                    {this.state.error && (
                        <p style={{ color: 'red' }}>{this.state.error}</p>
                    )}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.validUser,
    isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
    loginSuccess: () => dispatch({ type: 'LOGIN_SUCCESS' }),
    loginFailed: () => dispatch({ type: 'LOGIN_FAILED' })
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));