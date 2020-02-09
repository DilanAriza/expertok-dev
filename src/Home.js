import React, { Component } from 'react'
import './css/home.index.css';
import './css/home.banner.css' ;
import { Link } from 'react-router-dom';
// import { Alert } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="div">
                <div className="container-fluid m-0 p-0">
                    <div className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 card-entrar col-sm-6 banner-text m-0 p-3">
                                    <h2>TUTORES DE ALTA CALIDAD</h2>
                                    <p>
                                        Aprende facil y son complicaciones, con los mejores profesores a tu alcance
                                    </p>
                                    <Link className="link" to="/entrar">Entrar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="m-0 p-0 py-5">
                        <div className="col-12 m-0 p-0 mt-2 mb-5">
                            <div className="section description">
                                <h1 className="w-100 col-12 m-0 p-0 text-center mb-4 text-primary">
                                    ¿Qué es Expertok?
                                </h1>        
                                <p className="w-100 col-12 m-0 p-0 mt-5 text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis aliquid corporis rem sed eaque veniam culpa molestiae accusamus totam quos eligendi placeat maiores, est minima iste dignissimos earum natus deserunt inventore! Id obcaecati ab quia nihil consequuntur, deserunt, qui aliquid corrupti voluptates incidunt dolore esse nam. Temporibus delectus nesciunt inventore excepturi voluptatibus, assumenda eos, reiciendis repellat quasi hic consequuntur voluptas non eaque laudantium consequatur dolorum facilis modi illo sequi. Doloribus delectus itaque repellendus obcaecati aspernatur voluptates ab beatae adipisci mollitia in dolorem neque doloremque perferendis nisi impedit corporis amet nemo fugit voluptatibus deserunt, temporibus nulla expedita similique. Eaque, minus.
                                </p>
                            </div>
                    </div>
                    <div className="w-100 m-0 p-0 my-5">
                        <h1 className="w-100 p-0 text-center my-4 mb-5 pb-3 text-primary">
                            ¿A qué cursos puedo acceder?
                        </h1>        
                        <div className="row w-100 m-0 p-0 d-flex">
                            <div className="list-group col-12 col-md-4 m-0 mb-4">
                                <button 
                                    type="button" 
                                    className="list-group-item list-group-item-action active text-center">
                                    Primaria/Secundaria
                                </button>
                                <button 
                                    type="button" 
                                    className="list-group-item list-group-item-action">
                                    Fisica
                                </button>
                                <button 
                                    type="button"
                                    className="list-group-item list-group-item-action">
                                    Matematicas
                                </button>
                                <button 
                                    type="button"
                                    className="list-group-item list-group-item-action">
                                    Ingles
                                </button>
                                <button
                                    type="button" 
                                    className="list-group-item list-group-item-action">
                                    Mas+
                                </button>
                            </div>
                            <div className="list-group col-12 col-md-4 m-0  mb-4">
                                <button 
                                    type="button" 
                                    className="list-group-item list-group-item-action active text-center">
                                    Primaria/Secundaria
                                </button>
                                <button 
                                    type="button" 
                                    className="list-group-item list-group-item-action">
                                    Fisica
                                </button>
                                <button 
                                    type="button"
                                    className="list-group-item list-group-item-action">
                                    Matematicas
                                </button>
                                <button 
                                    type="button"
                                    className="list-group-item list-group-item-action">
                                    Ingles
                                </button>
                                <button
                                    type="button" 
                                    className="list-group-item list-group-item-action">
                                    Mas+
                                </button>
                            </div>
                            <div className="list-group col-12 col-md-4 m-0  mb-4">
                                <button 
                                    type="button" 
                                    className="list-group-item list-group-item-action active text-center">
                                    Primaria/Secundaria
                                </button>
                                <button 
                                    type="button" 
                                    className="list-group-item list-group-item-action">
                                    Fisica
                                </button>
                                <button 
                                    type="button"
                                    className="list-group-item list-group-item-action">
                                    Matematicas
                                </button>
                                <button 
                                    type="button"
                                    className="list-group-item list-group-item-action">
                                    Ingles
                                </button>
                                <button
                                    type="button" 
                                    className="list-group-item list-group-item-action">
                                    Mas+
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
