let saldo = 500.00;
let opcao = prompt("Bem-vindo ao Caixa Eletrônico!\nEscolha uma opção:\n1 - Verificar Saldo\n2 - Depositar\n3 - Sacar");

switch (opcao) {
    case "1":
        alert(`Seu saldo atual é: R$ ${saldo}`);
        break;

    case "2":
        let valorDeposito = prompt("Digite o valor que deseja depositar:");
        valorDeposito = parseFloat(valorDeposito); 
        
        if (valorDeposito > 0) {
            saldo += valorDeposito;
            alert (`Depósito realizado! Novo saldo: R$ ${saldo}`);
        } else {
            alert ("Valor de depósito inválido.");
        }
        break;

    case "3":
        let valorSaque = prompt("Digite o valor que deseja sacar:");
        valorSaque = parseFloat(valorSaque);

        if (valorSaque > 0 && valorSaque <= saldo) {
            saldo -= valorSaque;
            alert(`Saque realizado! Retire seu dinheiro.\nNovo saldo: R$ ${saldo}`);
        } else if (valorSaque > saldo) {
            alert("Saldo insuficiente para realizar o saque.");
        } else {
            alert("Valor de saque inválido.");
        }
        break;

    default:
        alert("Opção inválida! Cancelando.");
        break
}