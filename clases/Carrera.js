const Carrera = class Carrera {
    #nombreCarrera
    #sede

    constructor(nombreCarrera, sede) {
        this.#nombreCarrera = nombreCarrera;
        this.#sede = sede;
    }

    get nombreCarrera() {
        return this.#nombreCarrera;
    }

    get sede() {
        return this.#sede;
    }

    set nombreCarrera(new_nombreCarrera) {
        this.#nombreCarrera = new_nombreCarrera;
    }

    set sede(new_sede) {
        this.#sede = new_sede;
    }

    getInfo() {
        let info = `Nombre_Carrera: ${this.#nombreCarrera}, Sede: ${this.#sede}`
        console.log(info)
    }

}

module.exports = Carrera;