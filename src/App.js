import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home/';
import Entrar from './components/Entrar/'
import Registrarme from './components/Registrarme/';
import Me from './components/Me/'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            url_backend: "http://expertok-backend.herokuapp.com/"
        }
    }
    render(){
        return(
            <BrowserRouter>
                <Route
                    exact={true}
                    path="/"
                    component={
                        (props, match)=>{
                            if(match){
                                return(
                                    <Home
                                        {...props}
                                        url_backend={this.state.url_backend}
                                    />
                                )
                            }
                        }
                    }
                />
                <Route 
                    exact
                    path="/entrar"
                    component={
                        (props, match)=>{
                            if(match){
                                return(
                                    <Entrar
                                        {...props}
                                        url_backend={this.state.url_backend}
                                    />
                                )
                            }
                        }
                    }
                />
                <Route 
                    exact
                    path="/entrar/:register"
                    component={
                        (props, match)=>{
                            if(match){
                                return(
                                    <Entrar
                                        {...props}
                                        register={'success'}
                                        url_backend={this.state.url_backend}
                                    />
                                )
                            }
                        }
                    }
                />
                <Route 
                    exact
                    path="/registrarme"
                    component={
                        (props, match)=>{
                            if(match){
                                return(
                                    <Registrarme
                                        {...props}
                                        url_backend={this.state.url_backend}
                                    />
                                )
                            }
                        }
                    }
                />
                <Route 
                    exact
                    path="/me"
                    component={
                        (props, match)=>{
                            if(match){
                                return(
                                    <Me
                                        {...props}
                                        url_backend={this.state.url_backend}
                                    />
                                )
                            }
                        }
                    }
                />
            </BrowserRouter> 
        )
    }
}


export default App;