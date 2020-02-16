import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home';
import Entrar from './components/Entrar/'
import Registrarme from './components/Registrarme';

class App extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Route
                    exact={true} 
                    path="/"
                >
                    <Home
                        {...this.props}
                        url_backend="back"
                    />
                </Route>
                <Route 
                    exact={true} 
                    path="/entrar"
                >
                    <Entrar url_backend="back"/>
                </Route>
                <Route 
                    exact={true} 
                    path="/"
                >
                    <Registrarme url_backend="back"/>
                </Route>
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