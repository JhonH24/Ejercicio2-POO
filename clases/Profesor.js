const Persona = require("./Persona")

class Profesor extends Persona {
    constructor(dni, nombre, direccion, idProfesor, departamento) {
        super(dni, nombre, direccion);
        this.idProfesor = idProfesor;
        this.departamento = departamento;
    }

    getIdProfesor() {
        return this.idProfesor;
    }

    getDepartamento() {
        return this.departamento;
    }

    setIdProfesor(idProfesor) {
        this.idProfesor = idProfesor;
    }

    setDepartamento(departamento) {
        this.departamento = departamento;
    }

    getInfo() {
        super.getInfo()
        let info = `Id_Profesor: ${this.idProfesor}, Departamento: ${this.departamento}`
        console.log(info)
    }

}

module.exports = Profesor;
