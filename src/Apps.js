import React, {Component} from 'react';
//------------- React Router ---------------------------------------------
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import IndexSing from './components/IndexSing';
import Home from './Home';
// import Entrar from './components/Entrar/Entrar';
// import Registrarme from './components/Registrarme';
// import Upload from './components/Upload';
// import GetCookieAll from './components/production/GetCookieAll';
// import CategoriaBachillerato from './components/me/CategoriaBachillerato';

export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            url_backend:'https://expertok-backend.herokuapp.com/'
        }
    }

    render() {
        return (
            <Router>
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
                        }
                    >
                    </Route>
                    {/* <Route
                        exact 
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
                    <Route
                        exact 
                        path="/registrarme"
                        component={
                            (props)=>
                                <Registrarme
                                {...props}
                                url_backend={this.state.url_backend}
                                />
                        }
                    >
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
                        path="/cookie" 
                        component={
                            (props)=>
                            <GetCookieAll 
                                {...props} 
                                url_backend={this.state.url_backend}
                            />
                        }
                    >
                    </Route>
                    <Route
                        exact 
                        path="/me"
                        component={
                            (props)=>
                                <IndexSing
                                {...props}
                                url_backend={this.state.url_backend}
                                />
                        }
                    >
                    </Route>
                    <Route
                        exact 
                        path="/me/categorias/bachillerato"
                        component={
                            (props)=>
                                <CategoriaBachillerato
                                {...props}
                                url_backend={this.state.url_backend}
                                />
                        }
                    >
                    </Route>
                    <Route
                        exact 
                        path="/me/categorias/jornada-fortalecida"
                        component={
                            (props)=>
                                <IndexSing
                                {...props}
                                url_backend={this.state.url_backend}
                                />
                        }
                    >
                    </Route>
                    <Route
                        exact 
                        path="/me/categorias/profesional"
                        component={
                            (props)=>
                                <IndexSing
                                {...props}
                                url_backend={this.state.url_backend}
                                />
                        }
                    >
                    </Route>
                    <Route
                        exact 
                        path="/upload"
                        component={
                            (props)=>
                                <Upload
                                {...props}
                                url_backend={this.state.url_backend}
                                />
                        }
                    >
                    </Route> */}
                </Switch> 
            </Router>
        )
    }
}

