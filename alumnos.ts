export class Alumno {
    constructor(private nombre: string, private apellido: string, private edad: number, private nota: number, private actas: number) {}

    public getComprobarNota(): string {
        let estaAprobado = this.nota > 7;
        return `¿El alumno/a ${this.nombre} ${this.apellido} está aprobado? ${estaAprobado ? "Sí" : "No"}`;
    }

    public getNombre(): string { return this.nombre; }
    public getApellido(): string { return this.apellido; }
    public getActas(): number { return this.actas; }
}