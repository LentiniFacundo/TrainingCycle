import { abrirCuentaRegresiva } from "./abrir_cuenta_regresiva.js";
import { eliminarCiclo } from "./eliminar_ciclo.js";
import { cerrarCuentaRegresiva } from "./cerrar_cuenta_regresiva.js";
import { iniciarCiclos } from "./iniciar_ciclos.js";
import { cambiarTema, temaLocalStorage } from "./temas.js";
import { agregarCiclo } from "./agregar_ciclo.js";

const CICLOS = [];

document.addEventListener("DOMContentLoaded", (e) => {
        temaLocalStorage("modo-oscuro");
        cambiarTema("#Tema", "modo-oscuro");
        agregarCiclo(".btn-agregar", CICLOS, ".lista-ciclos", "lista-ciclos-visible", "Ciclos");
        eliminarCiclo(".btn-eliminar", ".lista-ciclos", "lista-ciclos-visible", CICLOS);
        abrirCuentaRegresiva(".btn-abrir-cuenta-regresiva");
        iniciarCiclos(".btn-iniciar", CICLOS, "EjercicioCR", "MinutosCR", "SegundosCR");
        cerrarCuentaRegresiva(".btn-cerrar", "#CuentaRegresiva");
});