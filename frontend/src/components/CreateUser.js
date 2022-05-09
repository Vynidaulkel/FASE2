import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export default class CreateUser extends Component {

    state = {
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

        window.location.href = '/';
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username,    
            password: this.state.password,
            nombre: this.state.nombre,
            numero: this.state.numero,
            correo: this.state.correo
        });
        const response = window.confirm('Usuario creado con exito');
      
        window.location.href = '/';

        this.getUsers();
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
                <div className="col-md-4 offset-md-4">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>

                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>

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
                        
                        <button className="btn btn-danger " onClick={this.exit} height = {50}>
                            Regresar
                        </button>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}