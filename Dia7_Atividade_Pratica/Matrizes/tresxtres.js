const prompt = require("readline-sync");

let matriz = [[],[],[]]
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundario = 0;


for (let i = 0; i < 3; i++){
    matriz[i] = []
    for (let j = 0; j < 3; j++){
        let valor = prompt.questionInt(`Digite o valor para a posicao [${i}][${j}]: `);
        matriz[i][j] = valor;
    } 
}

for(let i = 0; i < matriz.length;i++){
   diagonalPrincipal[i] = matriz[i][i];
}

for(let i = 0; i < matriz.length;i++){
   diagonalSecundaria[i] = matriz[i][2 - i];
}

for(let i = 0; i < diagonalPrincipal.length; i++){
    somaPrincipal += diagonalPrincipal[i];
}

for(let i = 0; i < diagonalSecundaria.length; i++){
    somaSecundario += diagonalSecundaria[i];
}

console.log(`Elementos da Diagonal Principal:\n ${diagonalPrincipal}`)
console.log(`Elementos da Diagonal Secundária:\n ${diagonalSecundaria}`)
console.log(`Soma dos Elementos da Diagonal Principal:\n ${somaPrincipal}`)
console.log(`Soma dos Elementos da Diagonal Secundário:\n ${somaSecundario}`)

