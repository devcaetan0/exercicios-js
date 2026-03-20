/*
console.log("Caguei nas calças e estou borrado");

let nome="Davi Batista";
console.log(nome);

const pi=3.14;
console.log(pi)

let n1=67;
let n2=67;
console.log(n2+n1);

function saudacao(x,y){
    console.log("Olá, meu nome é "+nome);
};

function somar(x,y){
    console.log(x+y);
};

saudacao();
somar(21,21);
*/

function somar_numeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número. Digite 0 para encerrar: "));

        if (isNaN(numero)) {
            alert("Por favor, insira um número válido");
        } else {
            soma += numero;
        }
        continuar = confirm("Deseja adicionar mais um número?");
    }
    alert("A soma dos números é: " + soma);
}

function contagem_regressiva() {
    for (let i = 10; i > 0; i--) {
        alert(i)
    }
    alert("Lançamento realizado!");
}

function calculo_financeiro() {
    let soma_ganhos = 0;
    let soma_gastos = 0;

    for (let i = 0; i < 12; i++) {
        let ganhos_mes = parseFloat(prompt("Informe o ganho bruto do " + (i + 1) + "° mês: "));
        let gastos_mes = parseFloat(prompt("Informe o gasto total do " + (i + 1) + "° mês: "));

        soma_ganhos += ganhos_mes;
        soma_gastos += gastos_mes;
    }
    let saldo = soma_ganhos - soma_gastos;

    alert("Ganho bruto anual: R$" + soma_ganhos);
    alert("Gasto anual: R$" + soma_gastos);
    alert("Saldo anual: R$" + saldo);

    if (saldo > 0) {
        alert("Parabéns, você teve lucro!");
    } else {
        alert("Sinto muito, você teve prejuízo!");
    }
}

function ordenacao_int() {
    let numeros = [];
    let aux;
    let trocou;

    for (let i = 0; i < 4; i++) {
        numeros[i] = parseFloat(prompt("Dê o valor do " + (i + 1) + "° número"));
    }

    do {
        trocou = false;

        for (let i = 0; i < 4; i++) {
            if (numeros[i] < numeros[i + 1]) {
                aux = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = aux;
                trocou = true;
            }
        }
    } while (trocou == true);

    alert("Em ordem decrescente, os números ficarão da seguinte forma:")
    for (let i = 0; i < 4; i++) {
        alert(numeros[i]);
    }
}

function transformar_num() {
    let numero;

    numero = parseFloat(prompt("Digite um número inteiro:"));

    if (numero % 2 == 0) {
        numero = numero + 1;
        alert("O número que tu escolheu era par, mas eu vou deixar ele ímpar: " + numero);
    } else {
        numero = numero + 1;
        alert("O número que tu escolheu era ímpar, mas vou deixar ele par: " + numero);
    }
}

function verificar_letra() {
    let letra;

    letra = prompt("Informe uma letra");

    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        alert("Sua letra é uma vogal!");
    } else {
        alert("Sua letra é uma consoante!");
    }
}

function sistema_picoles() {
    let escolha;

    escolha = prompt("Selecione o sabor da sua preferência:\nA - Chocolate\nB - Morango\nC - Creme\nD - Manga\nE - Melancia\nF - Vanilla Ice\nG - Céu Azul\nH - Brownie\nI - Hawaiano");

    switch (escolha) {
        case "A":
            alert("Preço: R$1,50")
            break;
        case "B":
            alert("Preço: R$2,50");
            break;
        case "C":
            alert("Preço: R$2,50");
            break;
        case "D":
            alert("Preço: R$3,20");
            break;
        case "E":
            alert("Preço: R$3,40");
            break;
        case "F":
            alert("Preço: R$3,00");
            break;
        case "G":
            alert("Preço: R$3,60");
            break;
        case "H":
            alert("Preço: R$4,00");
            break;
        case "I":
            alert("Preço: R$5,00");
            break;
    }
}

function operacoes() {
    let n1 = 21;
    let n2 = 67;

    alert("Diferença: " + (n2 - n1));
    alert("O dobro da primeira somado ao triplo da segunda: " + ((n1 * 2) + (n2 * 3)));
    alert("Multiplicação: " + (n1 * n2));
}

function ordenacao_num() {
    let n1 = 67;
    let n2 = 21;

    if (n1 > n2) {
        alert("Ordem decrescente: " + n1 + ", " + n2);
    } else {
        alert("Ordem decrescente: " + n2 + ", " + n1);
    }
}

function folha_pagamento() {
    let nome = prompt("Informe seu nome: ");
    let sal_bruto = parseFloat(prompt("Informe seu salário bruto: "));

    alert("Nome do funcionário: " + nome);
    alert("Salário bruto: R$" + sal_bruto);
    alert("Desconto do INSS: R$" + (sal_bruto * 0.08));
    alert("Salário líquido: R$" + (sal_bruto - (sal_bruto * 0.08)));
}

function pagamento_desconto() {
    let nome = prompt("Informe seu nome: ");
    let sal_bruto = parseFloat(prompt("Informe seu salário bruto: "));
    let desconto;

    if (sal_bruto <= 1000) {
        desconto = 0.08;
    } else if (sal_bruto <= 1500) {
        desconto = 0.085;
    } else {
        desconto = 0.09;
    }

    alert("Nome do funcionário: " + nome);
    alert("Salário bruto: R$" + sal_bruto);
    alert("Taxa aplicada: " + (desconto * 100) + "%");
    alert("Desconto do INSS: R$" + (sal_bruto * desconto));
    alert("Salário líquido: R$" + (sal_bruto - (sal_bruto * desconto)));
}