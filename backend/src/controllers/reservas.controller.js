const reservaCtrl = {};

const Reserva = require('../models/Reserva');



reservaCtrl.getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.json(reservas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};



reservaCtrl.createReserva = async (req, res) => {
    try {
        console.log(req.body);
        const { fecha } = req.body;
        const { dia } = req.body;
        const { mes } = req.body;
        const { IdParqueo } = req.body;
        const { IdUsuario } = req.body;
        const { HoraEntrada } = req.body;
        const { HoraSalida } = req.body;
        const { Tipo } = req.body;
        const { Placa } = req.body;
        
 
        const newCampo = new Reserva({ fecha, dia,mes, IdParqueo,IdUsuario,HoraEntrada,HoraSalida,Tipo,Placa });
        await newCampo.save();
        res.json('Campo created')
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

reservaCtrl.deleteReserva = async (req, res) => {
    const { id } = req.params;
    await Reserva.findByIdAndDelete(id);
    res.json('Placa deleted');
}

module.exports = reservaCtrl;