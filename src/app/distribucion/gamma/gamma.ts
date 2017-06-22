import { Distribucion } from '../distribucion';

export class Gamma extends Distribucion {
  public numero:number;
  public forma:number;
  public escala:number;

  constructor(id:number, titulo:string, numero:number, forma:number, escala:number){
    super(id,titulo);
    this.numero = numero;
    this.forma = forma;
    this.escala = escala;
  }

  public getDatos():number[]{
    var arreglo = [this.numero, this.forma, this.escala];
    return arreglo;
  }
}