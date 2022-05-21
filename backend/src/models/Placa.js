const { Schema, model } = require('mongoose');

const placaSchema = new Schema(
    {
        IdUser: {
            type: String,
        },
        NunPlaca: {
            type: String,
            unique: true,
        }

    }, {
    timestamps: true
});

module.exports = model('Placa', placaSchema);