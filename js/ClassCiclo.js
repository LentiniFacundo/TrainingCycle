export class Ciclo {
    static id = 0;
    constructor(nombre, segundos, countDownSeg) {
        this.id = ++Ciclo.id;
        this.nombre = nombre;
        this.segundos = segundos;
        this.countDownSeg = countDownSeg;
    }
    get getId() {
        return this.id;
    }
    set setId(nuevoId) {
        this.id = nuevoId;
    }

    get getNombre() {
        return this.nombre;
    }
    set setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    get getSegundos() {
        return this.segundos;
    }
    set setSegundos(nuevoSegundos) {
        this.segundos = nuevoSegundos;
    }

    get getcountDownSeg() {
        return this.countDownSeg;
    }
    set setcountDownSeg(nuevoCountDownSeg) {
        this.countDownSeg = nuevoCountDownSeg;
    }

    segundosAMilisegundos(segundos) {
        let milisegundos = 1000 * segundos;
        return milisegundos;
    };
    
    milisegundosASegundos(milisegundos) {
        let segundos = (milisegundos % (1000 * 60)) / 1000;
        return segundos;
    };
    
    milisegundosAMinutos(milisegundos) {
        let minutos = milisegundos / (1000 * 60);
        return minutos;
    };
    
    alertaSonora(rutaSonido) {
        let alerta = new Audio(rutaSonido);
        return alerta;
    }

    imprimirEnDOM(minutos, segundos, nombreEjercicioId, minutosId, segundosId) {
        document.getElementById(nombreEjercicioId).textContent = `${this.nombre}`;
        document.getElementById(minutosId).textContent = `${minutos}:`;
        if(minutos < 0) minutos = 0;
        if(minutos < 10) document.getElementById(minutosId).textContent = `0${minutos}:`;
        document.getElementById(segundosId).textContent = `${segundos}`;
        if(segundos < 10) document.getElementById(segundosId).textContent = `0${segundos}`;
    }

    cuentaRegresiva(btnIniciar, nombreEjercicioId, minutosId, segundosId) {
        return new Promise((resolve, reject) => {
            let tiempoInicial = new Date().getTime() + this.segundosAMilisegundos(this.getSegundos) + 850;
            let $countDown;
            let controlCuentaRegresiva = setInterval(() => {
            let ahora = new Date().getTime();
            $countDown = tiempoInicial - ahora;
            let $mins = Math.floor(this.milisegundosAMinutos($countDown)),
            $segs = Math.ceil(this.milisegundosASegundos($countDown));
            this.imprimirEnDOM($mins, $segs, nombreEjercicioId, minutosId, segundosId);
            if($countDown <= this.segundosAMilisegundos(this.countDownSeg) && $countDown > 0) this.alertaSonora("./assets/cuenta_regresiva.wav").play();
            if($countDown <= 0) {
                this.alertaSonora("./assets/cuenta_regresiva_cambio.wav").play();
                clearInterval(controlCuentaRegresiva);
                resolve($countDown);
            };
        }, 1000);
        });
    };
};