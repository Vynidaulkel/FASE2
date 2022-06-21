import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert'

export default class AsignarEspacioVis extends Component {

    state = {
        Nombre: '',
        id: '',
        placa: '',
        motivo:'',
        sitioTec: '',
        responsable: ' ',
        dia:'',
        destino:'Cartago',
        campos : [],
        editing: false,
        parqueos: []
    }

    async componentDidMount() {
        this.getdata();
    }
    getdata  = async () => {
        let op = [];
        const res = await axios.get('http://localhost:4000/api/parqueos');
    }

    
    onFechaChange = async (event) => {
        this.state.dia = event.target.value
    }
    onChange = async (event) =>{
        this.state.destino = event.target.value
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reservar = async (e) => {
        const parks = await axios.get('http://localhost:4000/api/parqueos');
        const camps = await axios.get('http://localhost:4000/api/campos/');


        this.setState({
            campos: camps.data, 
            parqueos: parks.data
        });
        console.log(this.props.match.params.id);
        for (var i = 0; i < this.state.parqueos.length; i++){
            if (this.state.destino === this.state.parqueos[i].campus){

                const a = await axios.get('http://localhost:4000/api/reservas');
                let total =0
                
                for(var j = 0; j < a.data.length; j++){
                    console.log(a.data[j].fecha ,total, this.state.parqueos[i]._id);
                    if(a.data[j].fecha === this.state.parqueos[i]._id && a.data[j].Tipo === "vehiculoVisitante"){
                        total= total+1
                    }
                }

                if (parseInt(this.state.parqueos[i].Visitantes) != total){
                    await axios.post('http://localhost:4000/api/reservas', {
                    fecha: this.state.parqueos[i]._id,
                    dia: this.state.dia,
                    mes: this.state.modelo,
                    IdParqueo: this.state.id,
                    IdUsuario: this.props.match.params.id,
                    HoraEntrada: this.state.Nombre,
                    HoraSalida: this.state.motivo,
                    Tipo: "vehiculoVisitante",
                    Placa: this.state.placa,
                })
                swal('Visitante ingresado exitosamente');
                window.history.go(-1);
                return;
                }
            }
        }
        swal('No hay espacios disponibles');
        
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>

                        <div className="card card-body">
                            <h3>Asignar Visitante</h3>
                            

                            <select id="lang" onChange = {this.setDestino}>
                                <option value="Cartago">Campus Central Cartago</option>
                                <option value="San Jose">Campus Tecnologico San Jose</option>
                                <option value="San Carlos">Campus Tecnologico San Carlos</option>
                                <option value="Alajuela">Centro acedemico Alajuela</option>
                                <option value="Limon">Centro acedemico Limon</option>
                            </select>


                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    onChange={this.onInputChange}
                                    name="Nombre"
                                    autocomplete="off"
                                    value={this.state.Nombre}
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="id"
                                    onChange={this.onInputChange}
                                    name="id"
                                    autocomplete="off"
                                    value={this.state.id}
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="placa"
                                    onChange={this.onInputChange}
                                    name="placa"
                                    autocomplete="off"
                                    value={this.state.placa}
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="motivo"
                                    onChange={this.onInputChange}
                                    name="motivo"
                                    autocomplete="off"
                                    value={this.state.motivo}
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="sitioTec"
                                    onChange={this.onInputChange}
                                    name="sitioTec"
                                    autocomplete="off"
                                    value={this.state.sitioTec}
                                    required />
                            </div>

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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}