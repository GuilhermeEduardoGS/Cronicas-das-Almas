function editar_username(){
    var aparecer = document.getElementById('ipt_editarNome').style.display;

    if(aparecer == 'none' || aparecer == ""){
        document.getElementById('ipt_editarNome').style.display = 'block';
        document.getElementById('id_botaoEditar').style.display = 'block';
        document.getElementById('id_botaoEditarNome').style.display = 'none';
        document.getElementById('id_botaoVoltar').style.display = 'block';
        // document.getElementById('id_editarSenha').style.display = 'none';
        // document.getElementById('ipt_TeditarNome').style.display = 'block'; 
        // document.getElementById('id_editarEmail').style.display = 'none';
    }
    else{
        document.getElementById('ipt_editarNome').style.display = 'none';
        document.getElementById('id_botaoEditar').style.display = 'none';
        document.getElementById('id_botaoVoltar').style.display = 'none';
        document.getElementById('id_botaoEditarNome').style.display = 'block';
        // document.getElementById('ipt_TeditarNome').style.display = 'none';
        // document.getElementById('id_editarEmail').style.display = 'block';
        // document.getElementById('id_editarSenha').style.display = 'block';
    }


}

function voltar(){
    var aparecer = document.getElementById('ipt_editarNome').style.display;

     if(aparecer === 'none' || aparecer === ""){
         document.getElementById('ipt_editarNome').style.display = 'block';
         document.getElementById('id_botaoEditar').style.display = 'block';
         document.getElementById('id_botaoEditarNome').style.display = 'none';
         document.getElementById('id_botaoVoltar').style.display = 'block';
        }
        else{
        document.getElementById('ipt_editarNome').style.display = 'none';
        document.getElementById('id_botaoEditar').style.display = 'none';
        document.getElementById('id_botaoVoltar').style.display = 'none';
        document.getElementById('id_botaoEditarNome').style.display = 'block';
     }

}
