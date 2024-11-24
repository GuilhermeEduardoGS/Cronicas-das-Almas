var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nome, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        nome: resultadoAutenticar[0].nome,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                    });
                                 
                    }
                    else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("nome e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var classe = req.body.classeServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else if (classe == undefined) {
        res.status(400).send("Sua classe está undefined!");
    } 
    else {

        usuarioModel.cadastrar(nome, email, senha, classe)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
                    console.log(resultado)

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function acharUsuario(req, res){
    var email = req.body.emailServer;
    console.log(email)

    usuarioModel.acharId(email)
            .then(
                function (resultadoAcharId) {
                    console.log(`\nResultados encontrados: ${resultadoAcharId ? 1 : 0}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAcharId)}`);

                    if (resultadoAcharId && resultadoAcharId.length === 1) {
                        console.log(resultadoAcharId);
                        res.status(200).json(resultadoAcharId);
                    }
                    else if (resultadoAcharId && resultadoAcharId.length === 0) {
                        res.status(403).send("Id não encontrado");
                    }
                    else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function autoQuiz(req, res) {
    console.log("Função autoQuiz no controller foi chamada!");
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.autoQuiz(idUsuario)
        .then(result => {
            console.log("Quiz criado com sucesso:", result);
            res.status(201).json({
                message: "Quiz criado com sucesso",
                quizId: result.insertId
            });
        })
        .catch(err => {
            console.log("Erro ao criar o quiz:", err);
            res.status(500).json({
                message: "Erro ao criar o quiz",
                error: err.message || "Erro desconhecido"
            });
        });
}

function attQuiz(req, res) {
    var guardarID = req.body.guardarServer;
    var correto = req.body.CorretoServer;
    console.log(guardarID)
    usuarioModel.attQuiz(guardarID, correto)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function dadosQuiz(req, res){
    console.log('Dados para a dash')
    usuarioModel.dadosQuiz()
    .then(
        function (resultado){
            res.json(resultado)
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar dados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    autenticar,
    cadastrar,
    acharUsuario,
    autoQuiz,
    attQuiz,
    dadosQuiz
}