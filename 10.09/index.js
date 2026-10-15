let usuario = prompt(`Digite seu usuario:`);
let tipoUsuario = Number(prompt(`Digite seu tipo (1, 2 ou 3)`));
let ativo = true;
let tentativas = Number(prompt(`Quantas tentativas precisou?`));

let tipo;
let situacao;

switch (tipoUsuario) {
    case 1:
        tipo = "Administrador";
        break;

    case 2:
        tipo = "Professor";
        break;

    case 3:
        tipo = "Aluno";
        break;

    default:
        tipo = "Tipo de usuário inválido";
        break;
}
if (tipoUsuario >= 4) {
    situacao = "Tipo de usuário inválido";
} else if (ativo === false) {
    situacao = "Usuário bloqueado";
} else if (tentativas <= 3) {
    situacao = "Acesso permitido";
} else if (tentativas >=4){
    situacao = "Quantidade máxima de tentativas atingida";
}
alert (`Usuario: ${usuario};\nTipo: ${tipo}; \nAtivo: ${ativo};\nTentativas: ${tentativas};\nSituação: ${situacao}`);

