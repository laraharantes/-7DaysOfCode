let entradaAtual = '';
let primeiroNumero = null;
let operacaoAtual = null;

function adicionarNumero(numero) {
  entradaAtual += numero;
  atualizarVisor();
}

function limparVisor() {
  entradaAtual = '';
  primeiroNumero = null;
  operacaoAtual = null;
  atualizarVisor();
}

function escolherOperacao(operacao) {
  if (entradaAtual === '') return;
  primeiroNumero = parseFloat(entradaAtual);
  entradaAtual = '';
  operacaoAtual = operacao;
}

function calcularResultado() {
  if (primeiroNumero === null || entradaAtual === '') return;
  let segundoNumero = parseFloat(entradaAtual);
  let resultado;

  switch (operacaoAtual) {
    case '+':
      resultado = primeiroNumero + segundoNumero;
      break;
    case '-':
      resultado = primeiroNumero - segundoNumero;
      break;
    case '*':
      resultado = primeiroNumero * segundoNumero;
      break;
    case '/':
      resultado = segundoNumero !== 0 ? primeiroNumero / segundoNumero : 'Erro';
      break;
    default:
      return;
  }

  entradaAtual = resultado.toString();
  primeiroNumero = null;
  operacaoAtual = null;
  atualizarVisor();
}

function atualizarVisor() {
  document.getElementById('visor').value = entradaAtual;
}
