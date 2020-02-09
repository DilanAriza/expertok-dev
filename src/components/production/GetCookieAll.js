import React, { Component } from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class GetCookieAll extends Component {
    componentDidMount = ()=>{
        console.log(cookies.getAll());
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
