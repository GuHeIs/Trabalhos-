let campoNome = document.querySelector("#nome");
let campoCategoria = document.querySelector("#categoria");
let campoData = document.querySelector("#data");
let campoDescricao = document.querySelector("#descricao");
let botaoCadastrar = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let listaEventos = document.querySelector("#listaEventos");
botaoCadastrar.addEventListener("click", cadastrarEvento);
function validarCampos() {
    if (
        campoNome.value.trim() === "" ||
        campoCategoria.value.trim() === "" ||
        campoData.value === "" ||
        campoDescricao.value.trim() === ""
    ) {
        mensagem.innerText = "Complete os campos";
        return false;
    }

    mensagem.innerText = "";
    return true;
}
function cadastrarEvento() {
    if (!validarCampos()) {
        return;
    }
    let novoEvento = document.createElement("div");
    novoEvento.className = "evento";

    let titulo = document.createElement("h3");
    titulo.innerText = campoNome.value;

    let categoria = document.createElement("p");
    categoria.className = "categoria";
    categoria.innerText = "Categoria: " + campoCategoria.value;

    let data = document.createElement("p");
    data.className = "data";
    data.innerText = "Data: " + campoData.value;

    let descricao = document.createElement("p");
    descricao.innerText = campoDescricao.value;

    let botaoSelecionar = document.createElement("button");
    botaoSelecionar.innerText = "Selecionar";
    botaoSelecionar.type = "button";
    botaoSelecionar.addEventListener("click", function() {
        novoEvento.classList.toggle("selecionado");
    });
    novoEvento.appendChild(titulo);
    novoEvento.appendChild(categoria);
    novoEvento.appendChild(data);
    novoEvento.appendChild(descricao);
    novoEvento.appendChild(botaoSelecionar);
    listaEventos.appendChild(novoEvento);
    campoNome.value = "";
    campoCategoria.value = "";
    campoData.value = "";
    campoDescricao.value = "";
}