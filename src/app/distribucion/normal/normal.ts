import { Distribucion } from '../distribucion';

export class Normal extends Distribucion {
  public numero: number;
  public media: number;
  public sd: number
  constructor(id: number, titulo: string, numero: number, media: number, sd: number) {
    super(id, titulo);
    this.numero = numero;
    this.media = media;
    this.sd = sd;
  }
  public getDatos(): number[] {
    var arreglo = [this.numero, this.media, this.sd];
    return arreglo;
  }
}