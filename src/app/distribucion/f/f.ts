import { Distribucion } from '../distribucion';

export class F extends Distribucion {
  public numero: number;
  public g1: number;
  public g2: number;
  constructor(id: number, titulo: string, numero: number, g1: number, g2: number) {
    super(id, titulo);
    this.numero = numero;
    this.g1 = g1;
    this.g2 = g2;
  }
  public getDatos(): number[] {
    var arreglo = [this.numero, this.g1, this.g2];
    return arreglo;
  }
}