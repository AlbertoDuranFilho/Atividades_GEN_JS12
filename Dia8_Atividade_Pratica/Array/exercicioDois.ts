import leia = require('readline-sync')

const numeros: Array<Number> = new Array<Number>(2,5,1,3,4,9,7,8,10,6);

let numero = leia.questionInt("Digite o valor que voce deseja encontrar: ");

let index = numeros.indexOf(numero);

(index != -1) ? console.log(`O número ${numero} está localizado na posição: ${index}.`) : console.log(`O número ${numero} não foi encontrado!`);


