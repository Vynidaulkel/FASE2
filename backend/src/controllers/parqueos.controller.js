const CreadorCampus = require('../models/CreadorCampus.js');
const CreadorPrincipal = require('../models/CreadorPrincipal.js');
const CreadorSubcontratado = require('../models/CreadorSubcontratado.js');

const notessCtrl = {};

const Note = require('../models/Parqueo');


notessCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};


notessCtrl.createNote = async (req, res) => {
    console.log(req.body);
    const { g } = req.body;
    const { ubicacion } = req.body;
    const { acceso } = req.body;
    const { hora_apertura } = req.body;
    const { hora_cierre } = req.body;
    const { Contact_Id_Jefatura } = req.body;
    const { cantidadDeEspacios } = req.body;
    const { CantidadDiscapacitados } = req.body;
    const { espaciosReservados } = req.body;
    const { EspaciosVisitantes } = req.body;

    console.log(g);
    if (g === 'Campus') {

        var parqueo = new Array();
        console.log('campus')
        let FactoryCampus = new CreadorCampus();
        console.log('campus2')
        for (var n = 0; n < cantidadDeEspacios; n++) {
            let espacio = FactoryCampus.createProduct(ubicacion, acceso, hora_apertura, hora_cierre,
                n)
            parqueo.push(espacio);
        }

        lita_parqueos = []
        lita_final = []
        for (var n = 0; n < parqueo.length; n++) {
            lita_parqueos.push(parqueo[n].ubicacion)
            lita_parqueos.push(parqueo[n].acceso)
            lita_parqueos.push(parqueo[n].horaApertura)
            lita_parqueos.push(parqueo[n].horaCierre)
            lita_parqueos.push(parqueo[n].reservado)
            lita_parqueos.push(parqueo[n].discapacitado)
            lita_parqueos.push(parqueo[n].visitante)
            lita_parqueos.push(parqueo[n].id)
            lita_final.push(lita_parqueos)
            lita_parqueos = []
        }
        tipo = g
        Espacios = lita_final;

        const newNote = new Note({
            tipo,
            Espacios

        });
        await newNote.save();
        res.json('New Note added');
    }
    if (g === 'Principal') {
        var parqueo = new Array();
        console.log('campus')
        let FactoryPrincipal = new CreadorPrincipal();
        console.log('campus2')
        for (var n = 0; n < cantidadDeEspacios; n++) {
            let espacio = FactoryPrincipal.createProduct(ubicacion, acceso, hora_apertura, hora_cierre,
                Contact_Id_Jefatura)
            parqueo.push(espacio);
        }

        lita_parqueos = []
        lita_final = []
        for (var n = 0; n < parqueo.length; n++) {
            lita_parqueos.push(parqueo[n].ubicacion)
            lita_parqueos.push(parqueo[n].acceso)
            lita_parqueos.push(parqueo[n].horaApertura)
            lita_parqueos.push(parqueo[n].horaCierre)
            lita_parqueos.push(parqueo[n].reservado)
            lita_parqueos.push(parqueo[n].discapacitado)
            lita_parqueos.push(parqueo[n].visitante)
            lita_parqueos.push(parqueo[n].jefaturaPerteneciente)
            lita_final.push(lita_parqueos)
            lita_parqueos = []
        }
        tipo = g
        Espacios = lita_final;

        const newNote = new Note({
            tipo,
            Espacios

        });
        await newNote.save();
        res.json('New Note added');


    }
    if (g === 'Subcontratado') {
        var parqueo = new Array();
        console.log('campus')
        let FactoryPrincipal = new CreadorSubcontratado();
        console.log('campus2')
        for (var n = 0; n < cantidadDeEspacios; n++) {
            let espacio = FactoryPrincipal.createProduct(ubicacion, acceso, hora_apertura, hora_cierre,
                Contact_Id_Jefatura)
            parqueo.push(espacio);
        }

        lita_parqueos = []
        lita_final = []
        for (var n = 0; n < parqueo.length; n++) {
            lita_parqueos.push(parqueo[n].ubicacion)
            lita_parqueos.push(parqueo[n].acceso)
            lita_parqueos.push(parqueo[n].horaApertura)
            lita_parqueos.push(parqueo[n].horaCierre)
            lita_parqueos.push(parqueo[n].reservado)
            lita_parqueos.push(parqueo[n].discapacitado)
            lita_parqueos.push(parqueo[n].visitante)
            lita_parqueos.push(parqueo[n].jefaturaPerteneciente)
            lita_final.push(lita_parqueos)
            lita_parqueos = []
        }
        tipo = g
        Espacios = lita_final;

        const newNote = new Note({
            tipo,
            Espacios

        });
        await newNote.save();
        res.json('New Note added');

    }




};

notessCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notessCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}



module.exports = notessCtrl;