import Espacio from './Espacio.js';
class Principal extends Espacio{
    constructor(ubicacion, acceso, horaApertura, horaCierre, jefaturaPerteneciente){
        super(ubicacion, acceso, horaApertura, horaCierre, jefaturaPerteneciente);
        this.jefaturaPerteneciente = jefaturaPerteneciente;
    }
    set setJefaturaPerteneciente(pJefaturaPerteneciente){
        this.jefaturaPerteneciente = pJefaturaPerteneciente;
    }
    get getJefaturaPerteneciente() {
        return this.jefaturaPerteneciente;
    }
}
module.exports =  Principal;