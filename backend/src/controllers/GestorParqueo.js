const CreadorCampus = require('../models/CreadorCampus.js');

var parqueo = new Array(); 
console.log('campus')
let FactoryCampus = new CreadorCampus(); 
console.log('campus2')
for(var n = 0; n < 3; n++){
    let espacio = FactoryCampus.createProduct('su casita kenny', 'su puerta kenny', 'a la hora que se levanta kenny', 'a la hora en que se acuesta kenny',
    n)
    parqueo.push(espacio);
}
<<<<<<< HEAD

=======
>>>>>>> 32d1ffb8a22d41fd99428f1ca799ddbdc55bc3fb
console.log(parqueo)

