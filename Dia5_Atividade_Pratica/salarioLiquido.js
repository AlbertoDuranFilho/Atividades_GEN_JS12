let prompt = require('readline-sync');

let salarioBruto = prompt.questionFloat("Digite seu salario bruto: ");
let adcionalNoturno = prompt.questionFloat("Digite seu adicional noturno: ");
let horaExtra = prompt.questionFloat("Digite suas horas extras: ");
let desconto = prompt.questionFloat("Digite os descontos do seu salario: ");

let salarioLiquido = salarioBruto + adcionalNoturno + (horaExtra * 5) - desconto;

console.log(`Seu salário líquido esse mês será de: R$${salarioLiquido}`)

