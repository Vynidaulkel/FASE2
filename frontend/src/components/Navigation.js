import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './menu.jpeg';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert'

let horaSistema = "07:30"
let edit = false
let dia = "";
let diaNumero = "";
let mes = "";

export default class Navigation extends Component {


    state = { infoUsuario: [] }


    async componentDidMount() {
        if (this.props.match.params.id !== "admin") {
            const res = await axios.get('http://localhost:4000/api/users/' + this.props.match.params.id);
            this.setState(res.data)
            this.setState({
                infoUsuario: res.data
            });
        }
    }

    onTimeChange = async (e) => {
        horaSistema = e.target.value

        if (edit) {
            const reserva = await axios.get('http://localhost:4000/api/reservas');
            const campos = await axios.get('http://localhost:4000/api/campos');


            for (var e = 0; e < reserva.data.length; e++) {

                if (reserva.data[e].mes <= mes && reserva.data[e].fecha < diaNumero) {

                    for (var i = 0; i < campos.data.length; i++) {
                        if (campos.data[i].fecha === reserva.data[e].fecha && campos.data[i].mes === reserva.data[e].mes) {

                            let tipo = reserva.data[e].Tipo

                            await axios.delete('http://localhost:4000/api/reservas/' + reserva.data[e]._id);

                            if (tipo === "Discapacitado") {

                                const updateCampo = {

                                    fecha: campos.data[i].fecha,
                                    dia: campos.data[i].dia,
                                    mes: campos.data[i].mes,
                                    IdParqueo: campos.data[i].IdParqueo,
                                    espaciosTotales: campos.data[i].espaciosTotales,
                                    carros: campos.data[i].carros,
                                    discapacitados: parseInt(campos.data[i].discapacitados) + 1,
                                    reservados: campos.data[i].reservados,
                                    visitante: campos.data[i].visitante

                                };
                                await axios.put('http://localhost:4000/api/campos/' + campos.data[i]._id, updateCampo);

                            }

                            if (tipo === "Reservado") {
                                swal('as')
                                const updateCampo = {

                                    fecha: campos.data[i].fecha,
                                    dia: campos.data[i].dia,
                                    mes: campos.data[i].mes,
                                    IdParqueo: campos.data[i].IdParqueo,
                                    espaciosTotales: campos.data[i].espaciosTotales,
                                    carros: campos.data[i].carros,
                                    discapacitados: campos.data[i].discapacitados,
                                    reservados: parseInt(campos.data[i].reservados) + 1,
                                    visitante: campos.data[i].visitante,
                                };
                                await axios.put('http://localhost:4000/api/campos/' + campos.data[i]._id, updateCampo);

                            }

                            if (tipo === "Normal") {



                                const updateCampo = {
                                    fecha: campos.data[i].fecha,
                                    dia: campos.data[i].dia,
                                    mes: campos.data[i].mes,
                                    IdParqueo: campos.data[i].IdParqueo,
                                    espaciosTotales: parseInt(campos.data[i].espaciosTotales) + 1,
                                    carros: campos.data[i].carros,
                                    discapacitados: campos.data[i].discapacitados,
                                    reservados: campos.data[i].reservados,
                                    visitante: campos.data[i].visitante,
                                };
                                await axios.put('http://localhost:4000/api/campos/' + campos.data[i]._id, updateCampo);

                            }
                        }
                    }

                }
                else if (reserva.data[e].mes === mes && reserva.data[e].fecha === diaNumero && reserva.data[e].HoraSalida < horaSistema) {

                    for (var i = 0; i < campos.data.length; i++) {


                        if (campos.data[i].fecha === reserva.data[e].fecha && campos.data[i].mes === reserva.data[e].mes) {
                            let tipo = reserva.data[e].Tipo

                            await axios.delete('http://localhost:4000/api/reservas/' + reserva.data[e]._id);

                            if (tipo === "Discapacitado") {

                                const updateCampo = {

                                    fecha: campos.data[i].fecha,
                                    dia: campos.data[i].dia,
                                    mes: campos.data[i].mes,
                                    IdParqueo: campos.data[i].IdParqueo,
                                    espaciosTotales: campos.data[i].espaciosTotales,
                                    carros: campos.data[i].carros,
                                    discapacitados: parseInt(campos.data[i].discapacitados) + 1,
                                    reservados: campos.data[i].reservados,
                                    visitante: campos.data[i].visitante

                                };
                                await axios.put('http://localhost:4000/api/campos/' + campos.data[i]._id, updateCampo);
                            }

                            if (tipo === "Reservado") {
                                swal('as')
                                const updateCampo = {

                                    fecha: campos.data[i].fecha,
                                    dia: campos.data[i].dia,
                                    mes: campos.data[i].mes,
                                    IdParqueo: campos.data[i].IdParqueo,
                                    espaciosTotales: campos.data[i].espaciosTotales,
                                    carros: campos.data[i].carros,
                                    discapacitados: campos.data[i].discapacitados,
                                    reservados: parseInt(campos.data[i].reservados) + 1,
                                    visitante: campos.data[i].visitante,
                                };
                                await axios.put('http://localhost:4000/api/campos/' + campos.data[i]._id, updateCampo);
                            }

                            if (tipo === "Normal") {


                                const updateCampo = {
                                    fecha: campos.data[i].fecha,
                                    dia: campos.data[i].dia,
                                    mes: campos.data[i].mes,
                                    IdParqueo: campos.data[i].IdParqueo,
                                    espaciosTotales: parseInt(campos.data[i].espaciosTotales) + 1,
                                    carros: campos.data[i].carros,
                                    discapacitados: campos.data[i].discapacitados,
                                    reservados: campos.data[i].reservados,
                                    visitante: campos.data[i].visitante,
                                };
                                await axios.put('http://localhost:4000/api/campos/' + campos.data[i]._id, updateCampo);

                            }
                        }
                    }
                }
            }

        }
    }

