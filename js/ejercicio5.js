function generarCombinaciones(cadena, longitud) {
    if (longitud === 0) {
        return [""];
    }

    if (cadena.length === 0) {
        return [];
    }

    let combinaciones = [];

    for (let i = 0; i <= cadena.length - longitud; i++) {

        let charActual = cadena[i];

        let subCombinaciones = generarCombinaciones(cadena.slice(i + 1), longitud - 1);

        for (let subCombinacion of subCombinaciones) {
            combinaciones.push(charActual + subCombinacion);
        }
    }

    return combinaciones;
}

function solicitarCadenaYLongitud() {

    let cadena = prompt("Ingrese una cadena de caracteres:");

    if (!cadena) {
        alert("Por favor, ingrese una cadena válida.");
        return;
    }

    let longitud = parseInt(prompt("Ingrese la longitud de las combinaciones:"));

    if (isNaN(longitud) || longitud <= 0 || longitud > cadena.length) {
        alert("Por favor, ingrese una longitud válida.");
        return;
    }

    let combinaciones = generarCombinaciones(cadena, longitud);

    alert(`Combinaciones de "${cadena}" de longitud ${longitud}:\n` + combinaciones.join(", "));
}

solicitarCadenaYLongitud();