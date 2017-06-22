import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SimulacionComponent } from './simulacion/simulacion.component';
import { DistribucionComponent } from './distribucion/distribucion.component';
 
const routes: Routes = [
  { path: '',  component: BodyComponent },
  { path: 'simulacion',  component: SimulacionComponent },
  { path: 'simulacion/distribucion/:id',  component: DistribucionComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
