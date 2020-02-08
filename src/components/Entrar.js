import React, { Component } from 'react'

import './../css/components/entrar.css';
import { Link, matchPath } from 'react-router-dom';
import { Alert } from 'reactstrap'

export default class Entrar extends Component {
    
    constructor(props){
        super(props);
        this.state={
            backend_url: this.props.backend_url,
            alert_open: false,
            alert_color: '',
            alert_content:''
        }
    }

    // state={
    // }

    componentWillMount = ()=>{
        // console.log(this.props.match.params);
        if(this.props.match.params.register){
            const paramRegister = this.props.match.params.register;
            if(paramRegister == "success"){
                this.setState({
                    alert_color: 'success',
                    alert_content: 'Te registraste correctamente',
                    alert_open: true
                });
            }
            console.log(this.props.match.params.register);
        }
    }

    toggleAlert = ()=>{
        this.setState({
            alert_open: !this.state.alert_open
        });
    }

    render(props) {
        return (
            <div>
                <div className="container-fluid entrar-banner d-flex justify-content-center align-items-center">
                    <div className="col-12 col-sm-8 col-md-5 col-lg-5">
                        <Alert 
                            color={this.state.alert_color} 
                            isOpen={this.state.alert_open} 
                            toggle={this.toggleAlert.bind(this)}
                        >
                            {this.state.alert_content}
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
                                        />
                                    </div>
                                    <div className="form-group mt-4">    
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            className="form-control" 
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-secondary">Entrar</button>
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
