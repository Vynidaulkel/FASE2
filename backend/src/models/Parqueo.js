const { Schema, model } = require('mongoose');

const parkSchema = new Schema(
    {
        tipo: {
            type: String,
        },
        Lugar: {
            type: String,
        },
        Cantidad: {
            type: String,
        },
        Espacios: {
            type: Array
        }

    }, {
    timestamps: true
});


module.exports = model('parqueo', parkSchema);