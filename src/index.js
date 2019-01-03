import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import 'tachyons';
import { BrowserRouter, Switch , Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
        <Route exact path="/app" component={App}/>
    </Switch>
    </BrowserRouter>

    , document.getElementById('root'));


