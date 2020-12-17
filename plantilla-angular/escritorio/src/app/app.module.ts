import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*Http Client*/ 
import { HttpClientModule  } from "@angular/common/http";

/*Rutas*/
import { APP_ROUTING } from './app-routing.module';

/*Servicios */
import { JsonService } from "./services/json.service";


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
import { VotosPartidosEntidadComponent } from './components/votos-partidos-entidad/votos-partidos-entidad.component';
import { ResumenVotacionComponent } from './components/resumen-votacion/resumen-votacion.component';

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
    PiePaginaComponent,
    VotosPartidosEntidadComponent,
    ResumenVotacionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
