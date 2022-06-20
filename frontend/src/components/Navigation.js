import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './menu.jpeg';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';



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
    render() {
        if (this.props.match.params.id === 'admin') {
            return (

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">


                        <Link className="navbar-brand" to="/menu/admin">
                            <i className="material-icons">
                                directions_car </i> Parqueo TEC
                        </Link>
                        <h2 style={{ color: "white" }}> Administrador </h2>
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
                                    <Link to="/parqueos" className="nav-link">Parqueos</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/modificarParqueo" className="nav-link">Crear Parqueos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/createUser"} className="nav-link">Crear Usuario</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/ModificarUsuario"} className="nav-link">Modificar Usuarios</Link>
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
                                    <Link to={"/verPerfil/" + this.props.match.params.id} className="nav-link">Ver Perfil</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/parqueos" className="nav-link">Parqueos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/modificarParqueo" className="nav-link">Liberar visitante</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/AsignarDatosAlParqueo"} className="nav-link">Guardar vehiculo oficial</Link>
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

