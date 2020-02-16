import React, { Component } from 'react'


//components
import Navbar from './Navbar'

export default class CategoriaBachillerato extends Component {
    
    constructor (props){
        super(props);
        this.state={
            url_backend: this.props.url_backend
        };
    }

    render() {
        return (
            <div>
                <Navbar {...this.props} url_backend={this.state.url_backend}/>
                <div className="row m-0 p-0 mt-5 pt-5">
                hola
                </div>
            </div>
        )
    }
}
