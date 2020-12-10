import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonCompartirComponent } from './components/boton-compartir/boton-compartir.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ComparativaComponent } from './components/comparativa/comparativa.component';
import { AvanceEstatalComponent } from './components/avance-estatal/avance-estatal.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VotosDistritoComponent } from './components/votos-distrito/votos-distrito.component';
import { ResumenDistritoMapaComponent } from './components/resumen-distrito-mapa/resumen-distrito-mapa.component';
import { EstadisticaEstatalComponent } from './components/estadistica-estatal/estadistica-estatal.component';
import { PrePiePaginaComponent } from './components/pre-pie-pagina/pre-pie-pagina.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonCompartirComponent,
    EncabezadoComponent,
    ComparativaComponent,
    AvanceEstatalComponent,
    MenuLateralComponent,
    BuscadorComponent,
    VotosDistritoComponent,
    ResumenDistritoMapaComponent,
    EstadisticaEstatalComponent,
    PrePiePaginaComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
