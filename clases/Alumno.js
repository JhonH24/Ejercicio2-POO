const Persona = require("./Persona")

const Alumno = class Alumno extends Persona {
    #idAlumno
    #materias
    #carrera

    constructor(dni, nombre, direccion, idAlumno, materias, carrera) {
        super(dni, nombre, direccion);
        this.#idAlumno = idAlumno;
        this.#materias = materias;
        this.#carrera = carrera;
    }

    get idAlumno() {
        return this.#idAlumno
    }

    get materias() {
        return this.#materias
    }

    get carrera() {
        return this.#carrera
    }

    set idAlumno(new_idAlumno) {
        this.#idAlumno = new_idAlumno;
    }

    set materias(new_materias) {
        this.#materias = new_materias;
    }

    set carrera(new_carrera) {
        this.#carrera = new_carrera;
    }

    inscribirMateria() {
        console.log("Inscribiendo en materia")
    }

    IniciarTramite() {
        console.log("Iniciando Tramite")
    }

    inscribirCarrera() {
        console.log("Inscribiendo en Carrera")
    }

    getInfo() {
        super.getInfo()
        let info = `ID_alumno: ${this.#idAlumno}, Materias: ${this.#materias}, Carrera: ${this.#carrera}`
        console.log(info)
    }

}

module.exports = Alumno;
