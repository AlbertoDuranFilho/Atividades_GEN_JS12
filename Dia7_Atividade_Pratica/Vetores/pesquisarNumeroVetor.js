const prompt = require("readline-sync");

let numero = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let encontrou = false;

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