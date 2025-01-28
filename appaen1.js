// Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() *numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 5;
while (numeroUsuario != numeroSecreto) { // Bucle infinito
    // Pedimos al usuario que ingrese un número
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición
        // para realizar comilla invertida usar ALT + 96 
        alert(`Adivinaste, el número es : ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        // Incrementamos el contador cuando no acierta
        intentos = intentos ++;
        if (intentos > maximosIntentos) {
            alert("Lo siento, has llegado al número máximo de intentos");
            break;
        // No acertamos, fue falsa la condición
    }
}
}