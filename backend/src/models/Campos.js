const { Schema, model } = require('mongoose');

const campoSchema = new Schema(
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
        espaciosTotales: {
            type: String,
        },
        carros: {
            type: String,
        },
        discapacitados: {
            type: String,
        },
        reservados: {
            type: String,
        },
        visitante: {
            type: String,
        },

    }, {
    timestamps: true
});

module.exports = model('Campo', campoSchema);