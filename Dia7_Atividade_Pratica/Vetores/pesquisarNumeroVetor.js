const prompt = require("readline-sync");

let numero = [];
let encontrou = false;

for (let i = 0; i < 10; i++){
    let numeroVetor = prompt.questionInt(`Digite o ${i + 1} numero: `);
    numero[i] = numeroVetor
}

console.log(numero)

let valorPesquisar = prompt.questionInt("Digite o numero que voce deseja encontrar: ");
for (let i = 0; i < numero.length; i++){
    if(numero[i] === valorPesquisar){
        console.log(`O numero ${valorPesquisar} está localizado na posicao: ${i}.`);
        encontrou = true;
        break;
    } else{
        encontrou = false;
    }
}
if(encontrou === false) console.log(`O numero ${valorPesquisar} não foi encontrado!`);