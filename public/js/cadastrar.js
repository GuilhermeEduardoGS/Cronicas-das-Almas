var valido = true;
function valUser (){
    var nome = ipt_nome.value.trim();
    var mensagem = "";

    if(nome == ""){
        mensagem += `O campo Username não pode ser vazio.`
        ipt_nome.style.borderColor = "red"
        valido = false
    }else{
         ipt_nome.style.borderColor = "green"
    }

    msg_valUser.innerHTML = mensagem;

    return valido
}

function valEmail (){
    var email = ipt_email.value.trim();
    var arroba = email.includes("@");
    var ponto = email.includes(".");
    var mensagem = "";

    if(email == ""){
        mensagem += `O campo Email não pode ser vazio.<br>`
        ipt_email.style.borderColor = "red"
        valido = false;
    }else{
        ipt_email.style.borderColor = "green"
   }

    if(!arroba){
        mensagem += `O email precisa conter arroba (@). Ex.: fulano@email.com <br>`
        ipt_email.style.borderColor = "red"
        valido = false;
    }else{
        ipt_email.style.borderColor = "green"
   }
    
    if(!ponto){
        mensagem += `O email precisa conter ponto (.). Ex.: fulano@email.com <br>`
        ipt_email.style.borderColor = "red"
        valido = false;
    }else{
        ipt_email.style.borderColor = "green"
   }
    
    msg_valEmail.innerHTML = mensagem;

    return valido

}

function valConfEmail(){
    var email = ipt_email.value;
    var confemail = ipt_confemail.value.trim();
    var mensagem = ""

    if(confemail == ""){
        mensagem += `O campo Confirmar Email não pode ser vazio.`
        ipt_confemail.style.borderColor = "red"
        valido = false
    }else{
        ipt_confemail.style.borderColor = "green"
   }
    
    if(email != confemail){
        mensagem += `Os emails não coincidem.<br>`
        ipt_confemail.style.borderColor = "red"
        valido = false
    }else{
        ipt_confemail.style.borderColor = "green"
    }

    msg_valConfEmail.innerHTML = mensagem;    
    
    return valido
}

function valSenha (){
    var senha = ipt_senha.value.trim();
    var tamanho = senha.length;
    var esp = /[!@#$%&?_]/.test(senha); // caracteres Especiais validos = "!@#$%&?_"
    var num = /[0-9]/.test(senha);
    var minus = /[a-z]/.test(senha);
    var maius = /[A-Z]/.test(senha);
    var mensagem = "";
    
    if(senha == ""){
        mensagem += `A senha não pode ser vazia.<br>`
        ipt_senha.style.borderColor = "red"
        valido = false
    }else{
        ipt_senha.style.borderColor = "green"
    }

    if(tamanho < 8 || tamanho > 25){
        mensagem += `A senha deve conter entre 8 a 25 caracteres.<br>`
        ipt_senha.style.borderColor = "red"
        valido = false
    }else{
        ipt_senha.style.borderColor = "green"
    }
    
    if(!esp){
        mensagem += `A senha deve conter pelo menos um caractere especial. Ex.: "!", "@", "#", "$", "%", "&", "_"<br>`
        ipt_senha.style.borderColor = "red"
        valido = false
    }else{
        ipt_senha.style.borderColor = "green"
    }
    
    if(!num){
        mensagem += `A senha de conter pelo menos um número.<br>`
        ipt_senha.style.borderColor = "red"
        valido = false
    }else{
        ipt_senha.style.borderColor = "green"
    }
    
    if(!minus){
        mensagem += `A senha deve conter pelo menos uma letra minúscula.<br>`
        ipt_senha.style.borderColor = "red"
        valido = false
    }else{
        ipt_senha.style.borderColor = "green"
    }
    
    if(!maius){
        mensagem += `A senha deve conter pelo menos uma letra maiúscula.<br>`
        ipt_senha.style.borderColor = "red"
        valido = false
    }else{
        ipt_senha.style.borderColor = "green"
    }

    msg_valSenha.innerHTML = mensagem;

    return valido
}

function valConfSenha (){
    var senha = ipt_senha.value
    var confsenha = ipt_confsenha.value.trim()      
    var mensagem = "";

    if(confsenha == ""){
        mensagem += `O campo Confirmar Senha não pode ser vazio.<br>`
        ipt_confsenha.style.borderColor = "red"
        valido = false
    }else{
        ipt_confsenha.style.borderColor = "green"
    }

    if(senha != confsenha){
        mensagem += `As senhas devem ser iguais.<br>`
        ipt_confsenha.style.borderColor = "red"
        valido = false
    }else{
        ipt_confsenha.style.borderColor = "green"
    }
    
    msg_valconfSenha.innerHTML = mensagem;

    return valido
}

function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nome = ipt_nome.value;
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var confEmail = ipt_confemail.value;
    var confSenha = ipt_confsenha.value;

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nome,
        emailServer: email,
        senhaServer: senha
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          setTimeout(() => {
            window.location = "./login.html";
          }, "1000");

        } 
      })
    return false;
  
}

function login(){
    var nome = ipt_nome.value;
    var senha = ipt_senha.value;
    var mensagem = "";

    if(!nome || !senha){
        mensagem += `Preencha todos os campos!`
    }
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome,
            senhaServer: senha
        }),
    }).then(function(resposta){
        console.log("ESTOU NO THEN DO entrar()!", resposta)

        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json);
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
                setTimeout (() => {
                    window.location.href = "./index.html";
                }, 1000)
            });
        } else {
            alert("Houve um erro ao tentar realizar o login!")
            console.log ("Houve um erro ao tentar realizar o login!")
            div_msg.innerHTML = mensagem;
        }
    }).catch(function (erro){
        console.log(erro);
    })
    
    return false
}
  