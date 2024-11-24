const listaDeQuestoes = [
    {
        pergunta: "Quem comandava o mundo antes da Primeira Chama?",
        alternativaA: "O Gwyn",
        alternativaB: "Os Gigantes",
        alternativaC: "Os Dragões",
        alternativaD: "O Pigmeu Furtivo",
        alternativaCorreta: "alternativaC"
    },

    {
        pergunta: "Quem tentou recriar a primeira chama?",
        alternativaA: "Gwyn",
        alternativaB: "Seath",
        alternativaC: "Pigmeu Furtivo",
        alternativaD: "Izalith",
        alternativaCorreta: "alternativaD"
    },

    {
        pergunta: "Quem se sacrificou para não deixar a Primeira Chama se apagar?",
        alternativaA: "Gwyn",
        alternativaB: "Seath",
        alternativaC: "Pigmeu Furtivo",
        alternativaD: "Izalith",
        alternativaCorreta: "alternativaA"
    },

    {
        pergunta: "Quem é um traidor?",
        alternativaA: "Gwyn",
        alternativaB: "Seath",
        alternativaC: "Pigmeu Furtivo",
        alternativaD: "Izalith",
        alternativaCorreta: "alternativaB"
    },
    
    {
        pergunta: "Quem fugiu com a Dark Soul?",
        alternativaA: "Gwyn",
        alternativaB: "Seath",
        alternativaC: "Pigmeu Furtivo",
        alternativaD: "Izalith",
        alternativaCorreta: "alternativaC"
    }
];

let correta = false;
let numeroDaQuestaoAtual = 0;
let pontuacaoFinal = 0;
let tentativaIncorreta = 0;
let certas = 0;
let erradas = 0;
let quantidadeDeQuestoes = listaDeQuestoes.length;

function onloadEsconder() {
    document.getElementById('pontuacao').style.display = "none";
    document.getElementById('jogo').style.display = "none";
}

function iniciarQuiz() {
    document.getElementById('pontuacao').style.display = "flex";
    document.getElementById('jogo').style.display = "flex";
    document.getElementById('btnIniciarQuiz').style.display = "none";

    document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes;

    preencherHTMLcomQuestaoAtual(0);

    btnSubmeter.disabled = false;
    btnProx.disabled = true;
    btnTentarNovamente.disabled = true;
}

function preencherHTMLcomQuestaoAtual(index) {
    habilitarAlternativas(true);
    const questaoAtual = listaDeQuestoes[index];
    numeroDaQuestaoAtual = index;

    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1; 
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function submeter() {
    const options = document.getElementsByName("option");

    let hasChecked = false;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true;
            break;
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.");
    } else {
        btnSubmeter.disabled = true;
        habilitarAlternativas(false); 

        checarResposta();
        attQuiz();
        correta = false;
    }
}

function habilitarAlternativas(trueOrFalse) {
    let opcaoEscolhida = trueOrFalse ? false : true;

    primeiraOpcao.disabled = opcaoEscolhida;
    segundaOpcao.disabled = opcaoEscolhida;
    terceiraOpcao.disabled = opcaoEscolhida;
    quartaOpcao.disabled = opcaoEscolhida;
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual];  
    const respostaQuestaoAtual = questaoAtual.alternativaCorreta; 

    const options = document.getElementsByName("option"); 

    let alternativaCorreta = null;

    options.forEach((option) => {
        if (option.value === respostaQuestaoAtual) {
            alternativaCorreta = option.labels[0].id;
        }
    });

    options.forEach((option) => {
        if (option.checked && option.value === respostaQuestaoAtual) {
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg");
            pontuacaoFinal++;
            certas++;
            correta = true;
            document.getElementById("spanCertas").innerHTML = certas;
        } else if (option.checked && option.value !== respostaQuestaoAtual) {
            const wrongLabelId = option.labels[0].id;
            document.getElementById(wrongLabelId).classList.add("text-danger-with-bg");
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg");
            tentativaIncorreta++;
            erradas++;
            document.getElementById("spanErradas").innerHTML = erradas;
        }
    });

    setTimeout(() => {
        avancar();  
    }, 1000);
}

function avancar() {
    if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
        numeroDaQuestaoAtual++;  
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual); 
        btnSubmeter.disabled = false;  
        limparCoresBackgroundOpcoes();  
    } else {
        finalizarJogo();  
    }
}

function limparCoresBackgroundOpcoes() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg");
        document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg");
    });
}

function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function finalizarJogo() {
    let textoParaMensagemFinal = null;
    let classComCoresParaMensagemFinal = null;
    const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes;

    if (porcentagemFinalDeAcertos <= 0.3) {
        textoParaMensagemFinal = "Parece que você não estudou...";
        classComCoresParaMensagemFinal = "text-danger-with-bg";
    } else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
        textoParaMensagemFinal = "Pode melhorar na próxima, hein!";
        classComCoresParaMensagemFinal = "text-warning-with-bg";
    } else if (porcentagemFinalDeAcertos >= 0.9) {
        textoParaMensagemFinal = "Uau, parabéns!";
        classComCoresParaMensagemFinal = "text-success-with-bg";
    }

    textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos) * 100) + "% das questões.";

    document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal;
    document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal);
    document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal;

    document.getElementById('jogo').classList.add("text-new-gray");

    btnSubmeter.disabled = true;  
    btnTentarNovamente.disabled = false;  
}

function tentarNovamente() {
    
    numeroDaQuestaoAtual = 0;
    pontuacaoFinal = 0;
    tentativaIncorreta = 0;
    certas = 0;
    erradas = 0;

    desmarcarRadioButtons(); 
    limparCoresBackgroundOpcoes();  

    document.getElementById('msgFinal').innerHTML = ""; 
    document.getElementById('msgFinal').classList.remove("text-success-with-bg", "text-warning-with-bg", "text-danger-with-bg");

    document.getElementById('spanCertas').innerHTML = "0";
    document.getElementById('spanErradas').innerHTML = "0";
    document.getElementById('spanPontuacaoFinal').innerHTML = "0";

    iniciarQuiz();
}

function attQuiz() {
    var guardarId = sessionStorage.ID_USUARIO
    fetch('/usuarios/attQuiz', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            guardarServer: guardarId, 
            CorretoServer: correta
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log("Update Feito!")
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}