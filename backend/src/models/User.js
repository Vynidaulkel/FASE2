const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },

        nombre: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },

        numero: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },

        correo: {
            type: String,
            required: true,
            unique: false,
            trim: true
        }
        
    }, {
        timestamps: true
    });

module.exports = model('User', userSchema);