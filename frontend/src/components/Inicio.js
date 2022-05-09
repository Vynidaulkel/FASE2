import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import swal from 'sweetalert'
import axios from 'axios'


export default class Inicio extends Component {

    state = {
        usuario: '',
        contraseña: '',
        users: []
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });


        console.log(res.data);
    }



    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });

        let list = []

        this.state.users.map((item) =>
            <div>{list.push([item.username, item.password, item._id])}
            </div>)

        console.log(list[0])
        let prueba = [[this.state.usuario, this.state.contraseña]]
        console.log(prueba)

        for (var i = 0; i < list.length; i++) {
            if (list[i][0] === this.state.usuario && list[i][1] === this.state.contraseña) {
                window.location.href = '/menu/' + list[i][2];
                return
            }
        }
        if ('admin' === this.state.usuario && 'admin' === this.state.contraseña) {
            window.location.href = '/menu/' + 'admin';
        }
        else {
            swal('Usuario o contraseña incorrectos')
        }

    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (

            <div className="col-md-4 offset-md-4">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <div className="card card-body">
                        <h3>Login</h3>
                        <form onSubmit={this.onSubmit}>

                            {/* Note Title */}
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="User"
                                    onChange={this.onInputChange}
                                    name="usuario"
                                    autocomplete="off"
                                    value={this.state.usuario}
                                    required />
                            </div>
                            {/* Note Content */}
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    autocomplete="off"
                                    name="contraseña"
                                    onChange={this.onInputChange}
                                    value={this.state.contraseña}
                                    required />
                            </div>

                            <button className="btn btn-primary btn-block">
                                Login
                            </button>

                        </form>


                    </div>
                </div>

            </div>
        )
    }
}