import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
//copied imports
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import awsconfig from './aws-exports';
import {HomeCollection, PostLucanCollection, LNavBar, EditProfile, FormForPartU} from './ui-components';
import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import List from './List';
import Login from './Login';
import {AmplifyProvider} from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyProvider>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/form' element={<Form/>}/>
          <Route exact path='/list' element={<List/>}/>
        </Routes>

        
      </div>
    </AmplifyProvider>
  );
}

export default withAuthenticator(App);


{/* DEPRECIATED CODE */}
        {/* <header className="SpaceAppV2.0">
          <LNavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <FormForPartU />

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
        </header> */}