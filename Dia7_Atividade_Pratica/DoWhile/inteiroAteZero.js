const prompt = require("readline-sync");
let somaPositivo = 0;
let numero;
do {
    numero = prompt.questionInt("Digite um numero: ");
    if(numero > 0) somaPositivo += numero;
    
} while(numero != 0)

console.log(`A soma dos números positivos é: ${somaPositivo}`)