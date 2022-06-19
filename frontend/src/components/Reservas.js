import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import swal from 'sweetalert'

let entradaLunes = "07:30";
let dia = "";
let diaNumero = "";
let mes = "";



export default class CreateUser extends Component {

    state = {
        parqueo: [],
        campos: [],
        parqueosSede: [],
        reservados: 0,
        discapacitado: 0,
        visitante: 0,
        vehiculos: 0,
        ocupados: 0,
        usuario: [],
        espacios: 0
    }

    async componentDidMount() {
        this.getParqueos();
    }

    getParqueos = async () => {
        const res = await axios.get('http://localhost:4000/api/parqueos');
        const user = await axios.get('http://localhost:4000/api/users/' + this.props.match.params.id);
        const campos = await axios.get('http://localhost:4000/api/campos');

        this.setState({
            parqueo: res.data,
            usuario: user.data,
            campos: campos.data
        });

        let HaySede = false

        for (var i = 0; i < this.state.parqueo.length; i++) {
            if (this.state.parqueo[i].campus === this.props.match.params.sede) {
                HaySede = true
                this.state.parqueosSede.push(this.state.parqueo[i]);
            }
        }
        if (!HaySede) {
            swal('No hay parqueos disponibles en esta sede')
            window.history.go(-1);
        }
    }

    reservar = async (e) => {

        console.log(dia, diaNumero, mes);

        let haydia = false;
        for (var i = 0; i < this.state.parqueosSede.length; i++) {
            console.log(this.state.parqueosSede[i]);

            for (var e = 0; e < this.state.campos.length; e++) {

                console.log(this.state.campos[e]);
                console.log(this.state.campos[e].dia, dia, this.state.campos[e].dia === dia);
                console.log(this.state.campos[e].fecha, diaNumero, this.state.campos[e].fecha === diaNumero);
                console.log(this.state.campos[e].mes, mes, this.state.campos[e].mes === mes);
                if (this.state.campos[e].dia === dia && this.state.campos[e].fecha === diaNumero && this.state.campos[e].mes === mes &&
                    this.state.campos[e].IdParqueo  === this.state.parqueosSede[i]._id) {
                    haydia = true
                    if (this.state.campos[e].espaciosTotales === "0"){
                        swal('No hay espacios disponibles en ese dia')
                        return
                    }
                    else{
                         
                        const updateCampo = {

                            fecha: diaNumero,
                            dia: dia,
                            mes: mes,
                            IdParqueo: this.state.parqueosSede[i]._id,
                            espaciosTotales: parseInt(this.state.campos[e].espaciosTotales)-1,
                            carros: this.state.parqueosSede[i].Vehiculos,
                            discapacitados:this.state.parqueosSede[i].Discapacitados, 
                            reservados: this.state.parqueosSede[i].Reservados,
                            visitante: this.state.parqueosSede[i].Visitantes

                        };
                        await axios.put('http://localhost:4000/api/campos/' + this.state.campos[e]._id, updateCampo);
                        swal('Espacio reservado')
                        window.history.go(-1);
                    }
                }
            }
            if (haydia === false) {
                console.log(haydia, "dhashdbsahjdbg");

                let total =  parseInt(this.state.parqueosSede[i].Cantidad)  - parseInt(this.state.parqueosSede[i].Vehiculos)  
                - parseInt(this.state.parqueosSede[i].Discapacitados) - parseInt(this.state.parqueosSede[i].Reservados)- 
                parseInt(this.state.parqueosSede[i].Visitantes) -1
              

                await axios.post('http://localhost:4000/api/campos', {

                    fecha: diaNumero,
                    dia: dia,
                    mes: mes,
                    IdParqueo: this.state.parqueosSede[i]._id,  
                    espaciosTotales: total ,
                    carros: this.state.parqueosSede[i].Vehiculos,
                    discapacitados: this.state.parqueosSede[i].Discapacitados,
                    reservados: this.state.parqueosSede[i].Reservados,
                    visitante: this.state.parqueosSede[i].Visitantes

                })
                swal('Espacio reservado')        
                window.history.go(-1);
                
            }
        }
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onTimeChange(e) {
        entradaLunes = e.target.value
    }

    exit(e) {
        window.history.go(-1);
    }

    onFechaChange(e) {
        let current = new Date(e.target.value);
        current.setDate(current.getDate() + 1);
        diaNumero = current.toLocaleDateString('es-ES', { day: '2-digit' });
        dia = current.toLocaleDateString('es-ES', { weekday: 'long' });
        mes = current.toLocaleDateString('es-ES', { month: '2-digit' });
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