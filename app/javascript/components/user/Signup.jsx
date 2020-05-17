import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, password, passwordConfirmation } = this.state;

        if (email.length === 0 || password.length === 0 || passwordConfirmation.length === 0)
            return;
        this.submitDeviseForm(
            { user: {email, password, password_confirmation: passwordConfirmation} },
            "/users",
            "POST"
        )
    }

    render() {
        return (
            <div>
                <h2>Sign up</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <label htmlFor="userEmail">Email</label><br/>
                        <input autoFocus="autofocus" autoComplete="email" type="email" required name="email"
                               id="userEmail" onChange={this.onChange}/>
                    </div>

                    <div className="field">
                        <label htmlFor="userPassword">Password</label>
                        <em>(6 characters minimum)</em>
                        <br/>
                            <input autoComplete="new-password" type="password" required name="password"
                                   id="userPassword" onChange={this.onChange}/>
                    </div>

                    <div className="field">
                        <label htmlFor="user_password_confirmation">Password confirmation</label><br/>
                        <input autoComplete="new-password" type="password" name="passwordConfirmation"
                               id="userPasswordConfirmation" onChange={this.onChange}/>
                    </div>

                    <div className="actions">
                        <input type="submit" name="commit" value="Sign up" data-disable-with="Sign up"/>
                    </div>
                </form>
                <button onClick={()=>this.props.changePage('login')}>Log in!</button>
            </div>
        )
    }
}

export default Signup;
