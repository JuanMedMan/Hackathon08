function extraerRepetidos(array) {
    const contador = {};
    const repetidos = [];

    for (const num of array) {
        contador[num] = (contador[num] || 0) + 1;
    }

    for (const num in contador) {
        if (contador[num] > 1) {
            repetidos.push(Number(num));
        }
    }

    return repetidos;
}

function solicitarArray() {
    let input = prompt("Ingrese una lista de números separados por comas:");

    if (!input) {
        alert("Por favor, ingrese una lista válida de números.");
        return;
    }

    let arrayNumeros = input.split(",").map(Number);

    if (arrayNumeros.some(isNaN)) {
        alert("Por favor, asegúrese de ingresar solo números positivos.");
        return;
    }

    let numerosRepetidos = extraerRepetidos(arrayNumeros);

    if (numerosRepetidos.length > 0) {
        alert("Números repetidos: " + numerosRepetidos.join(", "));
    } else {
        alert("No hay números repetidos.");
    }
}

solicitarArray();