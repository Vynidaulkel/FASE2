const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/parqueos', require('./routes/parqueos'));
app.use('/api/placas', require('./routes/placas'));

module.exports = app;