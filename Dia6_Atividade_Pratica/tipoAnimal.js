const prompt = require("readline-sync");

let primeiroGrupo = prompt.question("Digite o primeiro grupo: ")
let segundoGrupo = prompt.question("Digite o segundo grupo: ")
let terceiroGrupo = prompt.question("Digite o terceiro grupo: ")

if (primeiroGrupo.toLowerCase() === "vertebrado"){
    if (segundoGrupo.toLowerCase() === "ave"){
        if (terceiroGrupo.toLowerCase() === "carnivoro"){
            console.log("Águia");
        } else if (terceiroGrupo.toLowerCase() === "onivoro"){
            console.log("Pomba");
        }
    } else if (segundoGrupo.toLowerCase() === "mamifero"){
        if (terceiroGrupo.toLowerCase() === "onivoro"){
            console.log("Homem");
        } else if (terceiroGrupo.toLowerCase() === "herbivoro"){
            console.log("Vaca");
        }
    }
} else if (primeiroGrupo.toLowerCase() === "invertebrado"){
    if (segundoGrupo.toLowerCase() === "inseto"){
        if (terceiroGrupo.toLowerCase() === "hematofago"){
            console.log("Pulga");
        } else if (terceiroGrupo.toLowerCase() === "herbivoro"){
            console.log("Lagarta");
        }
    } else if (segundoGrupo.toLowerCase() === "anelideo"){
        if (terceiroGrupo.toLowerCase() === "hematofago"){
            console.log("Sanguessuga");
        } else if (terceiroGrupo.toLowerCase() === "onivoro"){
            console.log("Minhoca");
        }
    }
}
