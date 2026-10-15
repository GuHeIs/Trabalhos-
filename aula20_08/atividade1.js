let nome=String(prompt(`Escreva o nome do aluno: `));
let nota =Number(prompt(`Escreva a nota do aluno de 0 a 10: `));
let frequencia =Number(prompt(`Escreva a frequência do aluno, de 0 a 100: `));
let entregou = (prompt(`O aluno entregou os trabalhos (sim/não)? `));
let aprovado;

if(entregou === "sim"){
    trabalhoEntregue = true
}else{
    trabalhoEntregue = false
}

alert(`Nome: ${nome}\nNota: ${nota}\nFrequência: ${frequencia}\nEntregou trabalho? ${entregou}`);

if(nota>=7 && frequencia >=75 && trabalhoEntregue === true){
    aprovado = true;
}else{
    aprovado = false;
}

switch(aprovado){
    case true:
        alert(`Aluno aprovado`);
        break
        case false:
        alert(`Aluno reprovado`);
        break
        default:
        alert(`Não dito`)
        break
}
