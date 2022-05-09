const Creador = require('./Creador.js');
const Campus = require('./Campus.js');

class CreadorCampus extends Creador{
    constructor(){
        super();
    }
    createProduct(ubicacion, acceso, horaApertura, horaCierre, id){
        let espacio = new Campus(ubicacion, acceso, horaApertura, horaCierre, id);
        return espacio;
    }
}
module.exports = CreadorCampus;