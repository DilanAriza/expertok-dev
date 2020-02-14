import React, { Component } from 'react'
import Me from './me/Me';
import Navbar from './me/Navbar';


export default class IndexSing extends Component {
    
    constructor (props){
        super(props);
        this.state={
            url_backend: this.props.url_backend
        };
    }

    componentDidMount = ()=>{
    }

    render() {
        return (
            <div>
                <Navbar {...this.props} url_backend={this.state.url_backend}/>
                <Me 
                {...this.props} url_backend={this.props.url_backend}/>
            </div>
        )
    }
}
