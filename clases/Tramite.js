const Alumno = require("./Alumno");

class Tramite extends Alumno {
    constructor(dni, nombre, direccion, idAlumno, materias, carrera, numero, fecha, estado) {
        super(dni, nombre, direccion, idAlumno, materias, carrera)
        this.numero = numero;
        this.fecha = fecha;
        this.estado = estado;
    }

    getNumero() {
        return this.numero;
    }

    getFecha() {
        return this.fecha;
    }

    getEstado() {
        return this.estado;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    getInfo() {
        super.getInfo()
        let info = `NumeroTramite: ${this.numero}, Fecha: ${this.fecha}, Estado: ${this.estado}`
        console.log(info)
    }

}

module.exports = Tramite;