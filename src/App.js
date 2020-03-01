import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home/';
import Entrar from './components/Entrar/';
import Registrarme from './components/Registrarme/';
import UserHome from './components/UserHome/'
import Tutor from './components/Tutor/Tutor';
import UploadVideo from './components/UploadVideo/UploadVideo';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            // url_backend: "https://expertok-backend.herokuapp.com/"
            url_backend: "http://localhost:4000/"
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
                                        for={'student'}
                                        title={'Estudiante'}
                                    />
                                )
                            }
                        }
                    }
                />
                <Route 
                exact
                path="/tutorLogin"
                component={
                    (props, match)=>{
                        if(match){
                            return(
                                <Entrar
                                    {...props}
                                    url_backend={this.state.url_backend}
                                    for={'teacher'}
                                    title={'Tutor'}
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
                                    <UserHome
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
                    path="/tutor"
                    component={
                        (props, match)=>{
                            if(match){
                                return(
                                    <Tutor
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
                    path="/upload/video"
                    component={
                        (props, match)=>{
                            if(match){
                                return(
                                    <UploadVideo
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