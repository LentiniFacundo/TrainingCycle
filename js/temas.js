const temaOscuro = (btnCambiarTema, claseModoOscuro) => {
            let $selectores = document.querySelectorAll("[data-modo]");
            $selectores.forEach(selector => selector.classList.add(claseModoOscuro));
            let $btnCambiarTema = document.querySelector(btnCambiarTema).setAttribute("data-tema", "oscuro")
            localStorage.setItem("colorTema", "oscuro");
};

const temaClaro = (btnCambiarTema, claseModoOscuro) => {
            let $selectores = document.querySelectorAll("[data-modo]");
            $selectores.forEach(selector => selector.classList.remove(claseModoOscuro));
            let $btnCambiarTema = document.querySelector(btnCambiarTema).setAttribute("data-tema", "claro")
            localStorage.setItem("colorTema", "claro");
};

export const cambiarTema = (btnCambiarTema, claseModoOscuro) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnCambiarTema) || e.target.matches(`${btnCambiarTema} *`)) {
            let $btnCambiarTema = document.querySelector(btnCambiarTema);
            if($btnCambiarTema.getAttribute("data-tema") === "claro") {
                temaOscuro(btnCambiarTema, claseModoOscuro);
            }else {
                temaClaro(btnCambiarTema, claseModoOscuro);
            };
        };
    });
};


export const temaLocalStorage = (claseModoOscuro) => {
    if(localStorage.getItem("colorTema") === null) localStorage.setItem("colorTema", "claro");
    if(localStorage.getItem("colorTema") === "claro") temaClaro("#Tema", claseModoOscuro);
    if(localStorage.getItem("colorTema") === "oscuro") temaOscuro("#Tema", claseModoOscuro);
};