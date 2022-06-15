import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import TextField from '@material-ui/core/TextField';


let entradaLunes = "07:30";
let entradaMartes = "07:30";
let entradaMiercoles = "07:30";
let entradaJueves = "07:30";
let entradaViernes = "07:30";
let entradaSabado = "07:30";
let entradaDomingo = "07:30";

let salidaLunes = "20:00";
let salidaMartes = "20:00";
let salidaMiercoles = "20:00";
let salidaJueves = "20:00";
let salidaViernes = "20:00";
let salidaSabado = "20:00";
let salidaDomingo = "20:00";


export default class CreateUser extends Component {

    state = {
        Docente: false,
        username: '',
        password: '',
        nombre: '',
        numero: '',
        correo: '',
        identificacion: '',
        editing: false,
        placas: [],
        users: []
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:4000/api/users');
        if (res.data.length > 0) {
            this.setState({
                users: res.data.map(user => user.username),
                userSelected: res.data[0].username
            })
        }





        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/users/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                username: res.data.username,
                password: res.data.password,
                nombre: res.data.nombre,
                correo: res.data.correo,
                identificacion: res.data.identificacion,
                numero: res.data.numero,

                entradaLunes: res.data.entradaLunes,
                entradaMartes: res.data.entradaMartes,
                entradaMiercoles: res.data.entradaMiercoles,
                entradaJueves: res.data.entradaJueves,
                entradaViernes: res.data.entradaViernes,
                entradaSabado: res.data.entradaSabado,
                entradaDomingo: res.data.entradaDomingo,

                salidaLunes: res.data.salidaLunes,
                salidaMartes: res.data.salidaMartes,
                salidaMiercoles: res.data.salidaMiercoles,
                salidaJueves: res.data.salidaJueves,
                salidaViernes: res.data.salidaViernes,
                salidaSabado: res.data.salidaSabado,
                salidaDomingo: res.data.salidaDomingo,


                _id: res.data._id,



                editing: true
            });
        }
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

        if (this.state.editing) {

            const updatedNote = {
                Docente: this.state.Docente,
                username: this.state.username,
                password: this.state.password,
                nombre: this.state.nombre,
                numero: this.state.numero,
                correo: this.state.correo,
                identificacion: this.state.identificacion,

                entradaLunes: entradaLunes,
                salidaLunes: salidaLunes,

                entradaMartes: entradaMartes,
                salidaMartes: salidaMartes,

                entradaMiercoles: entradaMiercoles,
                salidaMiercoles: salidaMiercoles,

                entradaJueves: entradaJueves,
                salidaJueves: salidaJueves,

                entradaViernes: entradaViernes,
                salidaViernes: salidaViernes,

                entradaSabado: entradaSabado,
                salidaSabado: salidaSabado,

                entradaDomingo: entradaDomingo,
                salidaDomingo: salidaDomingo

            };
            await axios.put('http://localhost:4000/api/users/' + this.state._id, updatedNote);
        }
        else {
            await axios.post('http://localhost:4000/api/users', {
                Docente: this.state.Docente,
                username: this.state.username,
                password: this.state.password,
                nombre: this.state.nombre,
                numero: this.state.numero,
                correo: this.state.correo,
                identificacion: this.state.identificacion,

                entradaLunes: entradaLunes,
                salidaLunes: salidaLunes,

                entradaMartes: entradaMartes,
                salidaMartes: salidaMartes,

                entradaMiercoles: entradaMiercoles,
                salidaMiercoles: salidaMiercoles,

                entradaJueves: entradaJueves,
                salidaJueves: salidaJueves,

                entradaViernes: entradaViernes,
                salidaViernes: salidaViernes,

                entradaSabado: entradaSabado,
                salidaSabado: salidaSabado,

                entradaDomingo: entradaDomingo,
                salidaDomingo: salidaDomingo
            });
            swal('Usuario creado con exito')
            this.getUsers();
        }
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

    onTimeChange(e) {
        entradaLunes = e.target.value
    }

    onTimeChange1(e) {
        salidaLunes = e.target.value
    }

    onTimeChange2(e) {
        entradaMartes = e.target.value
    }

    onTimeChange3(e) {
        salidaMartes = e.target.value
    }

    onTimeChange4(e) {
        entradaMiercoles = e.target.value
    }

    onTimeChange5(e) {
        salidaMiercoles = e.target.value
    }

    onTimeChange6(e) {
        entradaJueves = e.target.value
    }

    onTimeChange7(e) {
        salidaJueves = e.target.value
    }

    onTimeChange8(e) {
        entradaViernes = e.target.value
    }

    onTimeChange9(e) {
        salidaJueves = e.target.value
    }

    onTimeChange10(e) {
        entradaSabado = e.target.value
    }

    onTimeChange11(e) {
        salidaSabado = e.target.value
    }

    onTimeChange12(e) {
        entradaDomingo = e.target.value
    }

    onTimeChange13(e) {
        salidaDomingo = e.target.value
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160vh' }}>

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

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Identificacion"
                                        onChange={this.onInputChange}
                                        name="identificacion"
                                        autocomplete="off"
                                        value={this.state.identificacion}
                                        required />
                                </div>


                                <h3>Horarios Funcionarios</h3>



                                <h6>Lunes</h6>

                                <TextField
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange}
                                    className="form-group"
                                    defaultValue={entradaLunes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange1}
                                    className="form-group"
                                    defaultValue={salidaLunes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />

                                <h6>Martes</h6>
                                <TextField
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange2}
                                    className="form-group"
                                    defaultValue={entradaMartes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange3}
                                    className="form-group"
                                    defaultValue={salidaMartes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Miercoles</h6>
                                <TextField
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange4}
                                    className="form-group"
                                    defaultValue={entradaMiercoles}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange5}
                                    className="form-group"
                                    defaultValue={salidaMiercoles}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Jueves</h6>
                                <TextField
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange6}
                                    className="form-group"
                                    defaultValue={entradaJueves}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    onChange={this.onTimeChange7}
                                    className="form-group"
                                    fullWidth={true}
                                    defaultValue={salidaJueves}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Viernes</h6>
                                <TextField
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    onChange={this.onTimeChange8}
                                    fullWidth={true}
                                    className="form-group"
                                    defaultValue={entradaViernes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    onChange={this.onTimeChange9}
                                    fullWidth={true}
                                    className="form-group"
                                    defaultValue={salidaViernes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Sabado</h6>
                                <TextField
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    onChange={this.onTimeChange10}
                                    className="form-group"
                                    fullWidth={true}
                                    defaultValue={entradaSabado}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    onChange={this.onTimeChange11}
                                    className="form-group"
                                    defaultValue={salidaSabado}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Domingo</h6>
                                <TextField
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    onChange={this.onTimeChange12}
                                    fullWidth={true}
                                    className="form-group"
                                    defaultValue={entradaDomingo}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField

                                    id="time"
                                    label="Salida"
                                    type="time"
                                    onChange={this.onTimeChange13}
                                    className="form-group"
                                    defaultValue={salidaDomingo}
                                    fullWidth={true}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}

                                />

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