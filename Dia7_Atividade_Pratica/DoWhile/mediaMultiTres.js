const prompt = require("readline-sync");
let somaNumeros = 0;
let contador = 0;
let numero;
do {
    numero = prompt.questionInt("Digite um numero: ");
    if(numero % 3 == 0 && numero != 0){
        somaNumeros += numero;
        contador++;
    }       
    
} while(numero != 0)

let mediaNumeros = somaNumeros / contador;

console.log(`A média de todos os números múltiplos de 3 é: ${mediaNumeros.toFixed(2)}`)