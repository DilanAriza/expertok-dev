import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/entrar.css';
// import './../../css/components/spinner.css'

//React router ----------------------------------------------------
import { Link } from 'react-router-dom';

//React Strap  ----------------------------------------------------
import { Alert } from 'reactstrap'

//Axios -----------------------------------------------------------
import axios from 'axios';

//Cookies ---------------------------------------------------------
import Cookies from 'universal-cookie';
import NavbarGeneral from './../NavbarGeneral/';
const cookies = new Cookies();


export default class Entrar extends Component {
    
    constructor(props){
        super(props);
        this.state={
            backend_url: this.props.url_backend + 'login/login',
            email:'',
            password:'',
            alert_open: false,
            alert_color: '',
            alert_message:''
        }
        
        const METHODS = [
            'handleEmail',
            'handlePassword'
        ];

        METHODS.forEach((method)=>{
            this[method] = this[method].bind(this);
        });
        // if(this.props.match.params.register){
        //     const paramRegister = this.props.match.params.register;
        //     if(paramRegister === "success"){
        //         this.setState({
        //             alert_color: 'success',
        //             alert_message: 'Te registraste correctamente',
        //             alert_open: true
        //         });
        //     }
        // }
    }

    componentWillMount = ()=>{
        if(this.props.match.params.register){
            const paramRegister = this.props.match.params.register;
            if(paramRegister === "success"){
                this.setState({
                    alert_color: 'success',
                    alert_message: 'Te registraste correctamente',
                    alert_open: true
                });
            }
        }
    }

    toggleAlert = ()=>{
        this.setState({
            alert_open: !this.state.alert_open
        });
    }

    handleEmail = (e)=>{
        if(e.target.value !== ''){
            const email = e.target.value;
            this.setState({
                email
            });   
        }

        if(e.target.select !== ''){
            const email = e.target.value;
            this.setState({
                email
            });
        }
    }

    handlePassword = (e)=>{
        const password = e.target.value;
        this.setState({
            password: password
        });
    }
    
    cookieGenerate = (idCok, valueCok)=>{
        let timeCookie = new Date();
        timeCookie.setTime(timeCookie.getTime() + (timeCookie*60*1000));
        cookies.set(idCok, valueCok,{ path: '/',expires: timeCookie });
    }

    login = async()=>{
        const email = this.state.email;
        const password = this.state.password;

        if(email !== '' && password !== ''){
            var spinner = document.getElementById('spinner');
            spinner.classList.remove('d-none');
            const responseServer = await axios({
                method: 'POST',
                url: this.state.backend_url,
                data: {
                    email,
                    password
                }
            });
            if(responseServer.data['status'] === "200"){
                this.setState({
                    alert_open: true,
                    alert_color: 'primary',
                    alert_message: responseServer.data['message']
                });
                const tokenUser = responseServer.data.token;
                await this.cookieGenerate('tokenUser', tokenUser);
                await this.cookieGenerate('Auth', true);
                await this.cookieGenerate('userData', responseServer.data.userData);
                this.props.history.push('/me');
            }
            
            if(responseServer.data['status'] === '300'){
                spinner.classList.add('d-none');
                this.setState({
                    alert_open: true,
                    alert_color: 'warning',
                    alert_message: responseServer.data['message']
                });    
            }

            if(responseServer.data['status'] === '400'){
                spinner.classList.add('d-none');
                this.setState({
                    alert_open: true,
                    alert_color: 'danger',
                    alert_message: responseServer.data['message']
                });
            }
        }else{
            this.setState({
                alert_open: true,
                alert_color: "warning",
                alert_message : "Por favor llena todos los espacios"
            })    
        }
    }

    render(props) {
        return (
            <div>
                <NavbarGeneral />
                <div className="Spinner d-none" id="spinner">
                    <div className="loadingio-spinner-ripple-8daw83y7grw">
                        <div className="ldio-64ryit8n18r">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid entrar-banner d-flex justify-content-center align-items-center">
                    <div className="col-12 col-sm-8 col-md-5 col-lg-5">
                        <Alert 
                            color={this.state.alert_color} 
                            isOpen={this.state.alert_open} 
                            toggle={this.toggleAlert.bind(this)}
                        >
                            {this.state.alert_message}
                        </Alert>
                        <div className="card card-entrar">
                            <div className="card-header">
                                <h1 className="w-100 text-center">Entrar</h1>
                            </div>
                            <div className="card-body">
                                <div className="form p-3">
                                    <div className="form-group mt-2">    
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            className="form-control" 
                                            placeholder="E-mail"
                                            onChange={this.handleEmail}
                                        />
                                    </div>
                                    <div className="form-group mt-4">    
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            className="form-control" 
                                            placeholder="Contraseña"
                                            onChange={this.handlePassword}
                                        />
                                    </div>
                                    <button onClick={this.login} type="submit" className="btn btn-secondary">Entrar</button>
                                </div>
                                <p className="w-100 text-center">No posees una cuenta? <Link to="/registrarme" className="btn btn-primary m-0">Registrate</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
