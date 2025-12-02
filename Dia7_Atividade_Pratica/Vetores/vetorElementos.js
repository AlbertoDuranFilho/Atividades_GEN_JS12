const prompt = require("readline-sync");

let listaNumero = [];
let listaImpar = [];
let listaPar = [];
let soma = 0;
let media = 0.00;

for(let i = 0; i < 10; i++){
    let numero = prompt.questionInt(`Digite o ${i+1} numero: `);
    listaNumero[i] = numero;
}

for (let i = 0; i < listaNumero.length; i++){
    
    soma += listaNumero[i]

    if(listaNumero[i] % 2 === 0) listaPar[listaPar.length] = listaNumero[i];    
 
    if (i % 2 !== 0) listaImpar[listaImpar.length] = listaNumero[i];

}

media = soma / listaNumero.length;

console.log(`Elementos nos índices ímpares: \n ${listaImpar}`);
console.log(`\nElementos pares:\n ${listaPar}`);
console.log(`\nSoma: ${soma}`);
console.log(`\nMédia: ${media.toFixed(2)}`);

