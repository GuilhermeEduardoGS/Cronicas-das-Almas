var logado = sessionStorage.NOME_USUARIO

window.onload = function logado(){
    verificar()
}

function verificar(){
    if(logado != undefined){
        // document.getElementById(id="botao_acessar_perfil").style.display = 'block';
        document.getElementById(id="botao_acessar_quiz").style.display = 'block';
        document.getElementById(id="botao_acessar_login").style.display = 'none';
        document.getElementById(id="botao_acessar_sair").style.display = 'block';
    }
    else{
        // document.getElementById(id="botao_acessar_perfil").style.display = 'none';
        document.getElementById(id="botao_acessar_quiz").style.display = 'none';
        document.getElementById(id="botao_acessar_sair").style.display = 'none';
        document.getElementById(id="botao_acessar_login").style.display = 'block';
    }
}

function deslogar(){
    
    if(logado != undefined){
        logado == undefined
        sessionStorage.removeItem('EMAIL_USUARIO')
        sessionStorage.removeItem('ID_USUARIO')
        sessionStorage.removeItem('NOME_USUARIO')

        // document.getElementById(id="botao_acessar_perfil").style.display = 'none';
        document.getElementById(id="botao_acessar_quiz").style.display = 'none';
        document.getElementById(id="botao_acessar_sair").style.display = 'none';
        document.getElementById(id="botao_acessar_login").style.display = 'block';
    }
    alert("Saindo da secção")
}