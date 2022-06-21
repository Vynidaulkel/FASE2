import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import TextField from '@material-ui/core/TextField';


let parqueo= ""


export default class AsignarDatosAlParqueo extends Component {

    state = {
        idParqueo: [],
        campos: [],
        parqueos: [],
        dia: '',
        modelo: '',
        chofer: '',
        color: '',
        Placa: ''
    }
    async componentDidMount() {
        this.get();
    }

    get = async () => {


        const park = await axios.get('http://localhost:4000/api/parqueos/');
        const us = await axios.get('http://localhost:4000/api/users/' + this.props.match.params.id);
        const reserva =await axios.get('http://localhost:4000/api/reservas')

        this.setState({
            parqueos: park.data
        });

      
        let parqueosSede = []
        let HaySede = false
        for (var i = 0; i < this.state.parqueos.length; i++) {
            let cantidadReservas = 0

            for (var e = 0; e < reserva.data.length; e++) {
                if(reserva.data[e].IdParqueo === this.state.parqueos[i]._id && reserva.data[e].Tipo === "vehiculoOficial"){
                    cantidadReservas= cantidadReservas+1
                }
            }

            if (this.state.parqueos[i].Operador === us.data.username && this.state.parqueos[i].Vehiculos != cantidadReservas) {
                HaySede = true
                parqueosSede.push(this.state.parqueos[i]);
                parqueo = this.state.parqueos[i]
            }
        }
      


      

        if (!HaySede) {
            swal("No hay espacios disponibles")
            window.history.go(-1);
            return;
        }
        this.setState({
            parqueos: parqueosSede,
            
        });
        console.log(this.state.parqueos)

    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reserva = async (e) => {
         
        await axios.post('http://localhost:4000/api/reservas', {
            fecha: '',
            dia: this.state.dia,
            mes: this.state.modelo,
            IdParqueo: parqueo._id,
            IdUsuario: this.props.match.params.id,
            HoraEntrada: this.state.chofer,
            HoraSalida: this.state.color,
            Tipo: "vehiculoOficial",
            Placa: this.state.Placa,
        })
        swal('Vehiculo oficial ingresado exitosamente');
        window.history.go(-1);

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body">

                        <h3>Seleccione los datos del vehiculo oficial que va a ingresar</h3>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Placa"
                                onChange={this.onInputChange}
                                name="Placa"
                                autocomplete="off"
                                value={this.state.Placa}
                                required />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="modelo"
                                onChange={this.onInputChange}
                                name="modelo"
                                autocomplete="off"
                                value={this.state.mes}
                                required />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="color"
                                onChange={this.onInputChange}
                                name="color"
                                autocomplete="off"
                                value={this.state.HoraSalida}
                                required />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="chofer"
                                onChange={this.onInputChange}
                                name="chofer"
                                autocomplete="off"
                                value={this.state.HoraEntrada}
                                required />
                        </div>

                        <button type="submit" onClick={this.reserva} className="btn btn-success btn-block">
                            Ingresar Vehiculo
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}