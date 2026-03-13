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

function somar_numeros(){
    let soma=0;
    let continuar=true;

    while(continuar){
        let numero=parseFloat(prompt("Digite um número. Digite 0 para encerrar: "));

        if(isNaN(numero)){
            alert("Por favor, insira um número válido");
        }else{
            soma+=numero;
        }
        continuar=confirm("Deseja adicionar mais um número?");
    }
    alert("A soma dos números é: "+soma);
    console.log("A soma dos números é: "+soma);
}
somar_numeros();

function contagem_regressiva(){
    for(let i=10;i>0;i--){
        console.log(i);
    }
    console.log("Lançamento realizado!");
}
contagem_regressiva();
*/

function calculo_financeiro(){
    let soma_ganhos=0;
    let soma_gastos=0;

    for(let i=0;i<12;i++){
        let ganhos_mes=parseFloat(prompt("Informe o ganho bruto do "+(i+1)+"° mês: "));
        let gastos_mes=parseFloat(prompt("Informe o gasto total do "+(i+1)+"° mês: "));

        soma_ganhos+=ganhos_mes;
        soma_gastos+=gastos_mes;
    }
    let saldo=soma_ganhos-soma_gastos;

    alert("Ganho bruto anual: R$"+soma_ganhos);
    alert("Gasto anual: R$"+soma_gastos);
    alert("Saldo anual: R$"+saldo);
}
calculo_financeiro();