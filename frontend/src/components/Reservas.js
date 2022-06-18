import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import swal from 'sweetalert'

let entradaLunes = "07:30";
let salidaLunes = "07:30";



export default class CreateUser extends Component {

    state = {
        parqueo: [],
        parqueosSede: [],
        reservados: 0,
        discapacitado: 0,
        visitante: 0,
        espacios: 0
    }

    async componentDidMount() {
        this.getParqueos();
    }

    getParqueos = async () => {
        const res = await axios.get('http://localhost:4000/api/parqueos');
        this.setState({
            parqueo: res.data
        });

        let HaySede = false

        for (var i = 0; i < this.state.parqueo.length; i++) {
            if (this.state.parqueo[i].campus === this.props.match.params.sede) {
                HaySede = true
                this.state.parqueosSede.push(this.state.parqueo[i]);

                for(var e = 0; e < this.state.parqueo[i].Espacios.length; e++){
                    if (this.state.parqueo[i].Espacios[e][4]) {
                        this.state.discapacitado = this.state.discapacitado+1
                      } else if (this.state.parqueo[i].Espacios[e][5]) {
                        this.state.reservados = this.state.reservados+1
                      }  else if (this.state.parqueo[i].Espacios[e][6]) {
                        this.state.visitante = this.state.visitante+1
                      }else {
                        this.state.espacios = this.state.espacios+1
                      }
                }
                console.log("!" + this.state.discapacitado);
                console.log("!" + this.state.reservados);
                console.log("!" + this.state.visitante);
                console.log("!" + this.state.espacios);
            }
        }

        if (HaySede) {
            console.log("Siiiii");
        }
        else {
            swal('No hay parqueos disponibles en esta sede')

            window.history.go(-1);
            console.log("NOOOOOO");
        }


    }



    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {

    }


    onTimeChange(e) {
        entradaLunes = e.target.value
    }

    exit(e) {
        window.history.go(-1);
    }



    onFechaChange(e) {
        console.log(e.target.value);
        let current = new Date(e.target.value);
        let today = current.toLocaleDateString('es-ES', { weekday: 'long' });
        console.log(today);
    }




    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <div className="card card-body">

                            <h6>Fecha de reserva</h6>

                            <TextField
                                id="time"
                                label="Hora"
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
                                id="date"
                                label="Fecha"
                                onChange={this.onFechaChange}
                                type="date"
                                inputFormat="'Week of' MMM d"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <button type="submit" onClick={this.reservar} className="btn btn-success btn-block">
                                Reservar
                            </button>

                            <h4></h4>

                            <button className="btn btn-danger " onClick={this.exit} height={50}>
                                Regresar
                            </button>
                        </div>
                    </div>
                </div>





            </div >
        )
    }
}