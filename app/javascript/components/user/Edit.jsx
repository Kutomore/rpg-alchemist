import React from "react";
import { Link } from "react-router-dom";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;

        if (email.length === 0 || password.length === 0)
            return;

        this.submitDeviseForm({ user: {email, password} }, "/users", "PUT")
    }
}

export default Edit
