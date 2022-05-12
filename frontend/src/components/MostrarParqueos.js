import React, { Component } from 'react'
import axios from 'axios'



export default class MostrarParqueos extends Component {

    state = {
        parqueo: []
    }

    async componentDidMount() {
        this.getParqueos();

    }

    getParqueos = async () => {
        const res = await axios.get('http://localhost:4000/api/parqueos');
        this.setState({
            parqueo: res.data
        });
        console.log(this.state.parqueo);
    }

    exit = async () => {
        window.location.href = '/';
    }


    onSubmit = async (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

                        <div className="card card-body">
                            <h3>Parqueos disponibles</h3>
                            <ul className="list-group">
                                {
                                    this.state.parqueo.map(parqueo => (
                                        <li className="list-group-item list-group-item-action" >
                                            {"Tipo:"} {parqueo.tipo} 
                                            {"     Lugar:"} {parqueo.Lugar} 
                                            {"     Cantidad espacios:"} {parqueo.Cantidad}
                                        </li>
                                        
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

