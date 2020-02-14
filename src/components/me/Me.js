import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './../../css/components/me/me.banner.css';
import  './../../css/components/me/me.index.css';
import shoping from './../../img/compras.svg';

import $ from 'jquery';
import { Link } from 'react-router-dom';

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class Me extends Component {
    constructor (props){
        super(props);
        this.state={
            url_backend: this.props.url_backend
        }
    }

    componentDidMount = () => {
        const userData = cookies.getAll();
        if(userData){
            if(userData.Auth == 'true'){
                console.log(userData);
            }else{
                this.props.history.push('/');
            }
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid m-0 p-0">
                    <div className="me-banner">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-10 banner-text m-0 p-3">
                                    {/* <h2 className="text-center"></h2> */}
                                    <h2 className="text-primary text-center">
                                        Tu subscripccion es Gratuita
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="intro-me">
                        <p>
                            Aprende facil y son complicaciones, con los mejores profesores a tu alcance
                        </p>
                        <h2 className="title-intro">Categorias</h2>
                        <div className="row medl-pather">
                            <div className="col-12 col-sm-4 m-0 p-2 medle-children">
                                <Link to="/categorias/bachillerato" className="card">
                                    <div className="card-body text-center">
                                        Bachillerato
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-sm-4 m-0 p-2 medle-children">
                                <Link to="/categorias/jornada-fortalecida" className="card">
                                    <div className="card-body text-center">
                                        Jornada Fortalecida
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-sm-4 m-0 p-2 medle-children">
                                <Link to="/categorias/profesional" className="card">
                                    <div className="card-body text-center">
                                        Personal/profesional
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5 ">
                        <div className="header-compras d-flex">
                            <i><img src={shoping} alt=""/></i>
                            <h1>Tus compras</h1>
                        </div>
                        <div className="col-12">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aliquid hic laboriosam delectus, enim, veniam, quibusdam unde tenetur deleniti labore sit commodi recusandae et? Modi deleniti numquam illum officia voluptatum!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
