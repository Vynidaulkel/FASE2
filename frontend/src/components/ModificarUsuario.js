import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'


export default class ModificarUsuario extends Component {

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

        window.location.href = '/menu';
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });

        this.state.correo = { id: "6275d3f0361a7945cc72aed8" }
        console.log(this.state.correo);
        const a = await axios.get('http://localhost:4000/api/users' + this.correo);
        console.log(a.data);
    }



    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>

                        <div className="card card-body">
                            <h3>Modify User</h3>
                            <form onSubmit={this.onSubmit}>



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