// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("El amigo ya fue agregado");
        document.getElementById("amigo").value = "";
        return;
    }
    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
    document.getElementById("amigo").value = "";
    amigos.push(nombre);
}

function sortearAmigo() {
    let ganador = document.getElementById("resultado");
    if (amigos.length == 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    ganador.innerHTML = "El ganador es: " + amigos[indice];
}

function reset() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let ganador = document.getElementById("resultado");
    ganador.innerHTML = "";
    amigos = [];
}