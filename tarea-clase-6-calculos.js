function calcularMayor(numeros) {
    let numeroMayor = numeros[0]

    for (i = 0; i < numeros.length; i++) {
        if (numeroMayor < numeros[i]) {
            numeroMayor = numeros[i]
        }
    }
    return numeroMayor;
}

function calcularMenor(numeros) {
    let numeroMenor = numeros[0]

    for (i = 0; i < numeros.length; i++) {
        if (numeroMenor > numeros[i]) {
            numeroMenor = numeros[i]
        }
    }
    return numeroMenor;
}

function calcularPromedio(numeros) {
    let promedio = 0

    for (i = 0; i < numeros.length; i++) {
        promedio += numeros[i];
    }

    return (promedio / numeros.length);
}


function calcularPromedioMensual(numeros) {
    return calcularPromedio(numeros) / 12
}

