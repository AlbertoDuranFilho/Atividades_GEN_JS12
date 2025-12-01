const prompt = require("readline-sync");

console.log("-------------------- MENU --------------------")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

let numero1 = prompt.questionFloat("Digite o primeiro numero: ")
let numero2 = prompt.questionFloat("Digite o segundo numero: ")
let codigoOperacao = prompt.questionInt("Digite o numero da operacao (1 a 4): ")

let resultado;
let operacao;
let sinal;

switch(codigoOperacao){
    case 1:
        resultado = numero1 + numero2;
        operacao = "Soma"
        sinal = "+"
        break;
    case 2:
        resultado = numero1 - numero2;
        operacao = "Subtração"
        sinal = "-"
        break;
    case 3:
        resultado = numero1 * numero2;
        operacao = "Multiplicação"
        sinal = "*"
        break;
    case 4:
        resultado = numero1 / numero2;
        operacao = "Divisão"
        sinal = "/"
        break;
    default:
        console.log("Opção Invalida! Digite um valor entre 1 e 4.")
        break;
}

if(operacao != undefined || operacao != null) console.log(`O resultado da operação de ${operacao}, foi de: ${numero1.toFixed(1)} ${sinal} ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`)
