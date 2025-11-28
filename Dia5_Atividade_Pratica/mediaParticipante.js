let prompt = require('readline-sync');

let nota1 = prompt.questionFloat("Digite a primeira nota: ");
let nota2 = prompt.questionFloat("Digite a segunda nota: ");
let nota3 = prompt.questionFloat("Digite a terceira nota: ");
let nota4 = prompt.questionFloat("Digite a quarta nota: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4; 


console.log(`A média final foi de: ${media}`)