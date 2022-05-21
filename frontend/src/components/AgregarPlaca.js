import React, { Component } from 'react'
import axios from 'axios'

export default class AgregarPlaca extends Component {

    state = {
        IdUser: this.props.match.params.id,
        NunPlaca: '',
        placas: [] 
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        let list = []
        let placa = []
        const res = await axios.get('http://localhost:4000/api/placas/');
        this.setState({
            placa: res.data
        });
        
        for (var i = 0; i < this.state.placa.length; i++) {
            console.log(this.props.match.params.id);
            if (this.state.placa[i].IdUser === this.props.match.params.id) {
                list.push(this.state.placa[i])
            }
        }
        this.state.placas = list
            this.setState({
                
            })
    }

    onChangeUsername = e => {
        this.setState({
            NunPlaca: e.target.value
        })
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

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/placas/' + userId);
            this.getUsers();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Agregar Placa</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.NunPlaca}
                                    type="text"
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.placas.map(placas => (
                                <li className="list-group-item list-group-item-action" key={placas.NunPlaca} onDoubleClick={() => this.deleteUser(placas._id)}>
                                    {placas.NunPlaca}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}