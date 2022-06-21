import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import TextField from '@material-ui/core/TextField';





export default class LiberarVisitante extends Component {
    
    state = {
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

        this.setState({
            parqueos: park.data
        });

        console.log(this.state.parqueos)
        let parqueosSede = []
        let HaySede = false
        for (var i = 0; i < this.state.parqueos.length; i++) {
            
            if (this.state.parqueos[i].Operador=== us.data.username) {
                HaySede = true
                parqueosSede.push(this.state.parqueos[i].Lugar);
            }
        }
        
        if (!HaySede) {
            swal('No hay parqueos disponibles en esta sede')
            
        }
        this.setState({
            parqueos: parqueosSede
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
            IdParqueo: this.state.parqueos[0]._id,
            IdUsuario: this.props.match.params.id,
            HoraEntrada: this.state.chofer,
            HoraSalida: this.state.color,
            Tipo: "vehiculoOficial",
            Placa: this.state.Placa,
        })
        swal('Vehiculo oficial ingresado exitosamente');
        
        
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body">
                        
                            <h3>Seleccione el vehiculo a retirar</h3>

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