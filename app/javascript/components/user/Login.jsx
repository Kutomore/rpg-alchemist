import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        if (email.length === 0 || password.length === 0)
            return;

        let test =  this.props.submitDeviseForm({ user: {email, password} }, "/users/sign_in", "POST")
        console.log(test)
        this.setState({ error: test})
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input id='userEmail' name='email' placeholder='email' onChange={this.onChange}/>
                    <input id='userPassword' name='password' placeholder='password' onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <button onClick={()=>this.props.changePage('signup')}>Sign Up!</button>
            </div>
        )
    }
}

export default Login;
