const prompt = require("readline-sync");

let numero = prompt.questionInt("Digite um numero: ");

if (numero % 2 == 0){
    if(numero < 0){
        console.log("O número é Par e Negativo");
    } else {
        console.log("O número é Par e Positivo")
    }
} else if (numero < 0){
    console.log("O número é Impar e Negativo");
} else{
    console.log("O número é Impar e Positivo");
}