let Produto=String(prompt(`Escreva o produto que quer comprar: `));
let Preco=(prompt(`Escreva o preço: R$`));
let quantidade=Number(prompt(`Escreva a quantidade de produtos: `));
let promocao = Boolean ;
let resposta = (prompt(`Está em promoção (sim/não)? `));
let valor_s_des = Preco * quantidade ;

if (Preco >= 400 && promocao === true){
    let desconto = "15%"
    valor_total = valor_s_des - (valor_s_des*0.15)
}else if(Preco >= 200 && promocao===true){
    let desconto = "10%"
    valor_total = valor_s_des - (valor_s_des*0.10)
}else{
    desconto="0%"
    valor_total=valor_s_des
}

alert (`Resultado da compra:\nProduto: ${Produto}.\nPreço unidade: R$ ${Preco}.\nQuantidade: ${quantidade}.\nPreço em desconto: R$ ${valor_s_des}. \nDesconto ${desconto}.\nValor total: R$${valor_total}`)