let prompt = require('readline-sync');

let n1 = prompt.questionInt("Digite o primeiro valor: ");
let n2 = prompt.questionInt("Digite o segundo valor: ");
let n3 = prompt.questionInt("Digite o terceiro valor: ");
let n4 = prompt.questionInt("Digite o quarto valor: ");

let diferencaProduto = (n1 * n2) - (n3 * n4);

console.log(`A diferença dos produtos é: ${diferencaProduto}`);