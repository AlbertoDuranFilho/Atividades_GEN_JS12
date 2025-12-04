import { Stack } from './Stack';

const pilha = new Stack<string>();

import prompt = require('readline-sync');

let opcao;
 
 do {
     console.log("\n********************************************")
     console.log("1 - Adicionar livro na pilha")
     console.log("2 - Listar todos os livros")
     console.log("3 - Retirar livro da pilha")
     console.log("0 - Sair")
     console.log("********************************************\n")
     opcao = prompt.questionInt("Digite a Opcao desejada: ")

     switch(opcao){
        case 1:
            const cliente = prompt.question("\nNome do Livro: ")
            pilha.push(cliente)
            console.log("\nLivro Adicionado!")
            break;
        case 2:
            if(pilha.isEmpty()){
                console.log("\nA Pilha está vazia!")
            } else{
                console.log("Lista de Livros na Pilha:\n")
                pilha.printStack()
            }
            break;
        case 3:
            if(pilha.isEmpty()){
                console.log("\nA Pilha está vazia!")
            } else{
                console.log("Pilha:\n")
                pilha.pop()
                pilha.printStack()

                console.log("\nUm Livro foi retirado da pilha!") 
            }
            break;
        case 0:
            console.log("\nObrigado por usar o programa!")
            break;
        default:
            console.log("\nDigite uma opção válida!")
            break;
     }
     
} while (opcao != 0);