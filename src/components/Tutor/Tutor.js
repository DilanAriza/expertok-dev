import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/tutor.banner.css';
import './assets/css/tutor.index.css';
import shoping from './assets/img/compras.svg';
import { Link } from 'react-router-dom';

import Cookies from 'universal-cookie'
import NavbarTutor from '../NavbarTutor/NavbarTutor';
const cookies = new Cookies();

const userData = cookies.getAll();

export default class Tutor extends Component {
    constructor (props){
        super(props);
        this.state={
            url_backend: this.props.url_backend,
            props_father: this.props,
            tutorData: userData.userData
        }
    }

    componentDidMount = () => {

        console.log(this.state.tutorData);

        if(userData){
            if(userData.Auth === 'true'){
            }else{
                this.props.history.push('/');
            }
        }
    }
    render() {
        return (
            <div>
                <NavbarTutor {...this.state.props_father}/>
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
                        <h2 className="title-intro mt-3">Opcciones</h2>
                        <div className="row medl-pather">
                            <div className="col-12 col-sm-6 m-0 p-2 medle-children">
                                <Link to="/upload/video" className="card">
                                    <div className="card-body text-center">
                                        Subir video
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-sm-6 m-0 p-2 medle-children">
                                <Link to="/upload/curso" className="card">
                                    <div className="card-body text-center">
                                        Crear curso
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="header-compras d-flex">
                            <h1 className="ml-3">Mis cursos y videos</h1>
                        </div>
                        <div className="col-12">
                            <p>
                                Aun no has subido cursos o videos
                            </p>
                            <Link to="/upload/curso" className="btn btn-success m-2">Subir curso</Link>
                            <Link to="/upload/video" className="btn btn-success m-2">Subir Video</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
