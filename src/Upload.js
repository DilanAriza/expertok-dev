import React,{ Component } from 'react';
import * as firebase from 'firebase';

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBu2o7LFHh-_cI7YEyuW5cKN5v4ME9_Me4",
    authDomain: "expertok-7da90.firebaseapp.com",
    databaseURL: "https://expertok-7da90.firebaseio.com",
    projectId: "expertok-7da90",
    storageBucket: "expertok-7da90.appspot.com",
    messagingSenderId: "552689340941",
    appId: "1:552689340941:web:078561a164fbedd495bb44",
    measurementId: "G-LCL7Q4S2QD"
};

firebase.initializeApp(firebaseConfig);

class Upload extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            porcentaje: null,
            link_video: null
        }
    }

    state = {
        image: null,
        porcentaje: null,
        link_video: null
    }

    handleFileChange = e => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref(`/videos/${file.name}`)
        const task = storageRef.put(file);

        task.on('state_changed', (snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(percentage + "%");
        }, (error)=>{
            console.log(error.message);
            alert(error.message);
        }, () =>{
            task.snapshot.ref.getDownloadURL().then(
                (downloadURL)=>{
                    console.log("URL : ", downloadURL);
                }
            );
            console.log('archivo subido')
        })
    }

    handleSubmit = async e => {
        e.preventDefault();

    }

    render() {
        return (
            <div className="pt-5">
                <form className="pt-5" onSubmit={this.handleSubmit}>
                <input 
                name="image" 
                type="file"
                onChange={this.handleFileChange}>
                </input>
                <input type="submit"></input>
                </form>  
            </div>
        );
    };
}

export default Upload;