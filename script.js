// console.log("Caguei nas calças e estou borrado");

// let nome="Davi Batista";
// console.log(nome);

// const pi=3.14;
// console.log(pi)

// let n1=67;
// let n2=67;
// console.log(n2+n1);

// function saudacao(x,y){
//     console.log("Olá, meu nome é "+nome);
// };

// function somar(x,y){
//     console.log(x+y);
// };

// saudacao();
// somar(21,21);

function somarNumeros(){
    let soma=0;
    let continuar=true;

    while(continuar){
        let numero=parseFloat(prompt("Digite um número. Digite 0 para encerrar: "));

        if(isNaN(numero)){
            alert("Por favor, insira um número válido");
        }else{
            soma+=numero;
            console.log(soma);
        }
        continuar=confirm("Deseja adicionar mais um número?");
    }
    alert("A soma dos números é: "+soma);
    console.log("A soma dos números é: "+soma);
}

somarNumeros();
