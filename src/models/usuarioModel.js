var database = require("../database/config")

// Login

function autenticar(nome, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE nome = '${nome}' AND senha = MD5('${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Cadastro
function cadastrar(nome, email, senha, classe) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, classe);
    
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, classe) VALUES ('${nome}', '${email}', MD5('${senha}'), '${classe}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Achar ID

function acharId(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var idUser = `
                SELECT idUsuario FROM usuario WHERE email = '${email}';
            `;
            console.log("Executando a instrução SQL para SELECT: \n" + idUser);

            database.executar(idUser)
                .then(selectResult => {
                    if (selectResult && selectResult.length > 0) {
                        console.log("Usuário encontrado: ", selectResult[0]);
                        resolve(selectResult[0]);
                    } else {
                        console.log(`Nenhum usuário encontrado com o email: ${email}`);
                        resolve(null);
                    }
                })
                .catch(err => {
                    console.log("Erro ao realizar o SELECT:", err.message);
                    reject(err);
                });
        }, 1000);
    });
}

// Insert automatico no quiz ao fazer login

function autoQuiz(idUsuario) {
    console.log("Função autoQuiz chamada para o idUsuario:", idUsuario); 
    var autoQuiz = `
        INSERT INTO quiz (fkUsuario, rCertas, rErradas) values (${idUsuario}, 0, 0);
    `;
    console.log("Executando a instrução SQL para inserir no quiz: \n" + autoQuiz);

    return database.executar(autoQuiz)
}

// Atualizar placar das respostas certas e erradas do usuario no quiz

function attQuiz(idUsuario, Correto){
    console.log("Atualziar Quiz")
    var attQuizCerta= `
    UPDATE quiz SET rCertas = rCertas + 1 WHERE fkUsuario = ${idUsuario};
    `
    var attQuizErrado= `UPDATE quiz SET rErradas = rErradas + 1 WHERE fkUsuario = ${idUsuario};
    `

    if(Correto){
        return database.executar(attQuizCerta)
    }
    return database.executar(attQuizErrado)

}

// Selects para a dashboard

function dadosQuiz(){
    console.log("Select dos dados")
    
    var classesDash=`
    SELECT classe FROM usuario;
    `
    
    var respCertasDash=`
    SELECT TRUNCATE(AVG(rCertas) , 2) from quiz;
    `
    
    var respErradasDasg=`
    SELECT TRUNCATE(AVG(rErradas) , 2) from quiz;
    `
    
    return database.executar(classesDash, respCertasDash, respErradasDasg);

}

module.exports = {
    autenticar,
    cadastrar,
    autoQuiz,
    acharId,
    attQuiz,
    dadosQuiz  
};