import React,{ Component } from 'react';
import * as firebase from 'firebase';

import "firebase/auth";
import "firebase/firestore";

import Cookies from 'universal-cookie'
import NavbarTutor from '../NavbarTutor/NavbarTutor';
import './assets/css/selectFile.css'
// import { Link } from 'react-router-dom';
const cookies = new Cookies();

const userData = cookies.getAll();
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

class UploadVideo extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            porcentaje: null,
            link_video: null,
            tutorData: userData.userData,
            filename: 'Seleccionar Video',
            porcentaje: null
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
        this.setState({
            file: file,
            filename: file.name,
            storageRef: storageRef
        });
    }



    handleSubmit = async e => {
        e.preventDefault();
        var loader = document.getElementById('loader');
        loader.classList.remove('d-none');
        const storageRef = this.state.storageRef;
        const file = this.state.file;
        const task = storageRef.put(file);

        task.on('state_changed', (snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            let porcentaje = Math.trunc(percentage);
            console.log(porcentaje + "%");
            this.setState({
                porcentaje: porcentaje
            });

            if(porcentaje === 100){
                loader.classList.add('d-none');
                var success = document.getElementById('upload-success');
                success.classList.remove('d-none');
            }
        }, (error)=>{
            console.log(error.message);
            alert(error.message);
        }, () =>{
            task.snapshot.ref.getDownloadURL().then(
                (downloadURL)=>{
                    console.log("URL : ", downloadURL);
                    this.setState({
                        link_video: downloadURL
                    });
                }
            );
            console.log('archivo subido');
        })
    }

    render() {
        return (
            <div>
                <NavbarTutor {...this.props}/>
                <div className="container-fluid m-0 p-0">
                    <div className="tutor-banner">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-10 banner-text m-0 p-3">
                                    <h2 className="text-primary text-center">
                                        Distribuye tu sabiduria
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="intro-me mt-5">
                        <ul className="list-group">
                            <li className="list-group-item active">Datos del tutor</li>
                            <li className="list-group-item">{this.state.tutorData.email}</li>
                            <li className="list-group-item">{this.state.tutorData.username}</li>
                        </ul>
                        <h2 className="title-intro mt-3">Subir video</h2>
                        <div className="row">
                            <div className="col-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button type="submit" className="input-group-text btn btn-success" id="inputGroupFileAddon01" onClick={this.handleSubmit}>Subir Video</button>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" onChange={this.handleFileChange}/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">{this.state.filename}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="loader" className="row mt-3 d-none my-5">
                            <div className="col-12 row">
                                <div className="text-primary col-6">
                                    Subiendo: {this.state.porcentaje}%
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div id="upload-success" className="row mt-3 my-5 d-none">
                            <h5 className="text-primary">
                                Archivo subido satisfactoriamente <br/>
                                Este es el link de tu video: <br/><br/>
                                <a target="_blank" href={this.state.link_video}>
                                    {this.state.link_video}
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}

export default UploadVideo;