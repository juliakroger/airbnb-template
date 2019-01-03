import React, {Component} from 'react';
import './App.css';


class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            signUpName: '',
            signUpUsername: '',
            signUpPassword: ''
        }
    }

    onNameChange = (event) => {
        this.setState({signUpName: event.target.value})
    }

    onUsernameChange = (event) => {
        this.setState({signUpUsername: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signUpPassword: event.target.value})
    }

    onSUbmitSignUp = () => {
        if(this.state.signUpPassword !== "" && this.state.signUpUsername !== "" && this.state.signUpUsername !== ""){
        fetch('http://localhost:3000/signUp',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.signUpName,
                username: this.state.signUpUsername,
                password: this.state.signUpPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) window.location.href = "http://localhost:3001"
                })
        }
        else {
            alert('complete the form')
        }
    }
    render(){
        return(
            <div className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bg-light-blue">
                <h1 className="tc coolFont">Sign up</h1>
                <div className="mt3">
                    <label htmlFor="username" className="db f6 ph2 mb2">Name</label>
                    <input onChange={this.onNameChange} type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-lightest-blue hover-gray outline-0 bn br-pill"/>
                </div>
                <div className="mt3">
                    <label htmlFor="username" className="db f6 ph2 mb2">Username</label>
                    <input onChange={this.onUsernameChange} type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-lightest-blue hover-gray outline-0 bn br-pill"/>
                </div>
                <div className="mv3">
                    <label htmlFor="password" className="db f6 ph2 mb2" >Password</label>
                    <input onChange={this.onPasswordChange} type="password" name="password"
                           className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-lightest-blue hover-gray outline-0 bn br-pill"/>
                </div>

                <p onClick={this.onSUbmitSignUp} className="tc input-reset db w-100 f6 b ttu tracked pv3 ph3 pointer bg-light-blue hover-bg-lightest-blue bn br-pill">Sign up</p>

            </div>
        );
    }
}

export default SignUp;