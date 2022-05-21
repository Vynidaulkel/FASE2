const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        Docente: {
            type: Boolean,
        },
        username: {
            type: String,
            unique: true,
        },
        password: {
            type: String
        },

        nombre: {
            type: String
        },

        numero: {
            type: String
        },

        correo: {
            type: String
        },
        identificacion: {
            type: String
        }

    }, {
    timestamps: true
});

module.exports = model('User', userSchema);