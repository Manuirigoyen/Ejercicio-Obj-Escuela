import { Alumno } from "./alumnos";
import { Profesor } from "./profesores";
import { sistEduc } from "./sistEduc";

let alumnos: Alumno[] = [
    new Alumno("Manuel", "Irigoyen", 26, 8, 4),
    new Alumno("Lionel", "Messi", 38, 9, 2),
    new Alumno("Esteban", "Dominguez", 33, 6, 8),
];

let profesores: Profesor[] = [
    new Profesor("Juan", "Guerrero", "Matematica", alumnos, 9),
    new Profesor("Braian", "Alvarez", "Historia", alumnos, 1),
    new Profesor("Carmen", "Gonzalez", "Geografia", alumnos, 8),
];

//////////Pruebas//////////

let escuela = new sistEduc(alumnos, profesores);
escuela.setContratarProfesor([new Profesor("Matias", "Hernandez", "Sociales", alumnos, 2)]);
escuela.setMatricularAlumno([new Alumno("Alejandro", "Sanz", 60, 4, 6)]);
escuela.setMatricularAlumno([alumnos[0]]);
console.log(alumnos[1].getComprobarNota());
console.log(alumnos[2].getComprobarNota());
console.log(escuela.getExpulsarAlumno());
escuela.setContratarProfesor([profesores[1]]);
console.log(escuela.getDespedirProfesor()); 
console.log(profesores[3]);
console.log(profesores[1].getFaltas());
console.log(alumnos[2].getActas());