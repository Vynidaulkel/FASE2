const placaCtrl = {};

const Placa = require('../models/Placa');

placaCtrl.getPlacas = async (req, res) => {
    console.log(req.body);
    try {
        const placas = await Placa.find();
        res.json(placas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

placaCtrl.createPlacas = async (req, res) => {
    try {
        console.log(req.body);
        const { IdUser } = req.body;
        const { NunPlaca } = req.body;
    
        const newPlaca = new Placa({ IdUser, NunPlaca });
        await newPlaca.save();
        res.json('Placa created')
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

placaCtrl.deletePlaca = async (req, res) => {
    const { id } = req.params;
    await Placa.findByIdAndDelete(id);
    res.json('Placa deleted');
}

module.exports = placaCtrl;