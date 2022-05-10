const Creador = require('./Creador.js');
const Subcontratado = require('./Subcontratado.js');
class CreadorSubcontratado extends Creador{
    constructor(){
        super();
    }
    createProduct(ubicacion, acceso, horaApertura, horaCierre, contacto){
        let espacio = new Subcontratado(ubicacion, acceso, horaApertura, horaCierre, contacto);
        return espacio;
    }
}
module.exports = CreadorSubcontratado;