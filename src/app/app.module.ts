import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

//chartjs para las gráficas
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LinealComponent } from './lineal/lineal.component';

import { AppRoutingModule } from './app-routing.module';
import { SimulacionComponent } from './simulacion/simulacion.component';
import { DistribucionComponent } from './distribucion/distribucion.component';
import { FDistribucionComponent } from './f-distribucion/f-distribucion.component';
import { GammaComponent } from './gamma/gamma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SimulacionComponent,
    DistribucionComponent,
    LinealComponent,
    FDistribucionComponent,
    GammaComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
