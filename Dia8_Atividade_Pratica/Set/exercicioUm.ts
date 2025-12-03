import leia = require('readline-sync')

const numeros: Set<number> = new Set<number>([]);

for(let i = 0; i < 10;i++){
    let numero = leia.questionInt(`Digite o ${i + 1} (Lembrando que nao pode repertir o numero): `)

    if (numeros.has(numero) != true) {
        numeros.add(numero) 
    }else {
        console.log(`O número ${numero} já existe na lista!`);
    } 
}


console.log(`\nLista de dados do Set:`);
let novoArray: number[] = Array.from(numeros)
novoArray.sort((a, b) => a - b)

for(let numero of novoArray){
    console.log(`${numero}`)
}