function permutar(cadena) {

    if (cadena.length === 1) {
        return [cadena];
    }

    let permutaciones = [];

    for (let i = 0; i < cadena.length; i++) {

        let charActual = cadena[i];

        let subcadena = cadena.slice(0, i) + cadena.slice(i + 1);

        let subPermutaciones = permutar(subcadena);

        for (let permutacion of subPermutaciones) {
            permutaciones.push(charActual + permutacion);
        }
    }

    return permutaciones;
}

function solicitarCadena() {
    let cadena = prompt("Ingrese una cadena de caracteres:");

    if (!cadena) {
        alert("Por favor, ingrese una cadena válida.");
        return;
    }

    let permutaciones = permutar(cadena);

    alert(`Permutaciones de "${cadena}":\n` + permutaciones.join(", "));
}

solicitarCadena();