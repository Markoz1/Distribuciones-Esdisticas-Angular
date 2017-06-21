import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import * as PD from '../../../node_modules/probability-distributions';

@Component({
  selector: 'app-f-distribucion',
  templateUrl: './f-distribucion.component.html',
  styleUrls: ['./f-distribucion.component.css']
})
export class FDistribucionComponent implements OnInit {

  public lineChartData: Array<any>;

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

  constructor() {
     this.lineChartData = [
      { data: [], label: 'muestra' },]
  }

  f_Form = new FormGroup({
    numero: new FormControl(),
    g1 : new FormControl(),
    g2 : new FormControl(),

  });

  calcularFuncion() {
    var a : number = this.f_Form.value.numero;
    var b : number = this.f_Form.value.g1;
    var c : number = this.f_Form.value.g2;
    this.crearLista(a, b, c);
    this.randomize();
  }
  public crearLista(a: any, b: any , c: any) {
    var varibles: any = PD.rf(a, b, c);
    this.lineChartData = [
      { data: varibles, label: 'muestra' },]
  }

  ngOnInit() {
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