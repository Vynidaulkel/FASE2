import React, { Component } from 'react'
import axios from 'axios'



export default class CrearParqueos extends Component {

    state = {
        tipo: 'Principal',
        campus: 'Cartago',
        ubicacion: '',
        acceso: '',
        hora_apertura: '',
        hora_cierre: '',
        Contact_Id_Jefatura: '',
        cantidadDeEspacios: '',
        CantidadDiscapacitados: '',
        espaciosReservados: '',
        EspaciosVisitantes: '',
        EspaciosVehiculos: '',
        editing: false,
        parqueo: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/parqueos');

        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/parqueos/' + this.props.match.params.id);

            this.setState({
                tipo: res.data.tipo,
                campus: res.data.campus,
                ubicacion: res.data.Lugar,

                acceso: res.data.Acceso,
                hora_apertura: res.data.HoraApertura,
                hora_cierre: res.data.HoraCierre,
                cantidadDeEspacios: res.data.Cantidad,
                CantidadDiscapacitados: res.data.Discapacitados,
                espaciosReservados: res.data.Reservados,
                EspaciosVisitantes: res.data.Visitantes,
                _id: res.data._id,
                editing: true
            });
        }
    }

    getParqueos = async () => {
        const res = await axios.get('http://localhost:4000/api/parqueos');
        this.setState({
            parqueo: res.data
        });
        console.log(this.state.parqueo);
    }

    exit = async () => {
        window.location.href = '/menu/admin';
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.getParqueos()
    }

    onSubmit = async (e) => {

        if (this.state.editing) {

            const updateNote = {

                g: this.state.tipo,
                lcampus: this.state.campus,
                ubicacion: this.state.ubicacion,
                acceso: this.state.acceso,
                hora_apertura: this.state.hora_apertura,
                hora_cierre: this.state.hora_cierre,
                cantidadDeEspacios: this.state.cantidadDeEspacios,
                CantidadDiscapacitados: this.state.CantidadDiscapacitados,
                espaciosReservados: this.state.espaciosReservados
                ,
                EspaciosVisitantes: this.state.EspaciosVisitantes,
                EspaciosVehiculos: this.state.EspaciosVehiculos

            };
            await axios.put('http://localhost:4000/api/parqueos/' + this.state._id, updateNote);
        }
        else {

            e.preventDefault();
            await axios.post('http://localhost:4000/api/parqueos', {
                g: this.state.tipo,
                lcampus: this.state.campus,
                ubicacion: this.state.ubicacion,
                acceso: this.state.acceso,
                hora_apertura: this.state.hora_apertura,
                hora_cierre: this.state.hora_cierre,
                Contact_Id_Jefatura: this.state.Contact_Id_Jefatura,
                cantidadDeEspacios: this.state.cantidadDeEspacios,
                CantidadDiscapacitados: this.state.CantidadDiscapacitados,
                espaciosReservados: this.state.espaciosReservados,
                EspaciosVisitantes: this.state.EspaciosVisitantes,
                EspaciosVehiculos: this.state.EspaciosVehiculos
            });

        }
        console.log(this.state.tipo);
        window.location.href = '/modificarParqueo';
        this.getParqueos()

    }

    actualizar = async (event) => {
        if (event.target.value === "Principal") {
            this.state.tipo = "Principal"
            console.log(this.state.tipo);
        }

        if (event.target.value === "Subcontratado") {
            this.state.tipo = "Subcontratado"
        }

        if (event.target.value === "Campus") {
            this.state.tipo = "Campus"
        }
    }


    actualizar2 = async (event) => {
        this.state.campus = event.target.value
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>

                        <div className="card card-body">
                            <h3>Crear Parqueo</h3>
                            <form onSubmit={this.onSubmit}>

                                <select id="lang" onChange={this.actualizar} >
                                    <option value="Principal">Principal</option>
                                    <option value="Subcontratado">Subcontratado</option>
                                    <option value="Campus">Campus</option>
                                </select>

                                <select id="lang" onChange={this.actualizar2}>
                                    <option value="Cartago">Cartago</option>
                                    <option value="San Carlos">San Carlos</option>
                                    <option value="San Jose">San Jose</option>
                                    <option value="Alajuela">Alajuela</option>
                                    <option value="Limon">Limon</option>
                                </select>

                                <p></p>
                                <p>{this.state.value}</p>


                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ubicacion"
                                        onChange={this.onInputChange}
                                        name="ubicacion"
                                        autocomplete="off"
                                        value={this.state.ubicacion}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="acceso"
                                        onChange={this.onInputChange}
                                        name="acceso"
                                        autocomplete="off"
                                        value={this.state.acceso}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hora apertura"
                                        onChange={this.onInputChange}
                                        name="hora_apertura"
                                        autocomplete="off"
                                        value={this.state.hora_apertura}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hora cierre"
                                        onChange={this.onInputChange}
                                        name="hora_cierre"
                                        autocomplete="off"
                                        value={this.state.hora_cierre}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Contacto / Id / Jefatura"
                                        onChange={this.onInputChange}
                                        name="Contact_Id_Jefatura"
                                        autocomplete="off"
                                        value={this.state.Contact_Id_Jefatura}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cantidad De Espacios"
                                        onChange={this.onInputChange}
                                        name="cantidadDeEspacios"
                                        pattern="[0-9]+"
                                        autocomplete="off"
                                        value={this.state.cantidadDeEspacios}
                                        required />
                                </div>


                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cantidad Discapacitados"
                                        onChange={this.onInputChange}
                                        name="CantidadDiscapacitados"
                                        pattern="[0-9]+"
                                        autocomplete="off"
                                        value={this.state.CantidadDiscapacitados}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Espacios Reservados"
                                        onChange={this.onInputChange}
                                        name="espaciosReservados"
                                        pattern="[0-9]+"
                                        autocomplete="off"
                                        value={this.state.espaciosReservados}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Espacios Visitantes"
                                        onChange={this.onInputChange}
                                        name="EspaciosVisitantes"
                                        pattern="[0-9]+"
                                        autocomplete="off"
                                        value={this.state.EspaciosVisitantes}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Espacios Vehiculos"
                                        onChange={this.onInputChange}
                                        name="EspaciosVehiculos"
                                        pattern="[0-9]+"
                                        autocomplete="off"
                                        value={this.state.EspaciosVehiculos}
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