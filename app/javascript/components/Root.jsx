import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home"
import Session from "./user/Session"

class Root extends React.Component {
    state = {
        currentUser: null
    }

    updateCurrentUser = (newUser) => {
        this.setState(
            {
                currentUser: newUser
            }
        )
    }

    render() {
        if (this.state.currentUser !== null) {
            return <Home/>
        }else {
            return <Session updateCurrentUser={this.updateCurrentUser}/>
        }
    }
}

export default Root
