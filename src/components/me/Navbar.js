import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//assets ---------------------------------------------------
import './../../css/components/me/navbar.css';
import Icon from './../../img/icon-navbar.png';

import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class Navbar extends Component {
    

    constructor (props){
        super(props);
    }

    destroySession = ()=>{
        cookies.remove('Auth');
        cookies.remove('tokenUser');
        cookies.remove('userData');
        this.props.history.push('/');
    }

    componentDidMount = ()=>{
    }
    render() {
        return (
            <div className="header fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <Link to="/" className="m-2 ml-3 my-3">
                        <img src={Icon} className="img" alt="Logo navbar"/>
                    </Link>
                    <button 
                        className="navbar-toggler mr-2 color-primary" 
                        type="button"
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent1" 
                        aria-controls="navbarSupportedContent1" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    > 
                        <span className="navbar-toggler-icon"></span> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul className="navbar-nav ml-auto mr-2">
                            <li className="nav-item active"> 
                                <Link className="nav-link" to="/me/cursos">Mis cursos</Link> 
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link" to="/tutores">Mis tutores</Link> 
                            </li>
                            <li className="nav-item dropdown"> 
                                <Link
                                    className="nav-link dropdown-toggle" 
                                    to="/" 
                                    id="navbarDropdown1" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"> 
                                    Mis cursos 
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown1"> 
                                    <Link className="dropdown-item" to="/mecatronica">Mecatronica</Link> 
                                    <Link className="dropdown-item" to="/diseño">Diseño</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/matematicas">matematicas</Link>
                                    <Link className="dropdown-item" to="/fisica">fisica</Link>
                                </div>
                            </li>
                            <li className="nav-item"> 
                                <a href="#" onClick={this.destroySession} className="nav-link mr-3 text-danger">Salir</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
