import { Distribucion } from '../distribucion';

export class LogNormal extends Distribucion {
  public numero: number;
  public ML: number;
  public DE: number;

  constructor(id: number, titulo: string, numero: number, ML: number, DE: number) {
    super(id, titulo);
    this.numero = numero;
    this.ML = ML;
    this.DE = DE;
  }

  public getDatos(): number[] {
    var arreglo = [this.numero, this.ML, this.DE];
    return arreglo;
  }
}