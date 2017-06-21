import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SimulacionComponent } from './simulacion/simulacion.component';
import { DistribucionComponent } from './distribucion/distribucion.component';
import { LinealComponent } from './lineal/lineal.component';
import {GammaComponent} from "./gamma/gamma.component";
import {FDistribucionComponent} from "./f-distribucion/f-distribucion.component";
 
const routes: Routes = [
  { path: '',  component: BodyComponent },
  { path: 'simulacion',  component: SimulacionComponent },
  { path: 'simulacion/distribucion',  component: DistribucionComponent },
  { path: 'lineal',  component: LinealComponent },
  { path: 'simulacion/gamma',  component: GammaComponent },
  { path: 'simulacion/f',  component: FDistribucionComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
