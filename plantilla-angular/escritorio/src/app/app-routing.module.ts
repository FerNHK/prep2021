import { Routes, RouterModule } from '@angular/router';
import { ResumenDistritoMapaComponent } from './components/resumen-distrito-mapa/resumen-distrito-mapa.component';
import { VotosPartidosEntidadComponent } from './components/votos-partidos-entidad/votos-partidos-entidad.component';

const APP_ROUTES: Routes = [
  { path: 'evm', component: ResumenDistritoMapaComponent },
  { path: 'evp', component: VotosPartidosEntidadComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'evm' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
