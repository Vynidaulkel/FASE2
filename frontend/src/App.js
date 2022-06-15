import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Navigation from './components/Navigation'
import AgregarPlaca from './components/AgregarPlaca'
import Login from './components/Inicio'
import CreateUser from './components/CreateUser'
import './App.css';
import MostrarParqueos from './components/MostrarParqueos'
import CrearParqueo from './components/CrearParqueo'
import ConsultarUsuarios from './components/ConsultarUsuarios'
import ModificarUsuario from './components/ModificarUsuario'

function App() {
  return (

    <Router>
      <div className="container p-4">
        <Route path="/" exact component={Login} />
        <Route path="/edit/:id" component={CreateUser} />
        <Route path="/menu/:id" exact component={Navigation} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/modificarParqueo" component={CrearParqueo} />
        <Route path="/parqueos" component={MostrarParqueos} />
        <Route path="/AgregarPlaca/:id" component={AgregarPlaca} />
        <Route path="/ModificarUsuario" component={ModificarUsuario} />


      </div>
    </Router>
  );
}

export default App;
