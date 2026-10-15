let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "))
let confirmacao = confirm ("Você deseja ver o texto digitado?");

/*
if(confirmacao){// verdadeiro
//if(!confirmacao){ falso
//if(confirmacao==true){
    alert (`O seu nome é ${nome} e sua idade é ${idade}`);
    if (idade>18){
        alert (`Você é maior de idade.`);
    }
}else{
    alert (`Você não quis ver o texto digitado.`)
}

switch (idade){
    case 18:
        alert (`Você tem 18 anos.`);
        break;
    case 19:
        alert (`Você tem 19 anos.`);
        break;
    default:
        alert(`Você não tem  18 nem 19 anos.`);
        break;
}
while(idade<18){
    alert(`Você é menor de idade`);
    idade++
    //idade=idade+1
}
alert(`Você é maior de idade.`)

for(let i=0;i<10;i++){
  alert(`Contagem: ${i}`);
}

//Operadores logicos: && (e), || (ou), !(nao)
/*Operadors aritiméticos: 
+ Adição
- Subtração
* Multiplicação
** Exponenciação
/ Divisão
% Resto da divisão
++ incremento
-- Decremento

Comparadores: ==, ===, !=, !==, >, <, >=, <=

== igualdade (valor)
=== igualdade escrita (valor e tipo)
!= Diferente (valor)
!== Diferente escrita (valor e tipo)
> maior que
< menor que
>= maior ou igual que
<= menor ou igual que
*/

//Operador ternário: condição ? valor_se verdadeiro : valor_se_falsoo
//let pode_votar=idade>=16 ?"Você pode votar." : "Você não pode votar";
//alert (pode_votar)]


alert (mensagem());
mensagem2();
alert (soma(5,10));
alert (soma(10,20));

function mensagem(){
    return "Olá mundo!"
}


function mensagem2(){
    alert ("Olá mundo!2");
}

function soma(a,b){
    return a+b
}
