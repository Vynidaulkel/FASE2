import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

let entradaLunes = "07:30";
let salida = "07:30";
let dia = "";
let diaNumero = "";
let mes = "";
let EspaciosNormales = 0;
let CantVisitantes = 0;
let CantVehiculos = 0;
let CantReservados = 0;
let CantDiscapacitados = 0;
let prueba = []

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

    onFechaChange = async (e) => { 
        let current = new Date(e.target.value);
        current.setDate(current.getDate() + 1);
        diaNumero = current.toLocaleDateString('es-ES', { day: '2-digit' });
        dia = current.toLocaleDateString('es-ES', { weekday: 'long' });
        mes = current.toLocaleDateString('es-ES', { month: '2-digit' });

        let reserva = await axios.get('http://localhost:4000/api/reservas');

        for (var j = 0; j < this.state.parqueo.length; j++) {
            let sumaTotal = 0
            EspaciosNormales = 0
            CantVehiculos = 0
            CantVisitantes = 0
            CantDiscapacitados = 0
            CantReservados = 0
            sumaTotal = 0

            for (var i = 0; i < reserva.data.length; i++) {
                if (reserva.data[i].Tipo === "Normal" && reserva.data[i].IdParqueo === this.state.parqueo[j]._id) {
                    if (reserva.data[i].fecha === diaNumero && reserva.data[i].dia === dia && reserva.data[i].mes === mes) {
                        EspaciosNormales = EspaciosNormales + 1
                    }
                }
                else if (reserva.data[i].Tipo === "vehiculoVisitante" && reserva.data[i].fecha === this.state.parqueo[j]._id) {
                    CantVisitantes = CantVisitantes + 1
                }
                else if (reserva.data[i].Tipo === "vehiculoOficial" && reserva.data[i].IdParqueo === this.state.parqueo[j]._id) {
                    CantVehiculos = CantVehiculos + 1
                }
                else if (reserva.data[i].Tipo === "Discapacitado" && reserva.data[i].IdParqueo === this.state.parqueo[j]._id) {
                    CantDiscapacitados = CantDiscapacitados + 1
                }
                else if (reserva.data[i].Tipo === "Reservado" && reserva.data[i].IdParqueo === this.state.parqueo[j]._id) {
                    CantReservados = CantReservados + 1
                }

                console.log(this.state.parqueo[j].Cantidad, "Usados", EspaciosNormales)

            }

            this.state.parqueo[j].tipo = this.state.parqueo[j].Cantidad - this.state.parqueo[j].Discapacitados - this.state.parqueo[j].Reservados - this.state.parqueo[j].Visitantes - this.state.parqueo[j].Vehiculos
            sumaTotal = EspaciosNormales + CantVehiculos + CantVisitantes + CantDiscapacitados + CantReservados
         
            salida = sumaTotal

            
            this.state.parqueo[j].Espacios[1][7] =  (sumaTotal / this.state.parqueo[j].Cantidad)*100

            
            this.state.parqueo[j].Espacios[1][6] =  ((CantDiscapacitados / this.state.parqueo[j].Discapacitados)*100)
            this.state.parqueo[j].Espacios[1][8] =  ((CantVisitantes / this.state.parqueo[j].Visitantes)*100)
            this.state.parqueo[j].Espacios[1][9] =  ((CantReservados / this.state.parqueo[j].Reservados)*100)
            this.state.parqueo[j].Espacios[1][4] =  ((CantVehiculos / this.state.parqueo[j].Vehiculos)*100)
            this.state.parqueo[j].Espacios[1][5] =  ((EspaciosNormales / this.state.parqueo[j].tipo)*100)


            this.state.parqueo[j].Espacios[0][8] = CantVisitantes

            this.state.parqueo[j].Espacios[0][0] = CantVehiculos
            this.state.parqueo[j].Espacios[0][5] = sumaTotal
            this.state.parqueo[j].Espacios[0][6] = CantDiscapacitados
            this.state.parqueo[j].Espacios[0][7] = CantReservados
            this.state.parqueo[j].Espacios[0][8] = CantVisitantes
            this.state.parqueo[j].Espacios[0][9] = EspaciosNormales 

            this.state.parqueo[j].Espacios[0][4] = "Espacios Normales: " + this.state.parqueo[j].tipo

        }
        prueba = this.state.parqueo
        this.setState({
            parqueo: prueba
        })

        this.render()
    }


    refrescar = async (e) => { 
        window.location.reload()
    }

    
    render() {
        console.log(this.state.parqueo)
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body">
                        <h3>Fecha para estadisticas</h3>


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
                        <button type="submit" onClick={this.refrescar} className="btn btn-success btn-block">
                            Refrescar Estadisticas
                        </button>

                    </div>
                </div>
                <div className="col-md-12">
                    <ul className="list-group">

                        {

                            this.state.parqueo.map(users => (
                                <div className="col-md-16" key={users._id}>
                                    <div className="card">


                                        <div className="card-header d-flex justify-content-between">
                                            <h5>{users.title}</h5>
                                            
                                        </div>

                                        <div className="card-body">



                                            <p>
                                                {users.content}
                                            </p>
                                            <p>
                                                Campus: {users.campus} | Lugar: {users.Lugar}
                                            </p>
                                            <p>
                                                Espacios: Total: {users.Cantidad} | Discapacitados: {users.Discapacitados} | Reservados: {users.Reservados} | Visitantes: {users.Visitantes} | Vehiculos: {users.Vehiculos} | {users.Espacios[0][4]} 
                                            </p>

                                            <p>
                                                Usados : Total: {users.Espacios[0][5]} | Discapacitados:{users.Espacios[0][6]}  | Reservados: {users.Espacios[0][7]}  | Visitantes: {users.Espacios[0][8]}  | Vehiculos: {users.Espacios[0][0]} | Espacios Normales: {users.Espacios[0][9]}
                                            </p>

                                            <p>
                                                Porcentaje de uso total del parqueo: {users.Espacios[1][7]}% 
                                            </p>


                                            <p>
                                            Porcentaje de uso por tipo de parqueo: Discapacitados {users.Espacios[1][6]}%  |   Reservados {users.Espacios[1][9]}%  | Visitantes {users.Espacios[1][8]}% | Vehiculos {users.Espacios[1][4]}% | Espacios Normales: {users.Espacios[1][5]}% 
                                            </p>



                                        </div>
                                        <div className="card-footer">
                                             
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

