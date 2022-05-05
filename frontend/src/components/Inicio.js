import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class Inicio extends Component {

    state = {
        title: '',
        contraseña: '',
    
    }

    

    onSubmit = async (e) => {
        e.preventDefault();
        window.location.href = '/menu';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  
    render() {
        return (
            <div className="col-md-4 offset-md-4">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <div className="card card-body">
                    <h4>Login</h4>
                    <form onSubmit={this.onSubmit}>
                       
                       
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="User"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password"
                                autocomplete="off"
                                name="contraseña"
                                onChange={this.onInputChange}
                                value={this.state.contraseña}
                                required />
                        </div>
                        
                        <button className="btn btn-primary">
                            Login 
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}