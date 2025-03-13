//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (!nome) {
        alert("Por favor, insira um nome válido!");
        return;
    }
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 participantes!");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<h3>O amigo secreto sorteado é:</h3><li>${amigoSorteado}</li>`;
}