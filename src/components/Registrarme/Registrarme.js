import React, { Component } from 'react'

import './assets/css/registrarme.css';
// import './../css/components/spinner.css'
import { Link } from 'react-router-dom';
import {Alert} from 'reactstrap'
import axios from 'axios';
import NavbarGeneral from './../NavbarGeneral/';
// import Spinner from '../../assets/Spinner';

export default class Registrarme extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            url_backend: this.props.url_backend + 'login/register',
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            alert_open: false,
            alert_color: '',
            alert_message: ''
        };

        const METHODS = [
            'handleEmail',
            'handleName',
            'handlePassword',
            'handlePasswordRepeat'
        ];

        METHODS.forEach((method)=>{
            this[method] = this[method].bind(this);
        })

    }

    handleName = (e)=>{
        const name = e.target.value;
        this.setState({
            name
        });
    }

    handleEmail = (e)=>{
        const email = e.target.value;
        this.setState({
            email
        });
    }

    handlePassword = (e)=>{
        const password = e.target.value;
        this.setState({
            password: password
        });
    }

    handlePasswordRepeat = (e)=>{
        const passwordRepeat = e.target.value;
        this.setState({
            confirmPassword: passwordRepeat
        });
    }

    register = async()=>{
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const register = new Date();

        if(name !== "" && email !== "" && password !== "" && confirmPassword !== ""){
            if(password === confirmPassword){
                var spinner = document.getElementById('spinner');
                spinner.classList.remove('d-none');
                await axios({
                        method: 'POST',
                        url: this.state.url_backend,
                        data: {
                            username: this.state.name,
                            email: this.state.email,
                            password: this.state.password,
                            register: register
                        }
                }).then((datas)=>{
                    if(datas.data['status'] === "200"){
                        this.setState({
                            alert_open: true,
                            alert_color: 'primary',
                            alert_message: datas.data['message']
                        });
                        this.props.history.push('/entrar/success');
                    }
                    
                    if(datas.data['status'] === '300'){
                        spinner.classList.add('d-none');
                        this.setState({
                            alert_open: true,
                            alert_color: 'warning',
                            alert_message: datas.data['message']
                        });    
                    }
    
                    if(datas.data['status'] === '400'){
                        spinner.classList.add('d-none');
                        this.setState({
                            alert_open: true,
                            alert_color: 'danger',
                            alert_message: datas.data['message']
                        });
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }else{
                this.setState({
                    alert_open: true,
                    alert_color: "warning",
                    alert_message : "Las contraseñas no coinciden"
                })    
            }
        }else{
            this.setState({
                alert_open: true,
                alert_color: "warning",
                alert_message : "No dejes espacios vacios"
            })
        }
    }

    componentDidMount = ()=>{
    }

    toggleAlert = ()=>{
        this.setState({
            alert_open: !this.state.alert_open
        });
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
                    <div className="col-12 col-sm-8 col-md-5 col-lg-5 mt-5">
                    <Alert 
                                color={this.state.alert_color} 
                                isOpen={this.state.alert_open} 
                                toggle={this.toggleAlert.bind(this)}
                                className="mt-3"
                            >
                                {this.state.alert_message}
                            </Alert>
                        <div className="card card-entrar">
                            <div className="card-header">
                                <h1 className="w-100 text-center">Registrate</h1>
                            </div>
                            <div className="card-body">
                                <div className="form p-3">
                                    <div className="form-group mt-2">    
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            className="form-control" 
                                            placeholder="Nombre Completo"
                                            onChange={this.handleName}
                                        />
                                    </div>
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
                                    <div className="form-group mt-2">    
                                        <input 
                                            type="password" 
                                            name="password2" 
                                            id="password2" 
                                            className="form-control" 
                                            placeholder="Contraseña"
                                            onChange={this.handlePassword}
                                        />
                                    </div>
                                    <div className="form-group mt-2">    
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            className="form-control" 
                                            placeholder="Confirmar Contraseña"
                                            onChange={this.handlePasswordRepeat}
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-secondary"
                                        onClickCapture={this.register}>
                                        Crear cuenta
                                    </button>
                                </div>
                                <p className="w-100 text-center">Tienes una cuenta? <Link to="/entrar" className="btn btn-primary m-0">Entrar</Link></p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
