var logado = sessionStorage.NOME_USUARIO

window.onload = function logado(){
    verificar()
}

function verificar(){
    if(logado != undefined){
        document.getElementById(id="botao_acessar_perfil").style.display = 'block';
    }
}