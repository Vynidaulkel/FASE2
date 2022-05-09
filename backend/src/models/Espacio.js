class Espacio{
    constructor(ubicacion, acceso, horaApertura, horaCierre){
        this.ubicacion = ubicacion;
        this.acceso = acceso;
        this.horaApertura = horaApertura;
        this.horaCierre = horaCierre;
        this.reservado = false;
        this.discapacitado = false;
        this.visitante = false;
    }
    get getUbicacion() {
        return this.ubicacion;
    }
    set setUbicacion(pUbicacion) {
        this.ubicacion = pUbicacion;
    }
    get getAcceso() {
        return this.acceso;
    }
    set setAcceso(pAcceso) {
        this.acceso = pAcceso;
    }
    get getReservado() {
        return this.reservado;
    }
    set setReservado(pReservado) {
        this.reservado = pReservado;
    }
    get getDiscapacitado() {
        return this.discapacitado;
    }
    set setDiscapactiado(pDiscapacitado) {
        this.discapacitado = pDiscapacitado;
    }
    get getVisitante() {
        return this.visitante;
    }
    set setVisitante(pVisitante) {
        this.visitante = pVisitante;
    }
    get getHoraApertura() {
        return this.horaApertura;
    }
    set setHoraApertura(pHoraApertura) {
        this.horaApertura = pHoraApertura;
    }
    get getHoraCierre() {
        return this.horaCierre;
    }
    set setHoraCierre(pHoraCierre) {
        this.horaCierre = pHoraCierre;
    }
}
module.exports = Espacio; 
