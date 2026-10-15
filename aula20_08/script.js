let veirdadeiro=true; //true = verdadeiro
let falso=false;
let decimal=3.13;
let inteiro=10;
let texto = `Olá`;
//console.log(typeof verdadeiro);

if (texto==`Olá`){
  console.log(texto);  
}else{
    console.log("Texto diferente");
}

let opcao=Number(prompt(`Selecione uma opção entre 1 e 3`));
//let opcao2=prompt(`Opção 2`);\\o prompt armazena os valores digitados pelo usuario como string(texto), para utilizarmos esses valores, vamos precisar converter eles para um tipo especifico, ou seja, numero, inteiro, decimal, ou qualquer outro tipo
console.log(typeof opcao2);
switch(opcao){
    case 1:
        console.log(`Opção 1`);
        break;
    case 2:
        console.log(`Opção 2`);
        break;
    case 3:
        console.log(`Opção 3`);
        break;
    default:
        console.log(`Opção invalida`);
        
}

alert (`A opção digitada foi: ${opcao}`);