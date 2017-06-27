// import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as PD from '../../../node_modules/probability-distributions';
import * as Unico from '../../../node_modules/npm-array-unique';
import * as Repeticiones from '../../../node_modules/array-occurrence';
import * as ordenar from '../../../node_modules/sort-numbers';

import { ActivatedRoute, Params } from '@angular/router';

import { Distribucion } from './distribucion';
import { DISTRIBUCIONES } from './lista-distribucion';
import { DistribucionService } from './distribucion.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styleUrls: ['./distribucion.component.css']
})
export class DistribucionComponent implements OnInit {
  public distribuciones: Distribucion[] = DISTRIBUCIONES;
  public distribucion: Distribucion;
  public datos: any[];
  public lineChartData: Array<any>;
  public id: number;
  public lineChartLabels: Array<any>;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public formulario;
  constructor(private distribucionService: DistribucionService, private route: ActivatedRoute) {
    this.lineChartLabels = new Array<any>();
    this.lineChartData = [
      { data: [], label: 'muestra' },]
  }


  ngOnInit() {
    // this.getDistribuciones();
    // this.route.params
    // .switchMap((params: Params) => this.distribucionService.getDistribucion(+params['id']))
    // .subscribe(distribucion => this.distribucion = distribucion); 
    // this.id = this.distribucion.getId();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.distribucionService.getDistribucion(id)
        .then(distribucion => this.distribucion = distribucion);
    });
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.id = +params['id'];
      }
    });
    console.log(this.id);
    console.log(this.distribuciones);
    console.log(this.distribucion);
    this.distribucion = this.distribuciones[this.id - 1];
    console.log(this.distribucion);
    console.log(this.distribucion.getDatos());
    this.llenarFormulario();
  }

  public calcularFuncion() {
    if(this.lineChartLabels.length >0){
      this.lineChartLabels= [];
    }
    if (this.id == 1) { // poison
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.media;
      let arreglo = this.generarPuntos(this.id,a,b);
      let ejeX: Array<any> = ordenar(Unico.unique(arreglo));
      let ejeY: Array<any> = new Array<any> (ejeX.length);

      for(let x=0 ; x < ejeX.length; x++){
        ejeY[x]=(Repeticiones(arreglo, ejeX[x]));
      }
      for(let i=0; i<ejeX.length; i++) {
         this.lineChartLabels.push(ejeX[i]);
      }
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&"+this.lineChartLabels.valueOf()+"----------------------------------");
      console.log("x "+ejeX, "y="+ejeY, "are= "+arreglo);
      console.log(ejeX, ejeY, arreglo);
      console.log(a, b);
      this.crearGrafico(ejeY, arreglo);
    }
    if (this.id == 2) { // normal
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.media;
      var c: number = this.formulario.value.sd;
     // this.crearGrafico(this.generarPuntos(this.id,a,b,c));
      console.log(a, b, c);
    }
    if (this.id == 3) { // Gamma
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.forma;
      var c: number = this.formulario.value.escala;
      //this.crearGrafico(this.generarPuntos(this.id,a,b,c));
      console.log(a, b, c);
    }
    if (this.id == 4) { // Exponencial
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.escala;
      //this.crearGrafico(this.generarPuntos(this.id,a,b));
      console.log(a, b);
    }
    if (this.id == 5) { // f
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.g1;
      var c: number = this.formulario.value.g2;
     // this.crearGrafico(this.generarPuntos(this.id,a,b,c));
      console.log(a, b, c);
    }
    if (this.id == 6) { // f
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.alfa;
      var c: number = this.formulario.value.beta;
      var d: number = this.formulario.value.localizacion;
      //this.crearGrafico(this.generarPuntos(this.id,a,b,c,d));
      console.log(a, b, c, d);
    }
    if (this.id == 7) { // logaritmica normal
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.Ml;
      var c: number = this.formulario.value.De;
      //this.crearGrafico(this.generarPuntos(this.id,a,b,c));
      console.log(a, b, c);
    }
    if (this.id == 8) { // t student
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.Ml;
      var c: number = this.formulario.value.De;
      //this.crearGrafico(this.generarPuntos(this.id,a,b,c));
      console.log(a, b, c);
    }
    if (this.id == 9) { // empirica
      var a: number = this.formulario.value.numero;
      var b: number = this.formulario.value.Ml;
      var c: number = this.formulario.value.De;
      //this.crearGrafico(this.generarPuntos(this.id,a,b,c));
      console.log(a, b, c);
    }

  }

  public llenarFormulario() {
    if (this.id == 1) {// poison
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        media: new FormControl(this.distribucion.getDatos()[1]),
      });
    }
    if (this.id == 2) {// normal
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        media: new FormControl(this.distribucion.getDatos()[1]),
        sd: new FormControl(this.distribucion.getDatos()[2]),
      });
    }
    if (this.id == 3) { // Gamma
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        forma: new FormControl(this.distribucion.getDatos()[1]),
        escala: new FormControl(this.distribucion.getDatos()[2]),
      });
    }
    if (this.id == 4) { // Exponencial
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        escala: new FormControl(this.distribucion.getDatos()[1]),
      });
    }
    if (this.id == 5) { // f
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        g1: new FormControl(this.distribucion.getDatos()[1]),
        g2: new FormControl(this.distribucion.getDatos()[2]),
      });
    }
    if (this.id == 6) { // beta
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        alfa: new FormControl(this.distribucion.getDatos()[1]),
        beta: new FormControl(this.distribucion.getDatos()[2]),
        localizacion: new FormControl(this.distribucion.getDatos()[3]),
      })
    }
    if (this.id == 7) { // log-norm
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        Ml: new FormControl(this.distribucion.getDatos()[1]),
        De: new FormControl(this.distribucion.getDatos()[2]),
      });
    }
    if (this.id == 8) { // tstudent
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        Ml: new FormControl(this.distribucion.getDatos()[1]),
        De: new FormControl(this.distribucion.getDatos()[2]),
      });
    }
    if (this.id == 9) { // empirica
      this.formulario = new FormGroup({
        numero: new FormControl(this.distribucion.getDatos()[0]),
        Ml: new FormControl(this.distribucion.getDatos()[1]),
        De: new FormControl(this.distribucion.getDatos()[2]),
      });
    }
  }
}

  public crearGrafico(ejeY:any[], datos:any) {
  this.lineChartData = [
    { data: ejeY, label: 'muestra' }]
  this.datos = datos;

}

  // events
  public chartClicked(e: any): void {
  console.log(e);
}
  public generarPuntos(e: number, a = 0, b = 0,c=0,d =0){
    var valor =[];
    switch (e){
      case 1:
        return  valor = PD.rpois(a, b);
      case 2:
        return  valor = PD.rnorm(a, b, c);
      case 3:
        return  valor = PD.rgamma(a, b, c);
      case 4:
        return  valor = PD.rexp(a, b);
      case 5:
        return  valor = PD.rf(a, b, c);
      case 6:
        return  valor = PD.rbeta(a, b, c, d);
      case 7:
        return  valor = PD.rlnorm(a, b, c);
      case 8:
        return  valor = PD.rlnorm(a, b, c);
      case 9:
        return  valor = PD.rlnorm(a, b, c);
    }
}

}

