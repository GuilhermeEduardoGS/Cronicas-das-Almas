    function valUser (){
        var user = ipt_nome.value;
        var mensagem = ""

        if(user = ''){
            mensagem += `O campo Username não pode ser vazio.`
            ipt_nome.style.borderColor = "red"
        }

        msg_valUser.innerHTML = mensagem;

        return true
    }

    function valEmail (){
        var email = ipt_email.value;
        var arroba = email.includes("@");
        var ponto = email.includes(".");
        var mensagem = "";
        valEmail = false
        
        if(email == "" ){
            mensagem += `O campo Email não pode ser vazio.`
            ipt_email.style.borderColor = "red"
        }

        if(!arroba){
            mensagem += `O email precisa conter arroba (@). Ex.: fulano@email.com <br>`
            ipt_email.style.borderColor = "red"
        }

        if(!ponto){
            mensagem += `O email precisa conter ponto (.). Ex.: fulano@email.com <br>`
            ipt_email.style.borderColor = "red"
        }

        msg_valEmail.innerHTML = mensagem;

        return true

    }

    function valConfEmail(){
        var confemail = ipt_confemail.value;
        valConfEmail = false

        if(confemail == ""){
            mensagem += `O campo Confirmar Email não pode ser vazio.`
            ipt_email.style.borderColor = "red"
        }

        if(email != confemail){
            mensagem += `Os emails não coincidem.<br>`
            ipt_email.style.borderColor = "red"
        }
        
        return true
    }

    function valTelefone (){
        var telefone = Number(ipt_telefone.value)
        var tamanho = telefone.length;
        var mensagem = "";
        valTelefone = false

        if(!isNaN){
            mensagem += `O campo deve ser preenchido apenas por números.`
            ipt_telefone.style.borderColor = "red"
        }

        if(tamanho < 11){
            mensagem += `O telefone deve ter no minímo 11 caracteres!`
            ipt_telefone.style.borderColor = "red"
        }

        msg_valTelefone.innerHTML = mensagem;

        return true
    }

    function valSenha (){
        var senha = ipt_senha.value;
        var tamanho = senha.length;
        // caracteres Especiais validos = "!@#$%&"
        var esp = /[!@#$%&]/.test(senha);
        var num = /[0-9]/.test(senha);
        var minus = /[a-z]/.test(senha);
        var maius = /[A-Z]/.test(senha);
        var mensagem = "";
        valSenha = false
        
        if(senha == ""){
            mensagem += `A senha não pode ser vazia.<br>`
            ipt_senha.style.borderColor = "red"
        }

        if(tamanho < 8 || tamanho > 25){
            mensagem += `A senha deve conter entre 8 a 25 caracteres.<br>`
            ipt_senha.style.borderColor = "red"
        }
        
        if(!esp){
            mensagem += `A senha deve conter pelo menos um caractere especial. Ex.: "!", "@", "#", "$", "%", "&"<br>`
            ipt_senha.style.borderColor = "red"
        }
        
        if(!num){
            mensagem += `A senha de conter pelo menos um número.<br>`
            ipt_senha.style.borderColor = "red"
        }
        
        if(!minus){
            mensagem += `A senha deve conter pelo menos uma letra minúscula.<br>`
            ipt_senha.style.borderColor = "red"
        }
        
        if(!maius){
            mensagem += `A senha deve conter pelo menos uma letra maiúscula.<br>`
            ipt_senha.style.borderColor = "red"
        }

        msg_valSenha.innerHTML = mensagem;

        return true
    }

    function valConfSenha (){
        var confsenha = ipt_confsenha.value        
        var mensagem = "";

        if(confsenha == ""){
            mensagem += `O campo Confirmar Senha não pode ser vazio.<br>`
            ipt_confsenha.style.borderColor = "red"
        }

        if(senha != confsenha){
            mensagem += `As senhas devem ser iguais.<br>`
            ipt_confsenha.style.borderColor = "red"
        }   

    }

    function cadastrar(){

        var cadastro = true;

        if(valEmail() || valSenha == "" || valTelefone == ""){
            cadastro = false
        }
  
    }