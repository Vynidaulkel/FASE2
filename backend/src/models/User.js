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
        },

        entradaLunes: {
            type: String
        },

        salidaLunes: {
            type: String
        },
        

        entradaMartes: {
            type: String
        },

        salidaMartes: {
            type: String
        },


        entradaMiercoles: {
            type: String
        },

        salidaMiercoles: {
            type: String
        },


        entradaJueves: {
            type: String
        },

        salidaJueves: {
            type: String
        },


        entradaViernes: {
            type: String
        },

        salidaViernes: {
            type: String
        },

        entradaSabado: {
            type: String
        },

        salidaSabado: {
            type: String
        },


        entradaDomingo: {
            type: String
        },

        salidaDomingo: {
            type: String
        },


    }, {
    timestamps: true
});

module.exports = model('User', userSchema);