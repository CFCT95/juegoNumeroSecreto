let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no adivinó
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor. Inténtalo de nuevo.');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor. Inténtalo de nuevo.');
        }
        intentos++;
        limpiarInput();
    }
    return;

}

function limpiarInput() {
    document.getElementById('valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if(listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números posibles han sido sorteados. Reinicia el juego para comenzar de nuevo.');
    } else {

        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); 
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
}
}
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();