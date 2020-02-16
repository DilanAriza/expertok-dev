import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home/';
import Entrar from './components/Entrar/'
import Registrarme from './components/Registrarme/';

class App extends Component{
    constructor(props){
        super(props);
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
                                        url_backend="back"
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
                                        url_backend="back"
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
                                        url_backend="back"
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

// const App = ()=>{
//     return(
//         <BrowserRouter>
//             <Route
//                 exact={true} 
//                 path="/"
//             >
//                 <Home
//                     url_backend="back"
//                 />
//             </Route>
//             <Route 
//                 exact={true} 
//                 path="/"
//             >
//                 <Entrar url_backend="back"/>
//             </Route><Route 
//                 exact={true} 
//                 path="/"
//             >
//                 <Registrarme url_backend="back"/>
//             </Route>
//             {/* <Route 
//                 path="/register" 
//                 component={Register}
//             /> */}
//         </BrowserRouter>
//     )
// }

export default App;