import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

class Session extends React.Component {
    state = {
        page: 'login'
    }

    changePage = (newPage) => {
        this.setState({
            page: newPage
        })
    }

    submitDeviseForm = (body, url, method)  => {
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: method,
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    this.props.updateCurrentUser(response.email)
                }else {
                    response.json().then(json => {
                        return json['error']
                    });
                }
            })
    }

    render() {
        switch(this.state.page) {
            case 'login':
                return <Login changePage={this.changePage} submitDeviseForm={this.submitDeviseForm} />
            case 'signup':
                return <Signup changePage={this.changePage} submitDeviseForm={this.submitDeviseForm} />
        }
    }
}

export default Session
