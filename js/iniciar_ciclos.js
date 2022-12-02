import { iteradorCiclos } from "./iterador_ciclos.js";

const deshabilitarBtns = () => {
    document.querySelectorAll("input").forEach(input => input.setAttribute("disabled", "true"));
    document.getElementById("Btn-agregar").setAttribute("disabled", "true")
    document.querySelector(".btn-iniciar").setAttribute("disabled", "true");
    document.querySelector(".btn-cerrar").setAttribute("disabled", "true");
    document.querySelectorAll(".btn-eliminar").forEach(boton => boton.setAttribute("disabled", "true"));
};

const habilitarBtns = () => {
    document.querySelectorAll("input").forEach(input => input.removeAttribute("disabled"));
    document.getElementById("Btn-agregar").removeAttribute("disabled");
    document.querySelector(".btn-iniciar").removeAttribute("disabled");
    document.querySelector(".btn-cerrar").removeAttribute("disabled");
    document.querySelectorAll(".btn-eliminar").forEach(boton => boton.removeAttribute("disabled"));
};

const desactivarSecciones = () => {
    document.getElementById("NuevoCiclo").classList.add("inactiva");
    document.getElementById("ListaCiclos").classList.add("inactiva");
};

const activarSecciones = () => {
    document.getElementById("NuevoCiclo").classList.remove("inactiva");
    document.getElementById("ListaCiclos").classList.remove("inactiva");
};

export const iniciarCiclos = (btnIniciar, arrayCiclos, nombreEjercicioId, minutosId, segundosId) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnIniciar)) {
            let iterador = iteradorCiclos(arrayCiclos);
            deshabilitarBtns();
            desactivarSecciones();
            let cuentaRegAsincrona = async () => {
                if(!iterador.hasNext()) {
                    habilitarBtns();
                    activarSecciones();
                    return alert('No hay ciclos programados.');
                };
                let ciclo = await iterador.next().value.cuentaRegresiva(btnIniciar, nombreEjercicioId, minutosId, segundosId);
                while(iterador.hasNext() && ciclo <= 0) await iterador.next().value.cuentaRegresiva(btnIniciar, nombreEjercicioId, minutosId, segundosId);  
                habilitarBtns();
                activarSecciones();
            };
            cuentaRegAsincrona();
        };
    });
};