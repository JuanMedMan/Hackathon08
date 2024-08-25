function contarCaracteres(texto) {
    const frecuencias = {};

    for (const char of texto) {
        if (char.trim()) {
            frecuencias[char] = (frecuencias[char] || 0) + 1;
        }
    }

    const resultado = Object.keys(frecuencias).map(car => ({
        car: car,
        veces: frecuencias[car]
    }));

    return resultado;
}

function solicitarCadena() {
    let cadena = prompt("Ingrese una cadena de caracteres:");

    if (!cadena) {
        alert("Por favor, ingrese una cadena válida.");
        return;
    }

    let frecuenciaCaracteres = contarCaracteres(cadena);

    let mensaje = frecuenciaCaracteres.map(obj => `{car: '${obj.car}', veces: ${obj.veces}}`).join("\n");

    alert(mensaje);
}

solicitarCadena();