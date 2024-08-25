function generarPiramideDiamante(longitud) {
    let piramide = "";

    for (let i = 1; i <= longitud; i++) {
        piramide += "*".repeat(2 * i - 1) + "\n";
    }

    for (let i = longitud - 1; i >= 1; i--) {
        piramide += "*".repeat(2 * i - 1) + "\n";
    }

    return piramide;
}

function solicitarLongitud() {
    let longitud = parseInt(prompt("Ingrese la longitud de los lados de la pirámide:"));

    if (isNaN(longitud) || longitud <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let piramide = generarPiramideDiamante(longitud);
    alert(piramide);
}

solicitarLongitud();