    function valEmail (){
        var email = ipt_email.value;
        var confemail = ipt_confemail.value;
        var mensagem = "";
        
        var arroba = email.includes("@");
        var ponto = email.includes(".");

        if(email != confemail){
            mensagem += `Os emails não coincidem.<br>`
        }

        if(!arroba){
            mensagem += `O email precisa conter arroba (@). Ex.: fulano@email.com <br>`
        }

        if(!ponto){
            mensagem += `O email precisa conter ponto (.). Ex.: fulano@email.com <br>`
        }

        msg_valEmail.innerHTML = mensagem;
    }


    function valSenha (){
        var senha = ipt_senha.value;
        var confsenha = ipt_confsenha.value
        var mensagem = "";

        var tamanho = senha.length;
        // caracteres Especiais validos = "!@#$%&"
        var esp = /[!@#$%&]/.test(senha);
        var num = /[0-9]/.test(senha);
        var minus = /[a-z]/.test(senha);
        var maius = /[A-Z]/.test(senha);

        if(senha == ""){
            mensagem += `A senha não pode ser vazia.<br>`
        }

        if(senha != confsenha){
            mensagem += `As senhas devem ser iguais.<br>`
        }    

        if(tamanho < 8 || tamanho > 25){
            mensagem += `A senha deve conter entre 8 a 25 caracteres.<br>`
        }
        
        if(!esp){
            mensagem += `A senha deve conter pelo menos um caractere especial. Ex.: "!", "@", "#", "$", "%", "&"<br>`
        }
        
        if(!num){
            mensagem += `A senha de conter pelo menos um número.<br>`
        }
        
        if(!minus){
            mensagem += `A senha deve conter pelo menos uma letra minúscula.<br>`
        }
        
        if(!maius){
            mensagem += `A senha deve conter pelo menos uma letra maiúscula.<br>`
        }

        msg_valSenha.innerHTML = mensagem;
    }