import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Reservas extends Component {

    state = {

    }


    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/placas', {
            IdUser: this.props.match.params.id,
            NunPlaca: this.state.NunPlaca
        });
        this.setState({ NunPlaca: '' });
        this.getUsers();

    }


    render() {
        return (
            <div className="row">

                <div className="col-md-12">
                    <ul className="list-group">


                        <h1 style={{ textAlign: "center" }}>Sedes desponibles para reserva</h1>


                        <Link className="list-group-item" to={"/reservas/Cartago/" +this.props.match.params.id}>
                             Compus Tecnológico Central Cartago
                        </Link>

                        <Link className="list-group-item" to={"/reservas/San Jose/" +this.props.match.params.id}>
                            Compus Tecnológico Local San Jose
                        </Link>

                        <Link className="list-group-item" to={"/reservas/San Carlos/" +this.props.match.params.id}>
                            Compus Tecnológico Local San Carlos
                        </Link>

                        <Link className="list-group-item" to={"/reservas/Alajuela/" +this.props.match.params.id}>
                            Centro Académico De Alajuela
                        </Link>

                        <Link className="list-group-item" to={"/reservas/Limon/" +this.props.match.params.id}>
                            Centro Académico De Limon
                        </Link>

                    </ul>
                </div>
            </div>
        )
    }
}