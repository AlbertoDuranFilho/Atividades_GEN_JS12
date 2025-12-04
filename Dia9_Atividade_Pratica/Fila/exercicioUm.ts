import { Queue } from './Queue';

const fila = new Queue<string>();

import prompt = require('readline-sync');

let opcao;
 
 do {
     console.log("\n********************************************")
     console.log("1 - Adicionar Cliente na Fila")
     console.log("2 - Listar todos os Clientes")
     console.log("3 - Retirar Cliente da Fila")
     console.log("0 - Adicionar Cliente na Fila")
     console.log("********************************************\n")
     opcao = prompt.questionInt("Digite a Opcao desejada: ")

     switch(opcao){
        case 1:
            const cliente = prompt.question("Nome do Cliente: ")
            fila.enqueue(cliente)
            console.log("Cliente Adicionado!")
            break;
        case 2:
            if(fila.isEmpty()){
                console.log("\nA fila está vazia!")
            } else{
                console.log("Lista de Clientes na Fila:\n")
                fila.printQueue()
            }
            break;
        case 3:
            if(fila.isEmpty()){
                console.log("\nA fila está vazia!")
            } else{
                console.log("Fila:\n")
                fila.dequeue()
                fila.printQueue()
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