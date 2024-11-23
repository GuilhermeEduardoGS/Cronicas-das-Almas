var database = require("../database/config")

function autenticar(nome, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE nome = '${nome}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

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

function autoQuiz(idUsuario) {
    console.log("Função autoQuiz chamada para o idUsuario:", idUsuario); 
    var autoQuiz = `
        INSERT INTO quiz (fkUsuario, rCertas, rErradas) values (${idUsuario}, 0, 0);
    `;
    console.log("Executando a instrução SQL para inserir no quiz: \n" + autoQuiz);

    return database.executar(autoQuiz)
}


module.exports = {
    autenticar,
    cadastrar,
    autoQuiz,
    acharId
};