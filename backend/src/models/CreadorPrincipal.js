import Creador from './Creador.js';
import Principal from './Principal.js';
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