let motorista = "Marcos";
let tipoVeiculo = 2;
let horas = 8;
let clienteCadastrado = true;
let ficouDuranteNoite = false;

let valorPorHora;
let valor;
let desconto = 0;
let taxaNoturna = 0;
let tipoVeiculoTexto;


if (horas <= 0) {
    alert("Quantidade de horas inválida");
} 

else {
    switch (tipoVeiculo) {
        case 1:
            valorPorHora = 4;
            tipoVeiculoTexto = "Moto";
            break;

        case 2:
            valorPorHora = 7;
            tipoVeiculoTexto = "Carro";
            break;

        case 3:
            valorPorHora = 10;
            tipoVeiculoTexto = "Utilitário";
            break;

        default:
            alert("Tipo de veículo inválido");
            break;
    }

    if (valorPorHora !== undefined) {

        valor = horas * valorPorHora;

        if (clienteCadastrado && horas >= 8) {
            desconto = valor * 0.20;
        } 
        else if (clienteCadastrado && horas >= 4 && horas <= 7) {
            desconto = valor * 0.10;
        } 
        else if (!clienteCadastrado && horas >= 8) {
            desconto = valor * 0.05;
        } 
        else {
            desconto = 0;
        }

        if (ficouDuranteNoite == true) {
            taxaNoturna = 25;
        }


        let valorFinal = valor - desconto + taxaNoturna;

        alert(
            "Motorista: " + motorista +
            "\nTipo de veículo: " + tipoVeiculoTexto +
            "\nHoras estacionadas: " + horas +
            "\nCliente cadastrado: " + clienteCadastrado +
            "\nFicou durante a noite: " + ficouDuranteNoite +
            "\nValor das horas: R$ " + valor.toFixed(2) +
            "\nDesconto: R$ " + desconto.toFixed(2) +
            "\nTaxa noturna: R$ " + taxaNoturna.toFixed(2) +
            "\nValor final: R$ " + valorFinal.toFixed(2)
        );
    }
}