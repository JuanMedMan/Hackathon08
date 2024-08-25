function calcularIMC() {
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos (kg):"));
    let altura = parseFloat(prompt("Ingrese su altura en metros (m):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos para el peso y la altura.");
        return;
    }

    let imc = peso / (altura * altura);

    imc = imc.toFixed(2);

    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        clasificacion = "Obesidad grado 1";
    } else if (imc >= 35 && imc < 39.9) {
        clasificacion = "Obesidad grado 2";
    } else {
        clasificacion = "Obesidad grado 3";
    }

    alert(`IMC: ${imc}, Clasificación: ${clasificacion}`);
}

calcularIMC();