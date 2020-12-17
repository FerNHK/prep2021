import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';
@Component({
  selector: 'app-votos-partidos-entidad',
  templateUrl: './votos-partidos-entidad.component.html',
  styleUrls: ['./votos-partidos-entidad.component.scss']

})
export class VotosPartidosEntidadComponent implements OnInit {
  
  datosJson: any[] = [];

  constructor( private json:JsonService) { 
      this.json.getMunicipios().subscribe(respuesta =>{

          console.log(respuesta["json"]);
          this.datosJson = respuesta["json"];
      });
  }
  
  ngOnInit(): void {
  }

}
