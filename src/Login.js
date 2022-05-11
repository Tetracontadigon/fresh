import React, {Component} from 'react';
import { LNavBar, FormForPartU } from './ui-components';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';

class Login extends Component {
    render(){
        return(<LoginF/>);
    }
}

function LoginF({ signOut }){
    return (
        <AmplifyProvider>
            <header className="SpaceAppV2.0">
            <LNavBar />
            <img src={logo} className="App-logo" alt="logo" />

            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <button onClick={signOut}>Logout</button>
            </header>
          </AmplifyProvider>
        );
} 

export default Login;