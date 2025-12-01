const prompt = require("readline-sync");

console.log("-------------------- MENU --------------------")
console.log("1 - Gerente")
console.log("2 - Vendedor")
console.log("3 - Supervisor")
console.log("4 - Motorista")
console.log("5 - Estoquista")
console.log("6 - Técnico de TI")

let nome = prompt.question("Digite seu nome: ")
let codigoColaborador = prompt.questionInt("Digite o codigo do cargo (1 a 6): ")
let salario = prompt.questionFloat("Digite seu salario: ")

let cargo;
let novoSalario;

switch(codigoColaborador){
    case 1:
        novoSalario = salario + (0.1 * salario)
        cargo = "Gerente"
        break;
    case 2:
        novoSalario = salario + (0.07 * salario)
        cargo = "Vendedor"
        break;
    case 3:
        novoSalario = salario + (0.09 * salario)
        cargo = "Supervisor"
        break;
    case 4:
        novoSalario = salario + (0.06 * salario)
        cargo = "Motorista"
        break;
    case 5:
        novoSalario = salario + (0.05 * salario)
        cargo = "Estoquista"
        break;
    case 6:
        novoSalario = salario + (0.08 * salario)
        cargo = "Técnico de TI"
        break;
    default:
        console.log("Opção Invalida! Digite um valor entre 1 e 6.")
        break;
}

if(cargo != undefined || cargo != null) console.log(`O colaborador ${nome}, com o cargo de ${cargo} teve seu salário ajustado para R$${novoSalario.toFixed(2)}`)