    function valUser (){
        var user = ipt_nome.value;
        var mensagem = "";
        var valido = true;

        ipt_nome.style.borderColor = ""
        msg_valUser.innerHTML = "";

        if(user == ""){

            mensagem += `O campo Username não pode ser vazio.`
            ipt_nome.style.borderColor = "red"
            valido = false
        }

        msg_valUser.innerHTML = mensagem;

        return valido
    }
    
    function valEmail (){
        var email = ipt_email.value;
        var arroba = email.includes("@");
        var ponto = email.includes(".");
        var mensagem = "";
        var valido = true

        ipt_email.style.borderColor = ""

        if(email == "" ){
            mensagem += `O campo Email não pode ser vazio.<br>`
            ipt_email.style.borderColor = "red"
            valido = false;
        }

        if(!arroba){
            mensagem += `O email precisa conter arroba (@). Ex.: fulano@email.com <br>`
            ipt_email.style.borderColor = "red"
            valido = false;
        }
        
        if(!ponto){
            mensagem += `O email precisa conter ponto (.). Ex.: fulano@email.com <br>`
            ipt_email.style.borderColor = "red"
            valido = false;
        }
        
        msg_valEmail.innerHTML = mensagem;

        return valido

    }
    
    function valConfEmail(){
        var email = ipt_email.value;
        var confemail = ipt_confemail.value;
        var mensagem = ""
        var valido = true

        ipt_confemail.style.borderColor = ""

        if(confemail == ""){
            mensagem += `O campo Confirmar Email não pode ser vazio.`
            ipt_confemail.style.borderColor = "red"
            valido = false
        }
        
        if(email != confemail){
            mensagem += `Os emails não coincidem.<br>`
            ipt_confemail.style.borderColor = "red"
            valido = false
        }

        msg_valconfEmail.innerHTML = mensagem;    
        
        return valido
    }
    
    function valTelefone (){
        var telefone = ipt_telefone.value
        var tamanho = telefone.length;
        var mensagem = "";
        var valido = true

        if(isNaN(telefone) || telefone == ""){
            mensagem += `O campo deve ser preenchido apenas por números.<br>`
            ipt_telefone.style.borderColor = "red"
            valido = false
        }

        if(tamanho < 11){
            mensagem += `O telefone deve ter no minímo 11 caracteres!<br>`
            ipt_telefone.style.borderColor = "red"
            valido = false
        }
        
        msg_valTelefone.innerHTML = mensagem;

        return valido
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
        var valido = true
        
        if(senha == ""){
            mensagem += `A senha não pode ser vazia.<br>`
            ipt_senha.style.borderColor = "red"
            valido = false
        }

        if(tamanho < 8 || tamanho > 25){
            mensagem += `A senha deve conter entre 8 a 25 caracteres.<br>`
            ipt_senha.style.borderColor = "red"
            valido = false
        }
        
        if(!esp){
            mensagem += `A senha deve conter pelo menos um caractere especial. Ex.: "!", "@", "#", "$", "%", "&"<br>`
            ipt_senha.style.borderColor = "red"
            valido = false
        }
        
        if(!num){
            mensagem += `A senha de conter pelo menos um número.<br>`
            ipt_senha.style.borderColor = "red"
            valido = false
        }
        
        if(!minus){
            mensagem += `A senha deve conter pelo menos uma letra minúscula.<br>`
            ipt_senha.style.borderColor = "red"
            valido = false
        }
        
        if(!maius){
            mensagem += `A senha deve conter pelo menos uma letra maiúscula.<br>`
            ipt_senha.style.borderColor = "red"
            valido = false
        }

        msg_valConfSenha.innerHTML = mensagem;

        return valido
    }
    
    function valConfSenha (){
        var senha = ipt_senha.value
        var confsenha = ipt_confsenha.value        
        var mensagem = "";
        var valido = true


        if(confsenha == ""){
            mensagem += `O campo Confirmar Senha não pode ser vazio.<br>`
            ipt_confsenha.style.borderColor = "red"
            valido = false
        }

        if(senha != confsenha){
            mensagem += `As senhas devem ser iguais.<br>`
            ipt_confsenha.style.borderColor = "red"
            valido = false
        }
        
        msg_valSenha.innerHTML = mensagem;

        return valido

        msg_valconfSenha.innerHTML = mensagem;
        

    }
    
    function cadastrar(){
        var cadastro = true;
        
        if(valEmail() === false || valSenha() === false || valTelefone() === false || valConfEmail() === false || valConfSenha() === false){
            cadastro = false;
        }
        if(cadastro){
            alert("Cadastro feito com sucesso")
        }
        
        return cadastro;

    }
