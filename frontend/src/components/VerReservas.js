import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

let sede = ""
export default class VerReservas extends Component {

    state = {
        reservas: [],
        parqueo: [],
    }

    async componentDidMount() {
        this.getUsers();
    }


    getUsers = async () => {


        const reserva = await axios.get('http://localhost:4000/api/reservas');
        let reservasUsuario = []
        const reservas = reserva.data

        for (var i = 0; i < reservas.length; i++) {

            if (reservas[i].IdUsuario === this.props.match.params.id) {
                const parqueo = await axios.get('http://localhost:4000/api/parqueos/' + reservas[i].IdParqueo);
                reservas[i].IdParqueo = parqueo.data.campus
                reservas[i].Tipo = parqueo.data.Lugar
                reservasUsuario.push(reservas[i])

            }
        }

        this.setState({
            reservas: reservasUsuario,

        });
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-4 offset-md-4">

                    <div>
                        <h1 style={{ textAlign: "center" }}>Reservaciones</h1>


                        <div className="col-md-4 ">

                        </div>
                        <div className="col-md-19">
                            <ul className="list-group">
                                {
                                    this.state.reservas.map(users => (
                                        <div className="col-md-20" key={users._id}>
                                            <div className="card">
                                                <div className="card-header d-flex justify-content-between">
                                                    <h5>{users.title}</h5>
                                                   
                                                </div>

                                                <div className="card-body">

                                                    <p>
                                                        {users.content}
                                                    </p>

                                                    <p>
                                                        Sede: {users.IdParqueo} - Lugar: {users.Tipo}
                                                    </p>

                                                    <p>
                                                        Fecha:  {users.dia}  {users.fecha} del {users.mes}
                                                    </p>

                                                    <p>
                                                        Hora Entrada:  {users.HoraEntrada}  Hora Salida {users.HoraSalida}
                                                    </p>

                                                    <p>
                                                        Vehiculo: {users.Placa}
                                                    </p>


                                                </div>
                                                <div className="card-footer">

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}