let botaoAtualizar = document.querySelector("#atualizar");
let curiosidade = document.querySelector("#curiosidade");
botaoAtualizar.addEventListener("click", atualizarPerfil);
curiosidade.addEventListener("click", mostrarcuriosudade)

function atualizarPerfil(){
    let campoNome=document.querySelector("#nome");
    let campoProfissao=document.querySelector("#profissao");
    let campoCidade=document.querySelector("#cidade");
    let campoDescricao=document.querySelector("#descricao");
    
    let nomePerfil=document.querySelector("#nomePerfil");
    let profissaoPerfil=document.querySelector("#profissaoPerfil");
    let cidadePerfil=document.querySelector("#cidadePerfil");
    let descricaoPerfil=document.querySelector("#descricaoPerfil");

    if(campoNome.value==""){
        nomePerfil.innerText="Informe um nome";
    }else{
        nomePerfil.innerText=campoNome.value;
    }
    profissaoPerfil.innerText=campoProfissao.value;
    cidadePerfil.innerText=campoCidade.value;
    descricaoPerfil.innerText=campoDescricao.value;
}
function mostrarcuriosudade(){
    curiosidadePerfil.innerText=("Meu filme favorito é 'Looney Tunes De Volta a Ação'")
}