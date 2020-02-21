import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/me.banner.css';
import './assets/css/me.index.css';
import shoping from './assets/img/compras.svg';

import NavbarUser from './../NavbarUser/'
import { Link } from 'react-router-dom';

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class UserHome extends Component {
    constructor (props){
        super(props);
        this.state={
            url_backend: this.props.url_backend,
            props_father: this.props
        }
    }
    
    componentDidMount = () => {
        const userData = cookies.getAll();
        if(userData){
            if(userData.Auth === 'true'){
                console.log(userData);
            }else{
                this.props.history.push('/');
            }
        }
    }

    render() {
        return (
            <div>
                <NavbarUser {...this.state.props_father}/>
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
                                <Link to="/me/categorias/bachillerato" className="card">
                                    <div className="card-body text-center">
                                        Bachillerato
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-sm-4 m-0 p-2 medle-children">
                                <Link to="/me/categorias/jornada-fortalecida" className="card">
                                    <div className="card-body text-center">
                                        Jornada Fortalecida
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-sm-4 m-0 p-2 medle-children">
                                <Link to="/me/categorias/profesional" className="card">
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
                        <div className="col-12">
                            {/* <video src="https://firebasestorage.googleapis.com/v0/b/expertok-7da90.appspot.com/o/videos%2F2020-01-09_01-44-05.mp4?alt=media&token=184e6978-b0bf-48dc-a142-d23a4ca06f9c" controls width="1050px" height="600px"></video> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
