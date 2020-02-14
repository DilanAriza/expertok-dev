import React, { Component } from 'react';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default class GetAuth extends Component {

    componentDidMount = () => {
        console.log(this.props);
        console.log(cookies.getAll());
    }

    render(){
        return(
            <div>
                .
            </div>
        )
    }
}