const Funcionario = require('../models/Funcionario'); 

var personal = new Array(); 
console.log('personal')
let GestorFuncionario = new Funcionario();
for(var n = 0; n < 3; n++){
    let espacio = new Funcionario(n,'asd', 1234,'khotmail.com','bhotmail.com','compu','cartago','Knunez','1234','10:30','12:30');
    personal.push(espacio);
}
console.log(personal);