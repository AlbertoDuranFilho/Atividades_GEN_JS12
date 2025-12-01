const prompt = require("readline-sync");

console.log("-------------------- MENU --------------------")
console.log("1 - Cachorro quente")
console.log("2 - X-Salada")
console.log("3 - X-Bacon")
console.log("4 - Bauru")
console.log("5 - Refrigerante")
console.log("6 - Suco de laranja")

let codigoItem = prompt.questionInt("Digite o Codigo do Produto(1 a 6): ")
let quantidade = prompt.questionInt("Digite a Quantidade do Produto: ")

let item;
let valorTotal;

switch(codigoItem){
    case 1:
        valorTotal = quantidade * 10;
        item = "Cachorro Quente"
        break
    case 2:
        valorTotal = quantidade * 15;
        item = "X-Salada"
        break
    case 3:
        valorTotal = quantidade * 18;
        item = "X-Bacon"
        break
    case 4:
        valorTotal = quantidade * 12;
        item = "Bauru"
        break
    case 5:
        valorTotal = quantidade * 8;
        item = "Refrigerante"
        break
    case 6:
        valorTotal = quantidade * 13;
        item = "Suco de laranja"
        break
    default:
        console.log("Opção Invalida! Digite um valor entre 1 e 6.")
        break
}
if(item != undefined || item != null) console.log(`Você comprou o ${item} e o valor total da conta foi de R$${valorTotal.toFixed(2)}`)