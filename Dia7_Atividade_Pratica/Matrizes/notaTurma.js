const prompt = require("readline-sync");
let linha = 10;
let coluna = 4;
let notas = [];

let media = []; 


for (let i = 0; i < linha; i++) {
  notas[i] = [];
  for (let j = 0; j < coluna; j++) {
    let nota = prompt.questionFloat(`Digite a nota ${j+1} do  aluno ${i+1}: `)
    notas[i][j] = nota;
  }
}

for (let i = 0; i < linha; i++) {
    let soma = 0;
    for (let j = 0; j < coluna; j++) {
        soma += notas[i][j];
    }
    
    media[i] = soma / coluna;
}



for (let i = 0; i < 10; i++) {
    console.log(`Aluno ${i + 1}: ${media[i].toFixed(1)}`);
}

