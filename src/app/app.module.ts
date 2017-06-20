import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//chartjs para las gráficas
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LinealComponent } from './lineal/lineal.component';

import { AppRoutingModule } from './app-routing.module';
import { SimulacionComponent } from './simulacion/simulacion.component';
import { DistribucionComponent } from './distribucion/distribucion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SimulacionComponent,
    DistribucionComponent,
    LinealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
