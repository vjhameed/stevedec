import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import Button from '@material-ui/core/Button';

export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = document.getElementById("signup-name").value;
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;
        this.setState({ error: "test" });
        Accounts.createUser({ email: email, username: name, password: password }, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/login');
            }
        });
    }

    render() {
        const error = this.state.error;
        return (
            <div className="body-wrapper">
                <section id="login-section">
                    <div className="login-container">

                        <div className="login-show text-white text-center register">
                            <div className="overlay"></div>
                            <div className="show-body">
                                <h1>Declaration of Loss Online</h1>
                                <p className="lead">
                                    Please use this form to register.If you are a member, please
                                </p>
                                <button className="btn btn-outline-light btn-reg register">
                                    <Link to="/login">Login Here</Link>
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

                            <div className="login-body register">
                                {error.length > 0 ?
                                    <div className="alert alert-danger fade in">{error}</div>
                                    : ''}

                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group with-icon mb-4">
                                        <input id="signup-name" type="text" name="name" className="form-control" />
                                        <label for="">Full Name</label>
                                        <i className="material-icons">
                                            person
                                        </i>
                                    </div>
                                    <div className="form-group with-icon mb-4">
                                        <input id="signup-email" type="text" name="email" className="form-control" />
                                        <label for="">Email</label>
                                        <i className="material-icons">
                                            email
                                        </i>
                                    </div>
                                    <div className="form-group with-icon mb-4">
                                        <input type="password" id="signup-password" name="password" className="form-control" />
                                        <label for="">Password</label>
                                        <i className="material-icons">
                                            lock
                                        </i>
                                    </div>
                                    <div className="text-right">
                                        <Button variant="contained" color="primary" size='large' type='submit'>
                                            Register
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