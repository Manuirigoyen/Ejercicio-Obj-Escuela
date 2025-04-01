import { Alumno } from "./alumnos";

export class Profesor {
    constructor(private nombre: string, private apellido: string, private materia: string, private listadoAlumnos: Alumno[], private faltas: number) {}

    public getNombre(): string { return this.nombre; }
    public getApellido(): string { return this.apellido; }
    public getFaltas(): number { return this.faltas; }
}