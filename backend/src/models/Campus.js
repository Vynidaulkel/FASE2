const Espacio = require('./Espacio.js');
class Campus extends Espacio{
    constructor(ubicacion, acceso, horaApertura, horaCierre, id){
        super(ubicacion, acceso, horaApertura, horaCierre, id);
        this.id = id;
    }
    set setId(pId) {
        this.id = pId;
    }
    get getId() {
        return this.Id;
    }
}
module.exports = Campus; 