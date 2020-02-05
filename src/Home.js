import React, { Component } from 'react'
import './css/home.css';
import banner from './img/banner.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                    <img className="vh-100 vw-100 w-100 m-0 p-0" src={banner} alt="banner"/>
                </div>
                <div className="row m-0 p-0 pt-5">
                    <div className="col-12 col-md-7 col-lg-9 m-0 p-0 mt-2 px-5 mb-5">
                        <div className="section description">
                            <h1 className="w-100 col-12 m-0 p-0 text-center mb-4 text-primary">
                                ¿Qué es Expertok?
                            </h1>        
                            <p className="w-100 col-12 m-0 p-0 px-5 mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis aliquid corporis rem sed eaque veniam culpa molestiae accusamus totam quos eligendi placeat maiores, est minima iste dignissimos earum natus deserunt inventore! Id obcaecati ab quia nihil consequuntur, deserunt, qui aliquid corrupti voluptates incidunt dolore esse nam. Temporibus delectus nesciunt inventore excepturi voluptatibus, assumenda eos, reiciendis repellat quasi hic consequuntur voluptas non eaque laudantium consequatur dolorum facilis modi illo sequi. Doloribus delectus itaque repellendus obcaecati aspernatur voluptates ab beatae adipisci mollitia in dolorem neque doloremque perferendis nisi impedit corporis amet nemo fugit voluptatibus deserunt, temporibus nulla expedita similique. Eaque, minus.
                            </p>
                        </div>
                        <div className="section vision">
                            <h1 className="w-100 col-12 m-0 p-0 text-center my-4 text-primary">
                                ¿A qué cursos puedo acceder?
                            </h1>        
                            <div className="list-group">
                                <button type="button" className="list-group-item list-group-item-action active text-center">
                                    Primaria/Secundaria
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Fisica</button>
                                <button type="button" className="list-group-item list-group-item-action">Matematicas</button>
                                <button type="button" className="list-group-item list-group-item-action">Ingles</button>
                                <button type="button" className="list-group-item list-group-item-action">Mas+</button>
                            </div>

                            <div className="list-group mt-5">
                                <button type="button" className="list-group-item list-group-item-action active text-center">
                                    Fortalecimiento
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Mecatronica</button>
                                <button type="button" className="list-group-item list-group-item-action">Diseño grafico</button>
                                <button type="button" className="list-group-item list-group-item-action">Programacion</button>
                                <button type="button" className="list-group-item list-group-item-action" >Mas+</button>
                            </div>
                            <div className="list-group mt-5">
                                <button type="button" className="list-group-item list-group-item-action active text-center">
                                    Asesorias
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Fortalecimiento cientifico-tecnico</button>
                                <button type="button" className="list-group-item list-group-item-action">Fortalecimiento Artes</button>
                                <button type="button" className="list-group-item list-group-item-action">Fortalecimiento s</button>
                                <button type="button" className="list-group-item list-group-item-action" >Mas+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3 p-1 m-0">
                        <div className="row w-100 m-0">
                            <h1 className="w-100 text-center">Fundadores</h1>
                            <div className="col-12 col-md-12 m-0 py-2">
                                <div className="card card-fundadores m-0">
                                    <img src="https://dummyimage.com/500x300/fff/aaa" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 m-0 py-2">
                                <div className="card card-fundadores m-0">
                                    <img src="https://dummyimage.com/500x300/fff/aaa" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 m-0 py-2">
                                <div className="card card-fundadores m-0">
                                    <img src="https://dummyimage.com/500x300/fff/aaa" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
