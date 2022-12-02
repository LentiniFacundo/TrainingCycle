export const abrirCuentaRegresiva = (btnAbrirCuentaRegresiva) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnAbrirCuentaRegresiva)) {
            if(document.getElementById("CuentaRegresiva")) return alert("La cuenta regresiva ya esta abierta.");
            let $fragmento = document.createDocumentFragment();
            let $cuentaRegresivaDiv = document.createElement("div");
            let $nombreEjercicio = document.createElement("h2");
            let $reloj = document.createElement("div");
            $reloj.setAttribute("class", "reloj");
            let $minutos = document.createElement("h3");
            let $segundos = document.createElement("h3");
            $minutos.textContent = "00:";
            $segundos.textContent = "00";
            let $btnIniciar = document.createElement("button");
            let $btnCerrar = document.createElement("button");
            $btnCerrar.setAttribute("class", "btn-cerrar");
            $btnIniciar.setAttribute("class", "btn-iniciar");
            $cuentaRegresivaDiv.setAttribute("class", "cuenta-regresiva");
            $cuentaRegresivaDiv.setAttribute("id", "CuentaRegresiva");
            $cuentaRegresivaDiv.setAttribute("data-modo", "")
            $nombreEjercicio.setAttribute("id", "EjercicioCR");
            $minutos.setAttribute("id", "MinutosCR");
            $segundos.setAttribute("id", "SegundosCR");
            $reloj.insertAdjacentElement("beforeend", $minutos);
            $reloj.insertAdjacentElement("beforeend", $segundos);
            $cuentaRegresivaDiv.insertAdjacentElement("beforeend", $nombreEjercicio);
            $cuentaRegresivaDiv.insertAdjacentElement("beforeend", $reloj);
            $cuentaRegresivaDiv.insertAdjacentElement("beforeend", $btnIniciar);
            $cuentaRegresivaDiv.insertAdjacentElement("beforeend", $btnCerrar);
            $fragmento.appendChild($cuentaRegresivaDiv);
            document.body.appendChild($fragmento);
        }
    })
};