const prompt = require("readline-sync");

let numero1 = prompt.questionInt("Digite o primeiro numero (Tem que ser menor que o segundo): ")
let numero2 = prompt.questionInt("Digite o segundo numero: ")

if (numero1 < numero2) {
    console.log(`No Intervalo entre ${numero1} e ${numero2}:`)
    for(let i = numero1; i < numero2; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(`${i} é múltiplo de 3 e 5`)
        }
    }
} else{
    console.log("O primeiro numero deve ser menor que o segundo.")
}