import { Distribucion } from '../distribucion';

export class Exponencial extends Distribucion {
  public numero:number;
  public escala:number;

  constructor(id:number, titulo:string, numero:number, escala:number){
    super(id,titulo);
    this.numero = numero;
    this.escala = escala;
  }

  public getDatos():number[]{
    var arreglo = [this.numero, this.escala];
    return arreglo;
  }
}