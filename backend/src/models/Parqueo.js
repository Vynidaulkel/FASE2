const { Schema, model } = require('mongoose');

const parkSchema = new Schema(
    {
        tipo: {
            type: Array,
        }

    }, {
    timestamps: true
});


module.exports = model('parqueo', parkSchema);