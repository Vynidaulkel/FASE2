const campoCtrl = {};

const Campo = require('../models/Campos');

 

campoCtrl.updateCampo = async (req, res) => {
    const { fecha, dia,mes,IdParqueo,espaciosTotales,carros,discapacitados,reservados,visitante } = req.body;
    await Campo.findByIdAndUpdate(req.params.id, {

        fecha, dia,mes,IdParqueo,espaciosTotales,carros,discapacitados,reservados,visitante
    });
    res.json('Note Updated');
}


campoCtrl.getUsers = async (req, res) => {
  
    try {
        const campos = await Campo.find();
        res.json(campos);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};



campoCtrl.createCampos = async (req, res) => {
    try {
        console.log(req.body);
        const { fecha } = req.body;
        const { dia } = req.body;
        const { mes } = req.body;
        const { IdParqueo } = req.body;
        const { espaciosTotales } = req.body;
        const { carros } = req.body;
        const { discapacitados } = req.body;
        const { reservados } = req.body;
        const { visitante } = req.body;
        
    
        const newCampo = new Campo({ fecha, dia,mes, IdParqueo,espaciosTotales,carros,discapacitados,reservados, visitante });
        await newCampo.save();
        res.json('Campo created')
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

campoCtrl.deleteCampos = async (req, res) => {
    const { id } = req.params;
    await Campo.findByIdAndDelete(id);
    res.json('Placa deleted');
}

module.exports = campoCtrl;