import React, { Component } from 'react'
import axios from 'axios'
 



export default class LiberarVisitantes extends Component {

    state = {
        parqueo: []
    }

    async componentDidMount() {
        this.getParqueos();
    }

    getParqueos = async () => {
        const res = await axios.get('http://localhost:4000/api/reservas');
        let datos = []
        for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].Tipo === "vehiculoOficial") {

                let s = await axios.get('http://localhost:4000/api/parqueos/' + res.data[i].IdParqueo)
                let a = await axios.get('http://localhost:4000/api/users/' + res.data[i].IdUsuario)
                res.data[i].IdParqueo = s.data.Lugar
                res.data[i].IdUsuario = a.data.nombre
                datos.push(res.data[i]);
            }
        }
        this.setState({
            parqueo: datos
        });
    }

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/reservas/' + userId);
            this.getParqueos();
        }
    }

    exit = async () => {
        window.location.href = '/';
    }

    onSubmit = async (e) => {
        e.preventDefault();
    }

    render() {
        console.log(this.state.parqueo)
        return (
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {
                            this.state.parqueo.map(users => (
                                <div className="col-md-16" key={users._id}>
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5>{users.title}</h5>

                                        </div>
                                        <div className="card-body">
                                            <p>
                                                {users.content}
                                            </p>
                                            <p>
                                                Modelo: {users.mes} | Parqueo: {users.IdParqueo} | responsable: {users.IdUsuario}
                                            </p>

                                            <p>
                                                Chofer: {users.HoraEntrada} | Color: {users.HoraSalida}  | Placa: {users.Placa}
                                            </p>


                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-danger" onClick={() => this.deleteUser(users._id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>

            </div>

        )
    }
}

