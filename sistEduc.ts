import { Alumno } from "./alumnos";
import { Profesor } from "./profesores";

export class sistEduc {
    private alumnos: Alumno[];
    private profesores: Profesor[];

    constructor(alumnos: Alumno[], profesores: Profesor[]) {
        this.alumnos = alumnos;
        this.profesores = profesores;
    }

    public setMatricularAlumno(nuevosAlumnos: Alumno[]): void {
        nuevosAlumnos.forEach(alumno => {
            let existe = this.alumnos.some(a => a.getNombre() === alumno.getNombre() && a.getApellido() === alumno.getApellido());
            if (!existe) {
                this.alumnos.push(alumno);
                console.log("Se matriculo al alumno: " + alumno.getNombre(), alumno.getApellido());
            } else {
                console.log(`El alumno ${alumno.getNombre()} ${alumno.getApellido()} ya está matriculado.`);
            }
        });
    }

    public getExpulsarAlumno(): string {
        let expulsados = this.alumnos.filter(e => e.getActas() >= 5);
        return expulsados.length ? expulsados.map(e => `El alumno ${e.getNombre()} ${e.getApellido()} ha sido expulsado`).join("\n") : "No hay alumnos para expulsar";
    }

    public setContratarProfesor(nuevosProfesores: Profesor[]): void {
        nuevosProfesores.forEach(profesor => {
            let existe = this.profesores.some(p => p.getNombre() === profesor.getNombre() && p.getApellido() === profesor.getApellido());
            if (!existe) {
                this.profesores.push(profesor);
                console.log("Se contrato al profesor: " + profesor.getNombre(), profesor.getApellido());
                
            } else {
                console.log(`El profesor ${profesor.getNombre()} ${profesor.getApellido()} ya está contratado.`);
            }
        });
    }

    public getDespedirProfesor(): string {
        let despedidos = this.profesores.filter(e => e.getFaltas() >= 7);
        return despedidos.length ? despedidos.map(e => `El profesor ${e.getNombre()} ${e.getApellido()} ha sido despedido`).join("\n") : "No hay profesores para despedir";
    }
}