import leia = require('readline-sync')

const cores: Array<String> = new Array<String>()

for(let i = 0; i < 5;i++){
    cores[i]= leia.question(`Digite a ${i + 1} cor: `)
}

console.log(`Todas as cores: \n`)
for(let cor of cores){
    console.log(`${cor}`)
}

console.log(`\nCores ordenadas:\n`)
cores.sort()
for(let cor of cores){
    console.log(`${cor}`)
}

