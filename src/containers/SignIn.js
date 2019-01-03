import React, { Component } from 'react';
import './App.css';
import {reactLocalStorage} from 'reactjs-localstorage';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            signInUsername: '',
            signInPassword: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({signInUsername: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {
        if (this.state.signInUsername !== "" && this.state.signInPassword !== ""){
        fetch('http://localhost:3000/signIn',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.signInUsername,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    reactLocalStorage.setObject('user', {'user': user.id});
                    this.props.history.push('/app');
                }
            })
        }
        else {
            alert('fill the credentials')
        }
    }

    render(){
        return(
            <div className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bg-light-blue">
                        <h1 className="tc coolFont">Sign in</h1>
                        <div className="mt3">
                            <label htmlFor="username" className="db f6 ph2 mb2">Username</label>
                            <input onChange={this.onUsernameChange} type="text" id="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-lightest-blue hover-gray outline-0 bn br-pill"/>
                        </div>
                        <div className="mv3">
                            <label htmlFor="password" className="db f6 ph2 mb2" >Password</label>
                            <input onChange={this.onPasswordChange} type="password" id="password"
                                   className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-lightest-blue hover-gray outline-0 bn br-pill"/>
                        </div>

                    <p onClick={this.onSubmitSignIn} className="tc input-reset db w-100 f6 b ttu tracked pv3 ph3 pointer bg-light-blue hover-bg-lightest-blue bn br-pill">Sign In</p>
                        <div className="lh-copy mt3">
                            <p className="f6 black db tcy">Don't have an account yet?<a href="signUp" className="link"> Sign up</a></p>

                        </div>

            </div>
        );
    }
}

export default SignIn;