import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import Button from '@material-ui/core/Button';
import Lock from '@material-ui/icons/Lock'
import Email from '@material-ui/icons/Email'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/');
            }
        });
    }

    render() {
        const error = this.state.error;
        return (
            <div className="body-wrapper">
                <section id="login-section">
                    <div className="login-container">
                        <div className="login-show text-white text-center login">
                            <div className="overlay"></div>
                            <div className="show-body">
                                <h1>Declaration of Loss Online</h1>
                                <p className="lead">Thank you for using your login credentials.
                                  If you are not yet a member, please
                                </p>
                                <button className="btn btn-outline-light btn-reg login">
                                    <Link to="/signup">Register Here</Link>
                                </button>
                            </div>
                        </div>

                        <div className="login-form">
                            <div className="login-header">
                                <div className="logo">
                                    <img src="images/logo.svg" alt="" />
                                </div>
                                <div className="lan-select">
                                    en
                                </div>

                            </div>
                            <div className="login-body login">
                                {error.length > 0 ?
                                    <div className="alert alert-danger fade in">{error}</div>
                                    : ''}

                                <form id="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group with-icon mb-4">
                                        <input id="login-email" type="text" name="email" className="form-control" />
                                        <label >Email</label>
                                        <Email />
                                    </div>
                                    <div className="form-group with-icon mb-4">
                                        <input id="login-password" type="password" name="password" className="form-control" />
                                        <label >Password</label>
                                        <Lock />
                                    </div>
                                    <div className="bottom">
                                        <a href="/" className="dslink">Forget Password?</a>
                                        <Button variant="contained" color="primary">
                                            Login
                                        </Button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}