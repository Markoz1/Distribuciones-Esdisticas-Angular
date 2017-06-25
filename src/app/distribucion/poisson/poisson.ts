import { Distribucion } from '../distribucion';

export class Poisson extends Distribucion {
  public numero: number;
  public media: number;

  constructor(id: number, titulo: string, numero: number, media: number) {
    super(id, titulo);
    this.numero = numero;
    this.media = media;
  }

  public getDatos(): number[] {
    var arreglo = [this.numero, this.media];
    return arreglo;
  }
}
