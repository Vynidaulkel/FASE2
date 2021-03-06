const { Schema, model } = require('mongoose');

const parkSchema = new Schema(
    {
        tipo: {
            type: String,
        },
        campus: {
            type: String,
        },
        Lugar: {
            type: String,
        },
        Acceso: {
            type: String,
        },
        HoraApertura: {
            type: String,
        },
        HoraCierre: {
            type: String,
        },
        Jefatura: {
            type: String,
        }, 
        Cantidad: {
            type: String,
        },
        Espacios: {
            type: Array
        },
        Discapacitados: {
            type: String
        },
        Reservados: {
            type: String
        },
        Visitantes: {
            type: String
        },
        Vehiculos: {
            type: String
        },
        Operador: {
            type: String
        }

    }, {
    timestamps: true
});


module.exports = model('parqueo', parkSchema);