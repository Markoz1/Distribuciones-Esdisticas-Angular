// import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import * as PD from '../../../node_modules/probability-distributions';

import { ActivatedRoute, Params }   from '@angular/router';

import { Distribucion } from './distribucion';
import { DISTRIBUCIONES } from './lista-distribucion';
import { DistribucionService } from './distribucion.service';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styleUrls: ['./distribucion.component.css']
})
export class DistribucionComponent implements OnInit {
  public distribuciones: Distribucion[] = DISTRIBUCIONES;
  public distribucion:Distribucion;
  public datos:any[];
  public lineChartData: Array<any>;
  public id:number;
  public lineChartLabels: Array<any> = ['Bueno', 'Muy Bueno', 'Sobresaliente', 'Exelente', 'Genio', 'Ingeniero', 'PhD'];
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
      if(params['id']!=null){
          this.id = +params['id']; 
      }
    });
    console.log(this.id);  
    console.log(this.distribuciones);
    console.log(this.distribucion);
    this.distribucion = this.distribuciones[this.id-1];
    console.log(this.distribucion);
    console.log(this.distribucion.getDatos());
    this.llenarFormulario();
  }

  public calcularFuncion() {
    if (this.id == 1) { // poison
      var a : number = this.formulario.value.numero;
      var b : number = this.formulario.value.media;
      this.crearGrafico(PD.rpois(a, b));
      console.log(a,b);
    }
    if (this.id == 2) { // normal
      var a : number = this.formulario.value.numero;
      var b : number = this.formulario.value.media;
      var c : number = this.formulario.value.sd;
      this.crearGrafico(PD.rnorm(a, b, c));
      console.log(a,b,c);
    }
    if (this.id == 3) { // Gamma
      var a : number = this.formulario.value.numero;
      var b : number = this.formulario.value.forma;
      var c : number = this.formulario.value.escala;
      this.crearGrafico(PD.rgamma(a, b, c));
      console.log(a,b,c);
    }
    if (this.id == 4) { // Exponencial
      var a : number = this.formulario.value.numero;
      var b : number = this.formulario.value.escala;
      this.crearGrafico(PD.rexp(a, b));
      console.log(a,b);
    }
    // falta hasta el is 9
  }
 
  public llenarFormulario(){
    if (this.id == 1) {// poison
      this.formulario= new FormGroup({
      numero: new FormControl(this.distribucion.getDatos()[0]),
      media: new FormControl(this.distribucion.getDatos()[1]),
      });
    }
    if (this.id == 2) {// normal
      this.formulario= new FormGroup({
      numero: new FormControl(this.distribucion.getDatos()[0]),
      media: new FormControl(this.distribucion.getDatos()[1]),
      sd: new FormControl(this.distribucion.getDatos()[2]),
      });
    } 
    if (this.id == 3) { // Gamma
      this.formulario= new FormGroup({
      numero: new FormControl(this.distribucion.getDatos()[0]),
      forma: new FormControl(this.distribucion.getDatos()[1]),
      escala: new FormControl(this.distribucion.getDatos()[2]),
      });
    } 
    if (this.id == 4) { // Exponencial
      this.formulario= new FormGroup({
      numero: new FormControl(this.distribucion.getDatos()[0]),
      escala: new FormControl(this.distribucion.getDatos()[1]),
      });
    }
    // falta hasta el is 9     
  }

  public crearGrafico(datos:any[]) {
    this.lineChartData = [
      { data: datos, label: 'muestra' },]
    this.datos= datos;
  } 
  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
}