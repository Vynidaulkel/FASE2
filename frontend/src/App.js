import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import Login from './components/Inicio'
import CreateUser from './components/CreateUser'

import './App.css';

function App() {
  return (
    <Router>
      <div className="container p-4">
      <Route path="/" exact component={Login} />
        <Route path="/menu" exact component={Navigation} />
        <Route path="/edit/:id" component={NotesList} />
        <Route path="/createUser" component={CreateUser} />
  
      </div>
    </Router>
  );
}

export default App;
