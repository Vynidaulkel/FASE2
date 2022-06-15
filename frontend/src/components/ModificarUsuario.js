import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'

export default class ConsultarUsuario extends Component {

    state = {
        IdUser: this.props.match.params.id,
        identificacion: '',
        editing: false,
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }

    onChangeUsername = e => {
        this.setState({
            identificacion: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        let list = []

        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });

        if (this.state.identificacion === "") {
            return
        }
        for (var i = 0; i < this.state.users.length; i++) {
            console.log(this.state.users[i]);

            if (this.state.users[i].identificacion === this.state.identificacion) {
                list.push(this.state.users[i])
            }
        }
        this.state.users = list
        this.setState({

        })

    }

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUsers();
        }
    }

    render() {
        return (

            <div className="row">

                <div>
                    <h1 style={{ textAlign: "center" }}>Modificar Usuarios</h1>


                    <div className="col-md-12 ">


                        <div className="card card-body">
                            <h3>Buscar Usuario</h3>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        value={this.state.identificacion}
                                        type="text"
                                        onChange={this.onChangeUsername}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Consultar
                                </button>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-12">
                        <ul className="list-group">
                            {
                                this.state.users.map(users => (
                                    <div className="col-md-16" key={users._id}>
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between">
                                                <h5>{users.title}</h5>
                                                <Link to={"/edit/" + users._id} className="btn btn-secondary">
                                                    <i className="material-icons">
                                                        border_color</i>
                                                </Link>
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    {users.content}
                                                </p>
                                                <p>
                                                    Nombre: {users.nombre} 
                                                </p>
                                                
                                                <p>
                                                    Correo: {users.correo} | Identificacion: {users.identificacion}
                                                </p>
                                                
                                                <p>
                                                    Username: {users.username} | Contraseña: {users.password}
                                                </p>
                                                <p>
                                                ------------------Horario------------------
                                                </p>
                                                <p>
                                                    Lunes._______|{users.entradaLunes} -> {users.salidaLunes}|
                                                </p>

                                                <p>
                                                    Martes.______|{users.entradaMartes} -> {users.salidaMartes}|
                                                </p>

                                                <p>
                                                    Miercoles.___|{users.entradaMiercoles} -> {users.salidaMiercoles}|
                                                </p>

                                                <p>
                                                    Jueves.______|{users.entradaJueves} -> {users.salidaJueves}|
                                                </p>

                                                <p>
                                                    Viernes._____|{users.entradaViernes} -> {users.salidaViernes}|
                                                </p>

                                                <p>
                                                    Sabado._____|{users.entradaSabado} -> {users.salidaSabado}|
                                                </p>

                                                <p>
                                                    Domingo.___|{users.entradaDomingo} -> {users.salidaDomingo}|
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

            </div>
        )
    }
}