import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import Login from './components/Inicio'
import CreateUser from './components/CreateUser'
import './App.css';
import modificarUsuario from './components/ModificarUsuario'
import CrearParqueo from './components/CrearParqueo'

function App() {
  return (

    <Router>
      <div className="container p-4">
        <Route path="/" exact component={Login} />
        <Route path="/menu/:id" exact component={Navigation} />
        <Route path="/edit/:id" component={NotesList} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/modificarUsuario/:id" component={modificarUsuario} />
        <Route path="/modificarParqueo" component={CrearParqueo} />

      </div>
    </Router>
  );
}

export default App;
