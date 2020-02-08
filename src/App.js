import React, {Component} from 'react';
//------------- Styles and js --------------------------------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import './css/index.css';


//------------- React Router ---------------------------------------------
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//------------- Componentes ----------------------------------------------
import Upload from './components/Upload';
import Entrar from './components/Entrar';
import Home from './Home';
import Registrarme from './components/Registrarme';


//------------- IMGs ------------------------------------------------------
import Icon from './img/icon-navbar.png'

export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            url_backend:'http://localhost/dilan/expertok-backend/?server=expertok&apiKey=dilanariza&'
        }
    }

    render() {
        return (
            <Router>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <Link to="/" className="my-2 mt-3 ml-3 mb-0">
                        <img src={Icon} className="navbar-brand" alt="Logo navbar"/>
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
                                <Link className="nav-link" to="/">Inicio</Link> 
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link" to="/tutores">Tutores</Link> 
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
                                    Cursos 
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown1"> 
                                    <Link className="dropdown-item" to="/mecatronica">Mecatronica</Link> 
                                    <Link className="dropdown-item" to="/diseño">Diseño</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/matematicas">matematicas</Link>
                                    <Link className="dropdown-item" to="/fisica">fisica</Link>
                                </div>
                            </li>
                            <li className="nav-item mr-5"> 
                                <Link className="nav-link" to="/entrar">Entrar</Link> 
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route 
                    exact
                    path="/" 
                    component={
                        (props)=>
                        <Home 
                            {...props} 
                            url_backend={this.state.url_backend}
                        />
                    } >
                </Route>
                <Route 
                    exact
                    path="/registrarme" 
                    component={
                        (props)=>
                        <Registrarme 
                            {...props} 
                            url_backend={this.state.url_backend}
                        />
                    } >
                </Route>
                <Route 
                    path="/entrar/:register" 
                    component={
                        (props)=>
                        <Entrar 
                            {...props} 
                            url_backend={this.state.url_backend}
                        />
                    }
                ></Route>
                <Route 
                    path="/entrar" 
                    component={
                        (props)=>
                        <Entrar 
                            {...props} 
                            url_backend={this.state.url_backend}
                        />
                    }
                >
                </Route>
                <Route exact path="/registrarme">
                    <Registrarme {...this.props} url_backend={this.state.url_backend}/>
                </Route>
            </Switch>
            
        </Router>
        )
    }
}

