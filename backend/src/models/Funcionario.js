class Funcionario{
    constructor(id, nombre, celular, correoInstitucional, correoAlterno, departamento, campus, usuario, password, jefe,horarioEntrada,
    horarioSalida){
        this.id = id;
        this.nombre = nombre;
        this.celular = celular; 
        this.correoInstitucional = correoInstitucional;
        this.correoAlterno = correoAlterno; 
        this.departamento = departamento; 
        this.campus = campus;
        this.usuario = usuario; 
        this.password = password;
        this.jefe = false;
        this.horarioEntrada = horarioEntrada;
        this.horarioSalida = horarioSalida;
        this.placasRegistradas = [];
    }
    get getPlacasRegistradas() {
        return this.placasRegistradas;
    }
    set setPlacasRegistradas(pPlacasRegistradas) {
        this.placasRegistradas = pPlacasRegistradas;
    }
}
module.exports = Funcionario; 