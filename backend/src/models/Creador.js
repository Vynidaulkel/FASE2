class Creador{
    constructor(){}
    createProduct(ubicacion, acceso, horaApertura, horaCierre){
        let espacio = new Espacio(ubicacion, acceso, horaApertura, horaCierre);
        return espacio;
    }
}
module.exports = Creador; 