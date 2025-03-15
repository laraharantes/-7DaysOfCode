let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute < 1 || chute > numeroLimite) {
        exibirTextoNaTela('p', `"[INVÁLIDO] Digite um número entre 1 e ${numeroLimite}`);
        return;
    }

    let dica = '';
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        dica = '✅ Acertou!';
    } else {
        if (chute > numeroSecreto) {
            dica = '⬇️ O número secreto é menor';
            exibirTextoNaTela('p', dica);
        } else {
            dica = '⬆️ O número secreto é maior';
            exibirTextoNaTela('p', dica);
        }
        tentativas++;
        limparCampo();
    }

    // Adiciona o chute e a dica no histórico
    let listaHistorico = document.getElementById('lista-historico');
    let itemHistorico = document.createElement('li');
    itemHistorico.textContent = `Chute: ${chute} → ${dica}`;
    listaHistorico.appendChild(itemHistorico);
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('lista-historico').innerHTML = '';

}
