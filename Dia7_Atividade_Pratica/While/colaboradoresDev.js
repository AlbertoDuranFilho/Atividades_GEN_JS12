const prompt = require("readline-sync");

let continuar = true;
let contadorDevBack = 0;
let contadorDevFrontMCisTrans = 0;
let contadorDevMobilekHCisTransMaior40 = 0;
let contadorNBinFullMenor30 = 0;
let contadorTotalPessoas = 0;
let listaIdades = [];
let mediaIdade = 0;
let somaIdades = 0;

while(continuar){

    console.log("\n-------------------- Idade Pessoa Colaborador --------------------")
    let idade = prompt.questionInt("Digite a idade: ")

    console.log("\n-------------------- Identidade de Gênero --------------------")
    console.log("1 - Mulher Cis")
    console.log("2 - Homem Cis")
    console.log("3 - Não Binário")
    console.log("4 - Mulher Trans")
    console.log("5 - Homem Trans")
    console.log("6 - Outros")

    let codigoGenero = prompt.questionInt("Digite o genero de acordo com o codigo da tabela acima: ")

    console.log("\n-------------------- Pessoa Desenvolvedora --------------------")
    console.log("1 - Backend")
    console.log("2 - Frontend")
    console.log("3 - Mobile")
    console.log("4 - FullStack")

    let codigoDev = prompt.questionInt("Digite o cargo Dev de acordo com o codigo da tabela acima: ")
  
    // Mulheres Cis e Trans desenvolvedoras Frontend
    if( (codigoGenero == 1 || codigoGenero == 4) && codigoDev == 2){
        contadorDevFrontMCisTrans += 1;

    // Total de pessoas desenvolvedoras Backend
    } else if(codigoDev == 1){
        contadorDevBack += 1;

    // Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
    } else if(codigoDev == 3 && codigoGenero == 2 && codigoGenero == 5 && idade > 40){
        contadorDevMobilekHCisTransMaior40 += 1;

    // Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos
    } else if(codigoDev == 4 && codigoGenero == 3 && idade < 30){
        contadorNBinFullMenor30 += 1;
    }
    
    // O número total de pessoas que responderam à pesquisa
    contadorTotalPessoas += 1;
    listaIdades[listaIdades.length] = idade;

    continuar = prompt.keyInYNStrict("\nDeseja continuar a leitura dos dados de um novo colaborador ou nao? ")
}

for(let i = 0; i < listaIdades.length; i++){
    somaIdades += listaIdades[i];
}

mediaIdade = somaIdades / listaIdades.length;

console.log(`\nTotal de pessoas desenvolvedores Back-end: ${contadorDevBack}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${contadorDevFrontMCisTrans}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${contadorDevMobilekHCisTransMaior40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${contadorNBinFullMenor30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${contadorTotalPessoas}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${mediaIdade.toFixed(2)}`);




