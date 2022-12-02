import { Ciclo } from "./ClassCiclo.js";

export const eliminarCiclo = (btnEliminar, listaCiclos, listaCiclosVisible, arrayCiclos) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnEliminar)) {
            let $indice = parseInt(e.target.closest("tr").firstElementChild.innerText);
            $indice = arrayCiclos.findIndex(c => c.id === $indice);
            arrayCiclos.splice($indice, 1);
            e.target.closest("tr").remove();
            if(arrayCiclos.length < 1) {
                Ciclo.id = 0;
                let $lista = document.querySelector(listaCiclos);
                $lista.classList.remove(listaCiclosVisible);
            };
        };
    });
};