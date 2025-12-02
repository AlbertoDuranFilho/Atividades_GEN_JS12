const prompt = require("readline-sync");

let contadorPar = 0;
let contadorImpar = 0; 

for(let i = 1; i <= 10; i++){
    let numero = prompt.questionInt(`Digite o ${i} numero: `)

    if(numero % 2 == 0){
        contadorPar += 1
    } else {
        contadorImpar += 1
    }

}

console.log(`Total de números pares: ${contadorPar}`)
console.log(`Total de números ímpares: ${contadorImpar}`)
