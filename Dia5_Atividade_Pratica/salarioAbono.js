const prompt = require('readline-sync');

let salario = prompt.questionFloat("Digite o salario do funcionario: ");

let abono = prompt.questionFloat("Digite o valor do abono: ");

let novoSalario = salario + abono;

console.log(`Seu novo salário é ${novoSalario}`)