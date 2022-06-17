import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


let entradaLunes = "07:30";
let salidaLunes = "07:30";



export default class CreateUser extends Component {

    state = {

    }

    async componentDidMount() {
        console.log(this.props.match.params.id)

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

     

    onFechaChange(e) {
        console.log(e.target.value);


        let current = new Date(e.target.value);
        let today = current.toLocaleDateString('es-ES',{weekday: 'long'});
        console.log(today);
        
 
    }


    

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180vh' }}>

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
                                inputFormat = "'Week of' MMM d"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <button type="submit" className="btn btn-success btn-block">
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