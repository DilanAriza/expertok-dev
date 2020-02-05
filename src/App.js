import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';

import './css/index.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Upload from './Upload';
import Home from './Home';

function App() {
    return (
        <Router>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <Link to="/">
                        <img src="https://via.placeholder.com/270x60?text=Logo+Expertok" className="navbar-brand" alt="Logo navbar"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
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
                                    <Link className="dropdown-item" to="/ciencias">Ciencias</Link> 
                                    <Link className="dropdown-item" to="/diseño">Diseño</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/mecatronica">Mecatronica</Link> 
                                </div>
                            </li>
                            <li className="nav-item mr-5"> 
                                <Link className="nav-link" to="/acerca-de">Información</Link> 
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/upload">
                    <Upload />
                </Route>
                <Route path="/fundadores">
                    <Home />
                </Route>
                <Route path="/cursos">
                    <Home />
                </Route>
                <Route path="/tutorias">
                    <Home />
                </Route>
                <Route path="/acerca-de">
                    <Upload />
                </Route>
            </Switch>
            
        </Router>
    );
}

export default App;
