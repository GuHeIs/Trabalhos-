let preco = Number (prompt("Qual o valor de sua compra? R$: "))
let dinheiro = Number (prompt("Quanto dinheiro você tem? R$: "))

while(dinheiro<preco){
    alert(`Você não pode realizar a compra`);
    dinheiro++
}
    alert("Compra realizada com sucesso")