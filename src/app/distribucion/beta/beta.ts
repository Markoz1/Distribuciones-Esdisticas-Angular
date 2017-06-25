import { Distribucion } from '../distribucion';

export class Beta extends Distribucion {
    public numero: number;
    public alfa: number;
    public beta: number;
    public localizacion: number;

    constructor(id: number, titulo: string, numero: number, alfa: number, beta: number, localizacion: number) {
        super(id, titulo);
        this.numero = numero;
        this.alfa = alfa;
        this.beta = beta;
        this.localizacion = localizacion;
    }

    public getDatos(): number[] {
        var arreglo = [this.numero, this.alfa, this.beta, this.localizacion];
        return arreglo;
    }
}