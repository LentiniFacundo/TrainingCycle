export const cerrarCuentaRegresiva = (btnCerrar, cuentaRegresivaDiv) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnCerrar) || e.target.matches(`${btnCerrar} *`)) {
            let $cuentaRegresivaDiv = document.querySelector(cuentaRegresivaDiv);
            document.body.removeChild($cuentaRegresivaDiv)
        };
    });
};