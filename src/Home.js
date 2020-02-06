import React, { Component } from 'react'
import './css/home.index.css';
import './css/home.banner.css' ;
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 banner-text">
                                <h2>TUTORES DE ALTA CALIDAD</h2>
                                <p>
                                    Aprende facil y son complicaciones, con los mejores profesores a tu alcance
                                </p>
                                <Link className="link" to="/acerca-de">Acerca de</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0 p-0 pt-5">
                    <div className="col-12  m-0 p-0 mt-2 px-5 mb-5">
                        <div className="section description">
                            <h1 className="w-100 col-12 m-0 p-0 text-center mb-4 text-primary">
                                ¿Qué es Expertok?
                            </h1>        
                            <p className="w-100 col-12 m-0 p-0 px-5 mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis aliquid corporis rem sed eaque veniam culpa molestiae accusamus totam quos eligendi placeat maiores, est minima iste dignissimos earum natus deserunt inventore! Id obcaecati ab quia nihil consequuntur, deserunt, qui aliquid corrupti voluptates incidunt dolore esse nam. Temporibus delectus nesciunt inventore excepturi voluptatibus, assumenda eos, reiciendis repellat quasi hic consequuntur voluptas non eaque laudantium consequatur dolorum facilis modi illo sequi. Doloribus delectus itaque repellendus obcaecati aspernatur voluptates ab beatae adipisci mollitia in dolorem neque doloremque perferendis nisi impedit corporis amet nemo fugit voluptatibus deserunt, temporibus nulla expedita similique. Eaque, minus.
                            </p>
                        </div>
                </div>
                <div className="row w-100 m-0 p-0">
                    <h1 className="w-100  p-0 text-center my-4 text-primary">
                        ¿A qué cursos puedo acceder?
                    </h1>        
                    <div className="row w-100 m-0 p-0 d-flex">
                        <div className="list-group col-12 col-md-4 m-0 p-3">
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
                        <div className="list-group col-12 col-md-4 m-0 p-3">
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
                        <div className="list-group col-12 col-md-4 m-0 p-3">
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
            <div className="row w-100 m-0 my-5">
                <h1 className="w-100 text-center my-5">Fundadores</h1>
                <div className="row w-100 d-flex justify-content-around m-0 p-0">
                    <div className="card card-fundadores col-12 col-md-4 col-lg-3">
                        <img src="https://dummyimage.com/500x300/fff/aaa" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Dilan Ariza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/" className="btn btn-primary btn-block">ver perfil</Link>
                        </div>
                    </div>
                    <div className="card card-fundadores col-12 col-md-4 col-lg-3">
                        <img src="https://dummyimage.com/500x300/fff/aaa" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Dilan Ariza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/" className="btn btn-primary btn-block">ver perfil</Link>
                        </div>
                    </div>
                    <div className="card card-fundadores col-12 col-md-4 col-lg-3">
                        <img src="https://dummyimage.com/500x300/fff/aaa" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Dilan Ariza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/" className="btn btn-primary btn-block">ver perfil</Link>
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
        )
    }
}
