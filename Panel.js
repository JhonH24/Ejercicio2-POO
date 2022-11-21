// Importacion xd
const Alumno = require("./clases/Alumno");
const Profesor = require("./clases/Profesor");
const Asignatura = require("./clases/Asignatura");
const Tramite = require("./clases/Tramite");

// Bloque declarativo
const alumno1 = new Alumno("96025658", "Jhon Hernandez", "Barracas", 1, "POO", "Programacion");
const profesor1 = new Profesor(14568548, "Nahuel Correa", "Puerto Madero", 1, "Ilicito");
const asignatura1 = new Asignatura("Ingenieria", "Maipu 215", "Castellano", "Obligatorio", 150, "Segundo Cuatrimestre");
const tramite1 = new Tramite("96025658", "Jhon Hernandez", "Barracas", 1, "POO", "Programacion", 1, "21/11/2022", "Aprobado")

// Metodos
console.log("Datos del Alumno:")
alumno1.getInfo()

console.log("Datos del Profesor:")
profesor1.getInfo()

console.log("Datos de la Asignatura:")
asignatura1.getInfo()

console.log("Datos del tramite:")
tramite1.getInfo()