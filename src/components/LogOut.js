import React, { Component } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

class LogOut extends Component {

    Logout = () => {
        reactLocalStorage.setObject('user', "");
        window.location.href = '/';
    }

    render(){
        return <p className="link dim dark-gray f6 dib pointer" onClick={this.Logout}>Log Out</p>

    }
}

export default LogOut;