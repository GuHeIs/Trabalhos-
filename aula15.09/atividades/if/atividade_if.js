let statusdopedido = prompt("Digite o status do seu pedido (Preparando, A caminho ou Entregue):");

let texto = "";

if (statusdopedido === "Preparando") {
    texto= "Ele vai demorar um tempo, aguarde.";
} 
else if (statusdopedido === "A caminho") {
    texto = "Seu pedido chegará em um instante";
} 
else if (statusdopedido === "Entregue") {
    texto = "Tenha uma ótima refeição.";
} 
else {
    texto = "Ver Detalhes";
}

alert(texto);
