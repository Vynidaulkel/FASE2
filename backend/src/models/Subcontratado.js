const Espacio = require('./Espacio.js');

class Subcontratado extends Espacio{
    constructor(ubicacion, acceso, horaApertura, horaCierre, contacto){
        super(ubicacion, acceso, horaApertura, horaCierre, contacto);
        this.contacto = contacto; 
    }
    set setContacto(pContacto) {
        this.contacto = pContacto;
    }
    get getContacto() {
        return this.contacto;
    }
}
module.exports = Subcontratado;