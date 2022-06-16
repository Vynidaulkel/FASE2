import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



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

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/parqueos/' + userId);
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
                                            <Link to={"/editParqueo/" + users._id} className="btn btn-secondary">
                                                <i className="material-icons">
                                                    border_color</i>
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                {users.content}
                                            </p>
                                            <p>
                                                Tipo: {users.tipo} | Lugar: {users.Lugar}
                                            </p>
                                            <p>
                                                Cantidad: {users.Cantidad} => Discapacitados: {users.Discapacitados} | Reservados: {users.Reservados} | Visitantes: {users.Visitantes}
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

