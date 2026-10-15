let campoNome = document.querySelector("#nome");//cria variavel para o campo nome
let campoCategoria = document.querySelector("#categoria");//cria variavel para o campo categoria
let campoPreco = document.querySelector("#preco"); //cria variavel para o campo preço
let campoDescricao = document.querySelector("#desc");//cria variavel para o campo descrição

let botaoVisualizar = document.querySelector("#visualizar");//cria evento de click no botao visualizar
let botaoAdicionar = document.querySelector("#adicionar");//cria evento de click no botao adicionar

let visualNome = document.querySelector("#visualNome");//cria variavel para mostrar o nome do produto
let visualCategoria = document.querySelector("#visualCategoria");//cria variavel para mostrar a categoria do produto
let visualPreco = document.querySelector("#visualPreco");//cria variavel para mostrar o preço do produto
let visualDescricao = document.querySelector("#visualDesc");//cria variavel para mostrar a descrição do produto

let mensagemErro = document.querySelector("#mensagemErro");//cria variavel para mostrar mensagem de erro
let listaItens = document.querySelector("#listaItens");//cria variavel para mostrar lista de itens

botaoVisualizar.addEventListener("click", visualizarItem);//evento de click no botao visualizar
botaoAdicionar.addEventListener("click", adicionarItem);//evento de click no botao adicionar

function validarCampos() {//função para validar os campos
    if (//verifica se os campos estão vazios
        campoNome.value.trim() === "" ||//verifica se o campo nome está vazio
        campoCategoria.value.trim() === "" ||//verifica se o campo categoria está vazio
        campoPreco.value === "" ||//verifica se o campo preço está vazio
        Number(campoPreco.value) <= 0 ||//verifica se o campo preço é menor ou igual a 0
        campoDescricao.value.trim() === ""//verifica se o campo descrição está vazio
    ) {
        mensagemErro.innerText = "Preencha todos os campos corretamente.";//mostra mensagem de erro
        return false;//retorna false se os campos estiverem vazios
    }

    mensagemErro.innerText = "";//limpa a mensagem de erro
    return true;//retorna true se os campos estiverem preenchidos corretamente
}

function visualizarItem() {//função para visualizar o item
    if (validarCampos() === false) {//verifica se os campos estão vazios
        return;//retorna se os campos estiverem vazios
    }

    let nome = campoNome.value;//cria variavel para o nome do produto
    let categoria = campoCategoria.value;//cria variavel para a categoria do produto
    let preco = campoPreco.value;//cria variavel para o preço do produto
    let descricao = campoDescricao.value;//cria variavel para a descrição do produto

    visualNome.innerText = nome;//mostra o nome do produto
    visualCategoria.innerText = "Categoria: " + categoria;//mostra a categoria do produto
    visualPreco.innerText = `R$ ${preco}`;//mostra o preço do produto
    visualDescricao.innerText = descricao;//mostra a descrição do produto
}
function adicionarItem() {//função para adicionar o item
    if (validarCampos() === false) {//verifica se os campos estão vazios
        return;//retorna se os campos estiverem vazios
    }

    let nome = campoNome.value;//cria variavel para o nome do produto
    let categoria = campoCategoria.value;//cria variavel para a categoria do produto
    let preco = campoPreco.value;//cria variavel para o preço do produto
    let descricao = campoDescricao.value;//cria variavel para a descrição do produto

    let novoCard = document.createElement("div");//cria um novo card
    novoCard.className = "card";//cria uma classe para o card

    let tituloCard = document.createElement("h3");//cria um titulo para o card
    tituloCard.innerText = nome;//mostra o nome do produto no card

    let categoriaCard = document.createElement("p");//cria uma categoria para o card
    categoriaCard.innerText = "Categoria: " + categoria;//mostra a categoria do produto no card

    let precoCard = document.createElement("p");//cria um preço para o card
    precoCard.innerText = "R$ " + preco;//mostra o preço do produto no card

    let descricaoCard = document.createElement("p");//cria uma descrição para o card
    descricaoCard.innerText = descricao;//mostra a descrição do produto no card

    novoCard.appendChild(tituloCard);//cria um elemento que está ligado ao card
    novoCard.appendChild(categoriaCard);//cria um elemento que está ligado ao card
    novoCard.appendChild(precoCard);//cria um elemento que está ligado ao card
    novoCard.appendChild(descricaoCard);//cria um elemento que está ligado ao card
    listaItens.appendChild(novoCard);//cria um elemento que está ligado ao card

    campoNome.value = "";//limpa os campos do formulário
    campoCategoria.value = "";//limpa os campos do formulário
    campoPreco.value = "";//limpa os campos do formulário
    campoDescricao.value = "";//limpa os campos do formulário

    visualNome.innerText = "Nome do produto";//mostra o nome do produto
    visualCategoria.innerText = "Categoria";//mostra a categoria do produto
    visualPreco.innerText = "R$ 0,00";//mostra o preço do produto
    visualDescricao.innerText = "Descrição do produto";//mostra a descrição do produto
    mensagemErro.innerText = "";//limpa a mensagem de erro
}