    onFechaChange = async (e) => {
        let current = new Date(e.target.value);
        current.setDate(current.getDate() + 1);
        diaNumero = current.toLocaleDateString('es-ES', { day: '2-digit' });
        dia = current.toLocaleDateString('es-ES', { weekday: 'long' });
        mes = current.toLocaleDateString('es-ES', { month: '2-digit' });
        edit = true
    }



    render() {
        if (this.props.match.params.id === 'admin') {
            return (

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">


                        <Link className="navbar-brand" to="/menu/admin">
                            <i className="material-icons">
                                directions_car </i> Parqueo TEC
                        </Link>
                        <h5 style={{ color: "white" }}> Administrador </h5>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <TextField
                                        id="time"
                                        label="Hora"
                                        type="time"
                                        fullWidth={true}
                                        onChange={this.onTimeChange}
                                        className="form-group"
                                        defaultValue={horaSistema}
                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>

                                <li className="nav-item active">
                                    <TextField
                                        id="date"
                                        label="Fecha"
                                        onChange={this.onFechaChange}
                                        type="date"
                                        inputFormat="'Week of' MMM d"

                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>


                                <li className="nav-item">
                                    <Link to="/parqueos/1" className="nav-link">Parqueos</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/modificarParqueo" className="nav-link">Crear Parqueos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/createUser"} className="nav-link">Crear Usuario</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to={"/asignarEspacio/" + this.props.match.params.id} className="nav-link">Espacio Visitante</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/ModificarUsuario"} className="nav-link">Modificar Usuarios</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/Estadisticas/"} className="nav-link">Estadisticas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Salir</Link>
                                </li>
                            </ul>
                        </div>


                    </nav>
                    <img src={logo} />
                </div>

            )

        }
        else if (this.state.infoUsuario.Tipo == 'Jefe') {
            return (
            <div className="container">

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">

                        <Link className="navbar-brand" to={"/menu/" + this.props.match.params.id}>
                            <i className="material-icons">
                                directions_car </i> Parqueo TEC
                        </Link>

                        <h2 style={{ color: "white" }}> Hola, {this.state.nombre} </h2>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">


                                <li className="nav-item">
                                    <TextField
                                        id="time"
                                        label="Hora"
                                        type="time"
                                        fullWidth={true}
                                        onChange={this.onTimeChange}
                                        defaultValue={horaSistema}
                                        className="form-group"
                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>

                                <li className="nav-item">
                                    <TextField
                                        id="date"
                                        label="Fecha"
                                        onChange={this.onFechaChange}
                                        type="date"
                                        inputFormat="'Week of' MMM d"
                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>

                                <li className="nav-item">
                                    <Link to={"/verPerfil/" + this.props.match.params.id} className="nav-link">Ver Perfil</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/reservar/" + this.props.match.params.id} className="nav-link">Reservar</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/VerReservas/" + this.props.match.params.id} className="nav-link">Ver Reservas</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/asignarEspacio/" + this.props.match.params.id} className="nav-link">Asignar Espacio Visitante</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/AgregarPlaca/" + this.props.match.params.id} className="nav-link">Agregar Placa</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Salir</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <img src={logo} />
                </div>
                )
        }
        else if (this.state.infoUsuario.Tipo == 'Operador') {

            return (

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">




                        <Link className="navbar-brand" to="/menu/admin">
                            <i className="material-icons">
                                directions_car </i> Parqueo TEC
                        </Link>
                        <h2 style={{ color: "white" }}> Operador </h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">


                            <li className="nav-item">
                                    <TextField
                                        id="time"
                                        label="Hora"
                                        type="time"
                                        fullWidth={true}
                                        onChange={this.onTimeChange}
                                        defaultValue={horaSistema}
                                        className="form-group"
                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>

                                <li className="nav-item">
                                    <TextField
                                        id="date"
                                        label="Fecha"
                                        onChange={this.onFechaChange}
                                        type="date"
                                        inputFormat="'Week of' MMM d"
                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>

                                <li className="nav-item">
                                    <Link to={"/verPerfil/" + this.props.match.params.id} className="nav-link">Ver Perfil</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to={"/parqueos/"+ this.props.match.params.id} className="nav-link">Parqueos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/LiberarVisitante/" + this.props.match.params.id}  className="nav-link">Liberar Visitante</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/liberarVehiculo" className="nav-link">Liberar Vehiculo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/asignarDatos/" + this.props.match.params.id} className="nav-link">Vehiculo oficial</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Salir</Link>
                                </li>
                            </ul>
                        </div>


                    </nav>
                    <img src={logo} />
                </div>

            )
        }
        else {

            return (

                <div className="container">

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">

                        <Link className="navbar-brand" to={"/menu/" + this.props.match.params.id}>
                            <i className="material-icons">
                                directions_car </i> Parqueo TEC
                        </Link>

                        <h2 style={{ color: "white" }}> Hola, {this.state.nombre} </h2>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">


                                <li className="nav-item">
                                    <TextField
                                        id="time"
                                        label="Hora"
                                        type="time"
                                        fullWidth={true}
                                        onChange={this.onTimeChange}
                                        defaultValue={horaSistema}
                                        className="form-group"
                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>

                                <li className="nav-item">
                                    <TextField
                                        id="date"
                                        label="Fecha"
                                        onChange={this.onFechaChange}
                                        type="date"
                                        inputFormat="'Week of' MMM d"
                                        InputLabelProps={{
                                            color: "secondary",
                                            className: "DatePicker",
                                            style: { color: "#ffff" },
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            style: { color: "#ffff" },
                                        }}
                                    />
                                </li>

                                <li className="nav-item">
                                    <Link to={"/verPerfil/" + this.props.match.params.id} className="nav-link">Ver Perfil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/reservar/" + this.props.match.params.id} className="nav-link">Reservar</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/VerReservas/" + this.props.match.params.id} className="nav-link">Ver Reservas</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/AgregarPlaca/" + this.props.match.params.id} className="nav-link">Agregar Placa</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Salir</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <img src={logo} />
                </div>

            )
        }

    }
}

