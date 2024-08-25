function facturación(monto, medioDePago) {
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        switch (medioDePago) {
            case 'E':
                descuento = 0.30;
                break;
            case 'D':
                descuento = 0.20;
                break;
            case 'C': 
                descuento = 0.10;
                break;
        }
    } else if (monto > 400) {
        descuento = 0.40;
    }

    const montoFinal = monto - (monto * descuento);
    return montoFinal;
}

function iniciarFacturacion() {
    let monto = parseFloat(prompt("Ingrese el monto total:"));
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    let medioDePago = prompt("Ingrese el medio de pago:\n'C' para Tarjeta de Crédito\n'D' para Tarjeta de Débito\n'E' para Efectivo").toUpperCase();

    if (medioDePago !== 'C' && medioDePago !== 'D' && medioDePago !== 'E') {
        alert("Por favor, ingrese un medio de pago válido.");
        return;
    }

    let montoFinal = facturación(monto, medioDePago);
    alert(`El monto final a abonar es: $${montoFinal.toFixed(2)}`);
}

iniciarFacturacion();