import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './menu.jpeg';




export default class Navigation extends Component {
    render() {
        
        return (
            <div className="container"> 
                
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                
                
                    <Link className="navbar-brand" to="/menu">
                        <i className="material-icons">
                        directions_car </i> Parqueo TEC
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/parqueos" className="nav-link">Parqueos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/modificarParqueo" className="nav-link">Modificar Parqueos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/modificarUsuario" className="nav-link">Modificar Usuario</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/funcionarios" className="nav-link">Funcionarios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Salir</Link>
                            </li>
                        </ul>
                    </div>
               
                    
            </nav>
              <img src={logo} />
            </div>
            
        )
    }
}

