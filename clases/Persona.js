const Persona = class Persona {
    #dni
    #nombre
    #direccion

    constructor(dni, nombre, direccion) {
        this.#dni = dni;
        this.#nombre = nombre;
        this.#direccion = direccion;
    }

    get dni() { //permito que pueda ingresar al valor individualmente
        return this.#dni
    }

    get nombre() {
        return this.#nombre
    }

    get direccion() {
        return this.#direccion
    }

    set dni(new_dni) { // aca permito asignar nuevos valores
        this.#dni = new_dni
    }

    getInfo() { //Aca demuestro que no hace falta los get para obtener informacion
        let info = `Dni: ${this.#dni}, nombre: ${this.#nombre}, direccion: ${this.#direccion}`
        console.log(info)
    }
}

// persona1.dni = 14141414 //aca cambio el valor del dni
module.exports = Persona;