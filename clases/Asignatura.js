const Carrera = require("./Carrera")

const Asignatura = class Asignatura extends Carrera {
    #nombre
    #tipo
    #horas
    #cuatrimestre

    constructor(nombreCarrera, sede, nombre, tipo, horas, cuatrimestre) {
        super(nombreCarrera, sede);
        this.#nombre = nombre;
        this.#tipo = tipo;
        this.#horas = horas;
        this.#cuatrimestre = cuatrimestre;
    }

    get nombre() {
        return this.#nombre;
    }

    get tipo() {
        return this.#tipo;
    }

    get horas() {
        return this.#horas;
    }

    get cuatrimestre() {
        return this.#cuatrimestre;
    }

    set nombre(new_nombre2) {
        this.#nombre = new_nombre2;
    }

    set tipo(new_tipo) {
        this.#tipo = new_tipo;
    }

    set horas(new_horas) {
        this.#horas = new_horas;
    }

    set cuatrimestre(new_cuatrimestre) {
        this.#cuatrimestre = new_cuatrimestre;
    }

    getInfo() {
        super.getInfo()
        let info = `Nombre_Asignatura: ${this.#nombre}, Tipo: ${this.#tipo}, Horas: ${this.#horas}, Cuatrimestre: ${this.#cuatrimestre}`
        console.log(info);
    }

}

module.exports = Asignatura;