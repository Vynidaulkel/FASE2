import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export default class CreateUser extends Component {

    state = {
        Docente: false,
        username: '',
        password: '',
        nombre: '',
        numero: '',
        correo: '',
        users: []
    }

    async componentDidMount() {
        console.log(this.props.match.params.id);
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }

    exit = async () => {
        window.location.href = '/menu/admin';
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:4000/api/users', {
            Docente: this.state.Docente,
            username: this.state.username,
            password: this.state.password,
            nombre: this.state.nombre,
            numero: this.state.numero,
            correo: this.state.correo
        });
        swal('Usuario creado con exito')
        this.getUsers();
        window.location.href = '/createUser';
    }

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUsers();
        }
    }

    handleCheckboxChild = async (userId) => {
        if (this.state.Docente === false) {
            this.state.Docente = true
        }
        else {
            this.state.Docente = false
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>

                        <div className="card card-body">
                            <h3>Create New User</h3>
                            <form onSubmit={this.onSubmit}>

                                <h3></h3>

                                <div>
                                    <style>

                                        color: orangered;

                                    </style>
                                    <input type="checkbox" onChange={this.handleCheckboxChild} />


                                    <label for="checkbox"><h6>Docente</h6></label>
                                </div>

                                <h3></h3>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        onChange={this.onInputChange}
                                        name="nombre"
                                        autocomplete="off"
                                        value={this.state.nombre}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Correo"
                                        onChange={this.onInputChange}
                                        name="correo"
                                        autocomplete="off"
                                        value={this.state.correo}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Numero"
                                        onChange={this.onInputChange}
                                        pattern="[0-9]+"
                                        name="numero"
                                        autocomplete="off"
                                        value={this.state.numero}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={this.onInputChange}
                                        name="username"
                                        autocomplete="off"
                                        value={this.state.username}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={this.onInputChange}
                                        name="password"
                                        autocomplete="off"
                                        value={this.state.password}
                                        required />
                                </div>

                                <button type="submit" className="btn btn-success btn-block">
                                    Save
                                </button>
                            </form>
                            <h4></h4>

                            <button className="btn btn-danger " onClick={this.exit} height={50}>
                                Regresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}