const Creador = require('./Creador.js');
const Principal = require('./Principal.js');


class CreadorPrincipal extends Creador{
    constructor(){
        super();
    }
    createProduct(ubicacion, acceso, horaApertura, horaCierre, jefaturaPerteneciente){
        let espacio = new Principal(ubicacion, acceso, horaApertura, horaCierre, jefaturaPerteneciente);
        return espacio;
    }
}
module.exports = CreadorPrincipal;