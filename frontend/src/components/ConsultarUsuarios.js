import React, { Component } from 'react'
import axios from 'axios'

export default class ConsultarUsuario extends Component {

    state = {
        IdUser: this.props.match.params.id,
        identificacion: '',
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
        
        if ( this.state.identificacion === "" ){
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
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Conusultar Usuario</h3>
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
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(users => (
                                <li className="list-group-item list-group-item-action" key={users.identificacion} onDoubleClick={() => this.deleteUser(users._id)}>
                                    {"Nombre: " + users.nombre  + "  /  "+"Identificacion: "+ users.identificacion  + "  /  "+"Numero: "+ users.numero + "  /  "+"Correo: "+ users.correo + "  /  "+"Docente: "+ users.Docente + "  /  "+"Usuario: "+ users.username}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}