const Funcionario = require('./Funcionario.js');
class Docente extends Funcionario{
    constructor(id, nombre, celular, correoInstitucional, correoAlterno, departamento, campus, usuario, password, jefe,horarioEntrada,
    horarioSalida){
        super(id, nombre, celular, correoInstitucional, correoAlterno, departamento, campus, usuario, password, jefe,horarioEntrada,
        horarioSalida, horario);
        this.horario = horario; 
    }
}