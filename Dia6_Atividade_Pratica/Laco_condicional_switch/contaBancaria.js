const prompt = require("readline-sync");

console.log("-------------------- MENU --------------------")
console.log("1 - Saldo")
console.log("2 - Saque")
console.log("3 - Depósito")

let codigoOperacao = prompt.questionInt("Digite o numero da operacao (1 a 3): ")

let deposito;
let saque;
let saldo = 1000.00;
let operacao;
let saldoNovo = "";

switch(codigoOperacao){
    case 1:
        operacao = "Saldo"
        break;
    case 2:
        if(saldo != 0){
            saque = prompt.questionFloat("Digite o valor para saque: R$")
            saldo = saldo - saque;
            saldoNovo = "Novo Saldo"
        }
        operacao = "Saque"
        break;
    case 3: 
        deposito = prompt.questionFloat("Digite o valor para deposito: R$")
        saldo = saldo + deposito;
        operacao = "Depósito" 
        saldoNovo = "Novo Saldo"
        break;
    default:
        console.log("Opção Invalida! Digite uma operação entre 1 e 3.")
        break;
}
if(operacao != undefined || operacao != null) (saldo > 0 || operacao === "Saldo")  
                                                ? console.log(`A operação - ${operacao} | ${saldoNovo} R$${saldo.toFixed(2)}`) 
                                                : console.log(`A operação - ${operacao} | Saldo Insuficiente!`);
