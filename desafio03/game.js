// Variáveis globais
let areaEscolhida = '';
let tecnologiaEscolhida = '';
let especializacaoEscolhida = '';
let tecnologiasDesejadas = [];

// Iniciar jogo
document.getElementById('iniciar').addEventListener('click', iniciarJogo);

// Função para iniciar o jogo
function iniciarJogo() {
    // Esconde o botão de iniciar e mostra o jogo
    document.getElementById('iniciar').classList.add('hidden');
    document.getElementById('jogo').classList.remove('hidden');
    
    // Mostrar imagem inicial
    const imagemEscolhaElement = document.getElementById('imagemEscolha');
    imagemEscolhaElement.src = 'inicio.png';  // Aqui você pode escolher a imagem inicial que deseja mostrar

    mostrarPergunta('area');
}

// Função para mostrar as perguntas
function mostrarPergunta(tipo) {
    const questaoElement = document.getElementById('questao');
    const opcoesElement = document.getElementById('opcoes');
    opcoesElement.innerHTML = '';

    if (tipo === 'area') {
        questaoElement.textContent = 'Escolha uma área para seguir:';
        opcoesElement.innerHTML = `
            <button onclick="escolherArea('Front-End')">Front-End</button>
            <button onclick="escolherArea('Back-End')">Back-End</button>
        `;
    } else if (tipo === 'tecnologia') {
        questaoElement.textContent = `Você escolheu ${areaEscolhida}. Agora, escolha uma tecnologia para aprender:`;
        
        // Atualizando as opções de tecnologia de acordo com a área escolhida
        if (areaEscolhida === 'Front-End') {
            opcoesElement.innerHTML = `
                <button onclick="escolherTecnologia('React')">React</button>
                <button onclick="escolherTecnologia('Vue')">Vue</button>
            `;
        } else if (areaEscolhida === 'Back-End') {
            opcoesElement.innerHTML = `
                <button onclick="escolherTecnologia('C#')">C#</button>
                <button onclick="escolherTecnologia('Java')">Java</button>
            `;
        }
    } else if (tipo === 'especializacao') {
        questaoElement.textContent = 'Agora, quer se especializar ou se tornar Fullstack?';
        opcoesElement.innerHTML = `
            <button onclick="escolherEspecializacao('Especialização')">Especialização</button>
            <button onclick="escolherEspecializacao('Fullstack')">Fullstack</button>
        `;
    } else if (tipo === 'tecnologias') {
        questaoElement.textContent = 'Tem mais alguma tecnologia que você gostaria de aprender?';
        opcoesElement.innerHTML = `
            <button onclick="adicionarTecnologia()">Adicionar tecnologia</button>
            <button onclick="finalizarJogo()">Finalizar</button>`;
        
    }
}

// Função para escolher a área
function escolherArea(area) {
    areaEscolhida = area;
    mostrarPergunta('tecnologia');
}

// Função para escolher a tecnologia
function escolherTecnologia(tecnologia) {
    tecnologiaEscolhida = tecnologia;
    mostrarPergunta('especializacao');
}

// Função para escolher especialização ou fullstack
function escolherEspecializacao(tipo) {
    especializacaoEscolhida = tipo;
    mostrarPergunta('tecnologias');
}

// Lista de linguagens de programação válidas
const linguagensValidas = [
    'JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP', 'Go', 'Swift', 'C++', 'Kotlin', 'TypeScript', 'Rust', 'Dart'
];

// Função para adicionar mais tecnologias
function adicionarTecnologia() {
    const novaTecnologia = prompt("Digite a tecnologia que você gostaria de aprender:");

    // Verificar se a tecnologia inserida é válida
    if (novaTecnologia) {
        // Converter para o formato correto (primeira letra maiúscula, o resto minúsculo)
        const tecnologiaFormatada = novaTecnologia.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
        
        // Verifica se a tecnologia inserida está na lista de linguagens válidas
        if (linguagensValidas.includes(tecnologiaFormatada)) {
            tecnologiasDesejadas.push(tecnologiaFormatada);
            alert(`Você escolheu aprender ${tecnologiaFormatada}. Essa é uma ótima escolha!`);
        } else {
            // Exibir mensagem de erro se não for uma linguagem válida
            alert(`Erro: "${tecnologiaFormatada}" não é uma linguagem de programação válida. Tente novamente.`);
        }
    }
    
    // Depois de terminar o loop, exibe a próxima pergunta
    mostrarPergunta('tecnologias');
}


// Função para finalizar o jogo e mostrar o resumo
function finalizarJogo() {
    const resumoElement = document.getElementById('resumo');
    
    // Verificar se o usuário adicionou alguma tecnologia
    let tecnologiasAdicionaisMessage = tecnologiasDesejadas.length === 0 
        ? 'Você não adicionou nenhuma tecnologia adicional.' 
        : `Tecnologias adicionais: ${tecnologiasDesejadas.join(', ')}`;

    // Verificar se a escolha foi especialização e exibir uma mensagem
    let especializacaoMessage = especializacaoEscolhida === 'Especialização' 
        ? 'Você decidiu se especializar na área escolhida.' 
        : 'Você optou por seguir o caminho Fullstack!';

    // Exibir o resumo com as mensagens
    resumoElement.innerHTML = `
        <h3>Resumo das suas escolhas:</h3>
        <p>Área escolhida: ${areaEscolhida}</p>
        <p>Tecnologia escolhida: ${tecnologiaEscolhida}</p>
        <p>${especializacaoMessage}</p>
        <p>${tecnologiasAdicionaisMessage}</p>
    `;

    // Criar e adicionar a mensagem de sucesso
    const mensagemElement = document.createElement('p');
    mensagemElement.classList.add('mensagem-sucesso'); // Aplica a classe de sucesso
    mensagemElement.textContent = 'Você completou o jogo com sucesso!';
    resumoElement.appendChild(mensagemElement); // Adiciona a mensagem ao final do resumo
}


