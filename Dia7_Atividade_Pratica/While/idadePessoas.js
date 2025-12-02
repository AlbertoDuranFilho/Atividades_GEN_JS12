const prompt = require("readline-sync");

let idade = 0;
let contadorMaior;
let contadorMenor;


while(idade >= 0){
    idade = prompt.questionInt("Digite uma idade: ")
    if(idade < 25){
        contadorMenor+= 1;
    } else if (idade > 50){
        contadorMaior+= 1;
    }
}

console.log(`Total de pessoas menores de 21 anos: ${contadorMenor}`)
console.log(`Total de pessoas maiores de 50 anos: ${contadorMaior}`)