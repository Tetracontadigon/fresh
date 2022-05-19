import React, {Component} from 'react';
import { EditPostForm2, LNavBar, EditPostForm } from './ui-components';
//import logo from './logo.svg';
import './App.css';
//import Amplify from 'aws-amplify';
import {AmplifyProvider} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react";
import "./aws-exports";
import { DataStore } from "@aws-amplify/datastore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post } from './models';

class EditForm extends Component {
    render(){
        return(<EditFormF/>);
    }
}

function EditFormF() {
    const { cid } = useParams();
    const [cr, setMe] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const found = await DataStore.query(Post, c => c.id("eq", cid));
            console.log("This s/b an array object:  ");
            console.log(found);
        setMe(found[0]);
            console.log("Look! the name field: " + found[0].title);
        }
        pullData()
      }, []) 
    return (
      <AmplifyProvider>
        <div className="App">
            <LNavBar />
            <h1>Edit Data</h1>
            <EditPostForm2 post={cr}/>
        </div>
      </AmplifyProvider>
    );
}

export default EditForm;