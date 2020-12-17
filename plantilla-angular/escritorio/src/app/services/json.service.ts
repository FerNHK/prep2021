import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {
    console.log('Todo bien en el servicio');
  }

  private REST_API = '../assets/api/entidad_pp_ci.json';

  public getMunicipios() {
     return this.http.get(this.REST_API);
  }
}
