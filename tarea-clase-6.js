/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $BOTON_CANTIDAD_INTEGRANTES = document.querySelector("#ingresar-integrantes");
const $BOTON_CALCULAR_EDAD = document.querySelector("#calcular-edad");
const $BOTON_REINICIAR_EDAD = document.querySelector("#reiniciar-edad");

$BOTON_CANTIDAD_INTEGRANTES.onclick = function () {

    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;

    if (cantidadIntegrantes <= 0) {
        return alert("Ingresá un valor mayor a 0");
    }

    for (i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrantes(i);
    }

    mostrarElemento("#calculo-edad");

    return false;
}

function crearIntegrantes(cantidadIntegrantes) {

    const $divIntegrante = document.createElement("div");
    $divIntegrante.className = "integrante";

    const $labelEdad = document.createElement("label");
    $labelEdad.textContent = `Edad del integrante #${cantidadIntegrantes + 1} `;

    const $inputEdad = document.createElement("input");
    $inputEdad.type = "number";
    $inputEdad.classList = "edad";

    $divIntegrante.appendChild($labelEdad);
    $divIntegrante.appendChild($inputEdad);

    const $divIntegrantes = document.querySelector("#integrantes")
    $divIntegrantes.appendChild($divIntegrante);

}

$BOTON_CALCULAR_EDAD.onclick = function () {

    const edadIntegrantes = document.querySelectorAll(".edad");
    const edades = []
    for (i = 0; i < edadIntegrantes.length; i++) {
        if (Number(edadIntegrantes[i].value <= 0)) {
            alert("Las edades ingresadas no pueden ser menor a 0.")
            return false;
        }
        edades.push(Number(edadIntegrantes[i].value));

    
    }

    mostrarMensaje("#edad-mayor", calcularMayor(edades));
    mostrarMensaje("#edad-menor", calcularMenor(edades));
    mostrarMensaje("#edad-promedio", calcularPromedio(edades).toFixed(0));

    mostrarElemento("#mensajes-edades");
    mostrarElemento("#ingreso-salarios");
    ocultarElemento("#calculo-edad");

    return false;
}

function mostrarMensaje(tipo, valor) {
    let mensaje = document.querySelector(tipo)
    mensaje.textContent = valor;
}

$BOTON_REINICIAR_EDAD.onclick = function () {
    reiniciarEdad()
    return false;
}

function removerElementos(elemento) {
    const $elementos = document.querySelectorAll(elemento);
    for (i = 0; i < $elementos.length; i++) {
        $elementos[i].remove();
    }
}

function reiniciarEdad() {
    removerElementos(".integrante");
    ocultarElemento("#mensajes-edades");
    ocultarElemento("#calculo-edad");
}

function mostrarElemento(elemento) {
    let $elemento = document.querySelector(elemento);
    $elemento.className = "";

}

function ocultarElemento(elemento) {
    let $elemento = document.querySelector(elemento);
    $elemento.className = "oculto";
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $BOTON_INGRESAR_SALARIO = document.querySelector("#ingresar-salario");
const $BOTON_CALCULAR_SALARIO = document.querySelector("#calcular-salarios");
const $BOTON_REINICIAR_SALARIOS = document.querySelector("#reiniciar-salarios");

$BOTON_INGRESAR_SALARIO.onclick = function () {
    ocultarElemento("#ingreso-salarios");

    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;

    for (i = 1; i <= cantidadIntegrantes; i++) {
        crearCantidadSalarioIngresar(i);
    }

    mostrarElemento("#calcular-salarios")
    mostrarElemento("#reiniciar-salarios")

    return false

}

function crearCantidadSalarioIngresar() {

    const $divSalarios = document.querySelector("#salarios");

    const $divSalarioIntegrante = document.createElement("div");
    $divSalarioIntegrante.classList = "salario";

    const $ingresarSalarioLabel = document.createElement("label");
    $ingresarSalarioLabel.textContent = `Salario anual integrante #${i}`;

    const $ingresarSalarioInput = document.createElement("input");
    $ingresarSalarioInput.type = "number";
    $ingresarSalarioInput.setAttribute("id", "salario-integrante");


    $divSalarios.appendChild($divSalarioIntegrante);
    $divSalarioIntegrante.appendChild($ingresarSalarioLabel);
    $divSalarioIntegrante.appendChild($ingresarSalarioInput);

}

$BOTON_CALCULAR_SALARIO.onclick = function () {
    const salarios = document.querySelectorAll("#salario-integrante");

    const salarioIntegrantes = [];
    

    for (i = 0; i < salarios.length; i++) {
        if (Number(salarios[i].value) <= 0) {
            continue;
        }
        salarioIntegrantes.push(Number(salarios[i].value));
    }

    if (salarioIntegrantes == false){
        alert("Uno de los salarios que ingresaste es incorrecto");
        return false;
    }

    mostrarElemento("#mensajes-salarios");

    mostrarMensaje("#salario-anual-mayor", calcularMayor(salarioIntegrantes));
    mostrarMensaje("#salario-anual-menor", calcularMenor(salarioIntegrantes));
    mostrarMensaje("#salario-anual-promedio", calcularPromedio(salarioIntegrantes).toFixed(2));
    mostrarMensaje("#salario-mensual-promedio", calcularPromedioMensual(salarioIntegrantes).toFixed(2));


    return false;
}

$BOTON_REINICIAR_SALARIOS.onclick = function () {

    mostrarElemento("#ingresar-integrantes");
    reiniciarSalarios();
    reiniciarEdad();

    return false;
}

function reiniciarSalarios() {
    removerElementos(".salario");
    ocultarElemento("#mensajes-salarios");
    ocultarElemento("#calcular-salarios");
    ocultarElemento("#reiniciar-salarios");
}
