function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const linguagem = document.getElementById("linguagem").value;

    if (nome === "" || idade === "" || linguagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    document.getElementById("mensagem").textContent = 
        `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

    const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO:`);

    if (resposta === "1") {
        document.getElementById("resposta").textContent = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else if (resposta === "2") {
        document.getElementById("resposta").textContent = "Ahh que pena... Já tentou aprender outras linguagens?";
    } else {
        document.getElementById("resposta").textContent = "Resposta inválida. Por favor, responda com 1 ou 2.";
    }

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("linguagem").value = "";


    document.getElementById("nome").focus();

    document.getElementById("mensagem").classList.add("show");
    document.getElementById("resposta").classList.add("show");

    
}

