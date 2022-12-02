import { Ciclo } from "./ClassCiclo.js";

const imprimirCiclo = (selector, arrayCiclos) => {
    let elemento = document.getElementById(selector);
    elemento.insertAdjacentHTML("beforeend", 
    `<tr>
    <td>${arrayCiclos[arrayCiclos.length - 1].id}</td>
    <td>${arrayCiclos[arrayCiclos.length - 1].nombre}</td>
    <td>${arrayCiclos[arrayCiclos.length - 1].segundos}</td>
    <td>${arrayCiclos[arrayCiclos.length - 1].countDownSeg}</td>
    <td><img src="img/Btn-eliminar.svg" class="btn-eliminar" alt="Eliminar ciclo"></td>
    </tr>`);
};

export const agregarCiclo = (btnAgregar, arrayCiclos, divListaCiclos, classListaCiclosVisible, tablaCiclosId) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnAgregar) || e.target.matches(`${btnAgregar} *`)) {
            let $ejercicio = document.getElementById("Ejercicio").value;
            let $segundos = parseInt(document.getElementById("Segundos").value);
            let $countDownSeg = parseInt(document.getElementById("CountDown").value);
            if($ejercicio === '') return alert('Se debe ingresar un nombre al ejercicio');
            if(typeof $ejercicio !== "string") return alert('Solo se aceptan cadenas de texto');
            if(isNaN($segundos)) return alert('Se debe ingresar valores numericos');
            if($segundos <= 0) return alert('Se debe ingresar un valor mayor a 0');
            if(isNaN($countDownSeg)) return alert('Se debe ingresar valores numericos');
            if($countDownSeg <= 0) return alert('Se debe ingresar un valor mayor a 0');
            if($countDownSeg > $segundos) return alert('La cuenta regresiva no puede ser mayor que la cantidad de segundos');
            let ciclo = new Ciclo($ejercicio , $segundos, $countDownSeg);
            arrayCiclos.push(ciclo);
            if(arrayCiclos.length > 0) {
                let $lista = document.querySelector(divListaCiclos);
                $lista.classList.add(classListaCiclosVisible);
                imprimirCiclo(tablaCiclosId, arrayCiclos);
            };
        };
    });
};