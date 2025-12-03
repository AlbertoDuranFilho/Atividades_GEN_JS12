import leia = require('readline-sync')

const numeros: Set<Number> = new Set<Number>([2,5,1,3,4,9,7,8,10,6]);

let numero = leia.questionInt("Digite o valor que voce deseja encontrar: ");

let encontrou = numeros.has(numero);

(encontrou != false) ? console.log(`O número ${numero} foi encontrado.`) : console.log(`O número ${numero} não foi encontrado!`);


