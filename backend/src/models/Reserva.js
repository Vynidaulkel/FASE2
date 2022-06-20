const { Schema, model } = require('mongoose');

const reservasSchema = new Schema(
    {
        fecha: {
            type: String,
        },
        dia: {
            type: String,
        },
        mes: {
            type: String,
        },
        IdParqueo: {
            type: String,
        },
        IdUsuario: {
            type: String,
        },
        HoraEntrada: {
            type: String,
        },
        HoraSalida: {
            type: String,
        },
        Tipo: {
            type: String,
        } 

    }, {
    timestamps: true
});

module.exports = model('Reservas', reservasSchema);