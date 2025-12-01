const prompt = require("readline-sync");

let nome = prompt.question("Digite o nome do doador: ")
let idade = prompt.questionInt("Digite a idade do doador: ")
let primeiraDoacao = prompt.keyInYN("Primeira doacao de sangue?: ")

console.log(primeiraDoacao)

if (idade >= 18 && idade <=69){
    if (idade >= 60 && idade <= 69){
        if (primeiraDoacao){
            console.log(`${nome} não está apto a doar sangue!`);
        } else {
            console.log(`${nome} está apto a doar sangue!`);
        }
    } else{
        console.log(`${nome} está apto a doar sangue!`);
    }
} else {
    console.log(`${nome} não está apto a doar sangue!`);
}
