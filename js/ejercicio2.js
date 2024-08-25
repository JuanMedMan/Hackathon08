function solicitarValores() {
    let cantidad = parseInt(prompt("¿Cuántos valores desea ingresar?"));
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let valores = [];

    for (let i = 0; i < cantidad; i++) {
        let valor = parseFloat(prompt(`Ingrese el valor ${i + 1}:`));
        if (!isNaN(valor)) {
            valores.push(valor);
        } else {
            alert("Por favor, ingrese un valor numérico válido.");
            i--;
        }
    }

    mostrarResultados(valores);
}

function sumarValores(valores) {
    return valores.reduce((a, b) => a + b, 0);
}

function multiplicarValores(valores) {
    return valores.reduce((a, b) => a * b, 1);
}

function obtenerValorMaximo(valores) {
    return Math.max(...valores);
}

function obtenerValorMinimo(valores) {
    return Math.min(...valores);
}

function ordenarValores(valores) {
    return valores.slice().sort((a, b) => a - b);
}

function calcularPromedio(valores) {
    return sumarValores(valores) / valores.length;
}

function obtenerPares(valores) {
    return valores.filter(valor => valor % 2 === 0);
}

function insertarCerosDespuesDePares(valores) {
    let nuevoArray = [];
    valores.forEach(valor => {
        nuevoArray.push(valor);
        if (valor % 2 === 0) {
            nuevoArray.push(0);
        }
    });
    return nuevoArray;
}

function mostrarResultados(valores) {
    let suma = sumarValores(valores);
    let multiplicacion = multiplicarValores(valores);
    let maximo = obtenerValorMaximo(valores);
    let minimo = obtenerValorMinimo(valores);
    let ordenados = ordenarValores(valores);
    let promedio = calcularPromedio(valores);
    let pares = obtenerPares(valores);
    let arrayConCeros = insertarCerosDespuesDePares(valores);

    alert(`
    Valores ingresados: ${valores.join(", ")}
    Suma de los valores: ${suma}
    Multiplicación de los valores: ${multiplicacion}
    Valor máximo: ${maximo}
    Valor mínimo: ${minimo}
    Valores ordenados de forma ascendente: ${ordenados.join(", ")}
    Promedio de los valores: ${promedio.toFixed(2)}
    Valores pares: ${pares.join(", ")}
    Array con ceros después de pares: ${arrayConCeros.join(", ")}
    `);
}

solicitarValores();