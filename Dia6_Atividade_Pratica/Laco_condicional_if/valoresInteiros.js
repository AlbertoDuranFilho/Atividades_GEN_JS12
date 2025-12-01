const prompt = require("readline-sync");

let valorA = prompt.questionInt("Digite o valor A: ");
let valorB = prompt.questionInt("Digite o valor B: ");
let valorC = prompt.questionInt("Digite o valor C: ");

( valorA + valorB > valorC )
  ? console.log("A Soma de A + B é Maior do que C")
  : ( valorA + valorB == valorC)
  ? console.log("A Soma de A + B é Igual do que C")
  : console.log("A Soma de A + B é Menor do que C");