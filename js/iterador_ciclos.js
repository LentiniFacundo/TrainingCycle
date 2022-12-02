export const iteradorCiclos = (coleccionCiclos) => {
    let index = 0;
    
    return {
        next: () => {
            return (index < coleccionCiclos.length) 
            ? {value: coleccionCiclos[index++], done: false} 
            : {done: true};
        },
        hasNext: () => {
            return index < coleccionCiclos.length;
        },
        reset: () => {
            index = 0;
        },
        currentValue: () => {
            return coleccionCiclos[index];
        }
    }
};
/* export class IteradorCiclos {
    constructor(coleccionCiclos) {
        this.index = 0;
        this.ciclos = coleccionCiclos;
    }

    currentValue() {
        return this.ciclos[this.index];
    }
    hasNext() {
        return this.index < this.ciclos.length;
    }
    next() {
        return this.ciclos[index++];
    }
    reset() {
        this.index = 0;
    }
} */