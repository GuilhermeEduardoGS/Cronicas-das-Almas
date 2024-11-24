var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/acharUsuario", function (req, res) {
    usuarioController.acharUsuario(req, res);
})

router.post("/autoQuiz", function (req, res) {
    usuarioController.autoQuiz(req, res);
})

router.put("/attQuiz", function (req, res) {
    usuarioController.attQuiz(req, res);
});

router.get("/dadosQuiz", function (req, res) {
    usuarioController.dadosQuiz(req, res);
});

router.get("/dadosRCertaQuiz", function (req, res) {
    usuarioController.dadosRCertaQuiz(req, res);
});

router.get("/dadosRErradaQuiz", function (req, res) {
    usuarioController.dadosRErradaQuiz(req, res);
});


module.exports = router;