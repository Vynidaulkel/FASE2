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

export default class VerPerfil extends Component {

    state = {

        Tipo: '',
        Discapacitado: false,
        username: '',
        password: '',
        nombre: '',
        numero: '',
        correo: '',
        correoAlterno: '',
        departamento: '',
        identificacion: '',
        editing: false,
        placas: [],
        users: []
    
    }

    //Carga de datos
    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/users/' + this.props.match.params.id);

            this.setState({
                Tipo: res.data.Tipo,
                Discapacitado : this.state.Discapacitado, 
                username: res.data.username,
                password: res.data.password,
                nombre: res.data.nombre,
                correo: res.data.correo,                
                correoAlterno: res.data.correoAlterno,
                departamento: res.data.departamento,
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
        window.location.href = '/menu/'+ this.props.match.params.id;
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        if (this.state.editing) {

            const updatedUser= {
                Tipo: this.state.Tipo,
                Discapacitado : this.state.Discapacitado,
                username: this.state.username,
                password: this.state.password,
                nombre: this.state.nombre,
                numero: this.state.numero,
                correo: this.state.correo,
                correoAlterno: this.state.correoAlterno,
                departamento: this.state.departamento,
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
            await axios.put('http://localhost:4000/api/users/' + this.state._id, updatedUser);
        }
        window.location.href = '/menu/' + this.props.match.params.id;
    }

    handleCheckboxChild2 = async (userId) => {
        if (this.state.Discapacitado === false) {
            this.state.Discapacitado = true
        }
        else {
            this.state.Discapacitado = false
        }
    }

    render() {

        let tipoInput = <option value= {this.state.Tipo} disabled>{this.state.Tipo}</option>                 

        let discapacitadoInput = <input disabled checked="false" type="checkbox"/>;
        if (this.state.Discapacitado) {
            discapacitadoInput = <input disabled checked="true" type="checkbox"/>;
        }
        
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180vh' }}>

                        <div className="card card-body">
                            <h3>Crear Nuevo Usuario</h3>
                            <form onSubmit={this.onSubmit}>

                                <h3></h3>


                                <div>

            	                { tipoInput }

                                </div>

                                <div> 
                                    { discapacitadoInput }
                                    <label for="checkbox"><h6>Discapacitado</h6></label>
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
                                        placeholder="Correo Alterno"
                                        onChange={this.onInputChange}
                                        name="correoAlterno"
                                        autocomplete="off"
                                        value={this.state.correoAlterno}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Departamento"
                                        onChange={this.onInputChange}
                                        name="departamento"
                                        autocomplete="off"
                                        value={this.state.departamento}
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
                                    disabled
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.entradaLunes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.salidaLunes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />

                                <h6>Martes</h6>
                                <TextField
                                    disabled
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.entradaMartes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.salidaMartes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Miercoles</h6>
                                <TextField
                                    disabled
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.entradaMiercoles}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.salidaMiercoles}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Jueves</h6>
                                <TextField
                                    disabled
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.entradaJueves}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    className="form-group"
                                    fullWidth={true}
                                    value={this.state.salidaJueves}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Viernes</h6>
                                <TextField
                                    disabled
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.entradaViernes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.salidaViernes}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Sabado</h6>
                                <TextField
                                    disabled
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    className="form-group"
                                    fullWidth={true}
                                    value={this.state.entradaSabado}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.salidaSabado}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <h6>Domingo</h6>
                                <TextField
                                    disabled
                                    id="time"
                                    label="Entrada"
                                    type="time"
                                    fullWidth={true}
                                    className="form-group"
                                    value={this.state.entradaDomingo}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, min: 0, style: { textAlign: 'center' },// 5 min
                                    }}
                                />
                                <TextField
                                    disabled
                                    id="time"
                                    label="Salida"
                                    type="time"
                                    className="form-group"
                                    value={this.state.salidaDomingo}
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