const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mernstack';

mongoose.connect(URI, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');

});