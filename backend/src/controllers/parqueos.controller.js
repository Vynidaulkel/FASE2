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
    const { lcampus } = req.body;
    const { ubicacion } = req.body;
    const { acceso } = req.body;
    const { hora_apertura } = req.body;
    const { hora_cierre } = req.body;
    const { Contact_Id_Jefatura } = req.body;
    const { cantidadDeEspacios } = req.body;
    const { CantidadDiscapacitados } = req.body;
    const { espaciosReservados } = req.body;
    const { EspaciosVisitantes } = req.body;
    const { EspaciosVehiculos } = req.body;
    const { Encargado } = req.body;
 
    

    console.log(g);

    cont = 0

    let total = CantidadDiscapacitados+CantidadDiscapacitados+EspaciosVisitantes+EspaciosVehiculos

    let reservados = espaciosReservados
    let Discapacitado = CantidadDiscapacitados
    let visitant = EspaciosVisitantes
    let vehiculo = EspaciosVehiculos


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

        for (var n = cont; n < total; n++) {

            if (Discapacitado>0)  {
                parqueo[n].discapacitado = true;
                cont = cont + 1;
                Discapacitado = Discapacitado-1
            } 

            else if (reservados>0){
                parqueo[n].reservado = true;
                cont = cont + 1;
                reservados = reservados-1
            }
             
            else if (visitant>0)  {
                    parqueo[n].visitante = true;
                    cont = cont + 1;
                    visitant= visitant-1
                }    
            else if (vehiculo>0)  {
                parqueo[n].vehiculo = true;
                cont = cont + 1;
                vehiculo= vehiculo-1
            }   
            
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
            lita_parqueos.push(parqueo[n].vehiculo)
            lita_parqueos.push(parqueo[n].estado)
            lita_parqueos.push(parqueo[n].id)
            lita_final.push(lita_parqueos)
            lita_parqueos = []
        }
        tipo = g
        campus = lcampus
        Lugar = ubicacion
        Acceso = acceso
        HoraApertura = hora_apertura
        HoraCierre = hora_cierre
        Espacios = lita_final;
        Cantidad = cantidadDeEspacios
        Discapacitados = CantidadDiscapacitados
        Reservados= espaciosReservados
        Visitantes = EspaciosVisitantes
        Vehiculos = EspaciosVehiculos
        Operador = Encargado
        Jefatura= Contact_Id_Jefatura

        const newNote = new Note({
            tipo, campus, Lugar,  Acceso, HoraApertura, HoraCierre, Jefatura,Cantidad,
            Espacios, Discapacitados, 
            Reservados, Visitantes, Vehiculos, Operador
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

        for (var n = cont; n < total; n++) {

            if (Discapacitado>0)  {
                parqueo[n].discapacitado = true;
                cont = cont + 1;
                Discapacitado = Discapacitado-1
            } 

            else if (reservados>0){
                parqueo[n].reservado = true;
                cont = cont + 1;
                reservados = reservados-1
            }
             
            else if (visitant>0)  {
                    parqueo[n].visitante = true;
                    cont = cont + 1;
                    visitant= visitant-1
                }    
            else if (vehiculo>0)  {
                parqueo[n].vehiculo = true;
                cont = cont + 1;
                vehiculo= vehiculo-1
            }  
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
            lita_parqueos.push(parqueo[n].vehiculo)
            lita_parqueos.push(parqueo[n].estado)
            lita_parqueos.push(parqueo[n].jefaturaPerteneciente)
            lita_final.push(lita_parqueos)
            lita_parqueos = []
        }
        tipo = g
        campus = lcampus
        Lugar = ubicacion
        Acceso = acceso
        HoraApertura = hora_apertura
        HoraCierre = hora_cierre
        Espacios = lita_final;
        Cantidad = cantidadDeEspacios
        Discapacitados = CantidadDiscapacitados
        Reservados= espaciosReservados
        Visitantes = EspaciosVisitantes
        Vehiculos = EspaciosVehiculos
        Operador = Encargado
        Jefatura= Contact_Id_Jefatura

        const newNote = new Note({
            tipo, campus, Lugar,  Acceso, HoraApertura, HoraCierre, Jefatura,Cantidad,
            Espacios, Discapacitados, 
            Reservados, Visitantes, Vehiculos, Operador
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

        for (var n = cont; n < total; n++) {

            if (Discapacitado>0)  {
                parqueo[n].discapacitado = true;
                cont = cont + 1;
                Discapacitado = Discapacitado-1
            } 

            else if (reservados>0){
                parqueo[n].reservado = true;
                cont = cont + 1;
                reservados = reservados-1
            }
             
            else if (visitant>0)  {
                    parqueo[n].visitante = true;
                    cont = cont + 1;
                    visitant= visitant-1
                }    
            else if (vehiculo>0)  {
                parqueo[n].vehiculo = true;
                cont = cont + 1;
                vehiculo= vehiculo-1
            }  
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
            lita_parqueos.push(parqueo[n].vehiculo)
            lita_parqueos.push(parqueo[n].estado)
            lita_parqueos.push(parqueo[n].jefaturaPerteneciente)
            lita_final.push(lita_parqueos)
            lita_parqueos = []
        }
        tipo = g
        campus = lcampus
        Lugar = ubicacion
        Acceso = acceso
        HoraApertura = hora_apertura
        HoraCierre = hora_cierre
        Espacios = lita_final;
        Cantidad = cantidadDeEspacios
        Discapacitados = CantidadDiscapacitados
        Reservados= espaciosReservados
        Visitantes = EspaciosVisitantes
        Vehiculos = EspaciosVehiculos
        Operador = Encargado
        Jefatura= Contact_Id_Jefatura

        const newNote = new Note({
            tipo, campus, Lugar,  Acceso, HoraApertura, HoraCierre, Jefatura,Cantidad,
            Espacios, Discapacitados, 
            Reservados, Visitantes, Vehiculos, Operador
        });
        await newNote.save();
        res.json('New Note added');

    }
};


notessCtrl.updateNote  = async (req, res) => {

    
    const { g } = req.body;
    const { lcampus } = req.body;
    const { ubicacion } = req.body;
    const { acceso } = req.body;
    const { hora_apertura } = req.body;
    const { hora_cierre } = req.body;
    const { Contact_Id_Jefatura } = req.body;
    const { cantidadDeEspacios } = req.body;
    const { CantidadDiscapacitados } = req.body;
    const { espaciosReservados } = req.body;
    const { EspaciosVisitantes } = req.body;
    const { EspaciosVehiculos } = req.body;
    const { Encargado } = req.body;

  

    cont = 0

    var parqueo = new Array();

    let FactoryCampus = new CreadorCampus();

    for (var n = 0; n < cantidadDeEspacios; n++) {
        let espacio = FactoryCampus.createProduct(ubicacion, acceso, hora_apertura, hora_cierre,
            n)
        parqueo.push(espacio);
    }

    let total = CantidadDiscapacitados+EspaciosVisitantes+EspaciosVehiculos+espaciosReservados

    let reservados = espaciosReservados
    let Discapacitado = CantidadDiscapacitados
    let visitant = EspaciosVisitantes
    let vehiculo = EspaciosVehiculos

   
 

    for (var n = cont; n < total; n++) {

        if (Discapacitado>0)  {
            parqueo[n].discapacitado = true;
            cont = cont + 1;
            Discapacitado = Discapacitado-1
        } 

        else if (reservados>0){
            parqueo[n].reservado = true;
            cont = cont + 1;
            reservados = reservados-1
        }
         
        else if (visitant>0)  {
                parqueo[n].visitante = true;
                cont = cont + 1;
                visitant= visitant-1
            }    
        else if (vehiculo>0)  {
            parqueo[n].vehiculo = true;
            cont = cont + 1;
            vehiculo= vehiculo-1
        }  
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
        lita_parqueos.push(parqueo[n].vehiculo)
        lita_parqueos.push(parqueo[n].estado)
        lita_parqueos.push(parqueo[n].id)
        lita_final.push(lita_parqueos)
        lita_parqueos = []
    }
    
    tipo = g
    campus = lcampus
    Lugar = ubicacion
    Acceso = acceso
    HoraApertura = hora_apertura
    HoraCierre = hora_cierre
    Jefatura= Contact_Id_Jefatura
    Espacios = lita_final;
    Cantidad = cantidadDeEspacios
    Discapacitados = CantidadDiscapacitados
    Reservados= espaciosReservados
    Visitantes = EspaciosVisitantes
    Vehiculos = EspaciosVehiculos
    Operador = Encargado
    

    await Note.findByIdAndUpdate(req.params.id, {
        tipo, campus, Lugar,  Acceso, HoraApertura, HoraCierre, Jefatura,Cantidad,
            Espacios, Discapacitados, 
            Reservados, Visitantes, Vehiculos, Operador
    });
    res.json('Note Updated');

        
}




notessCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}


notessCtrl.deletParqueo = async (req, res) => {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.json('User deleted');
}




module.exports = notessCtrl;