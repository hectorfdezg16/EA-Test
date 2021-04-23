import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sede } from '../models/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  selectedSede: Sede;
  //our User's array (empty initially)
  sedes: Sede[];
  readonly URL_API='http://localhost:4000/api/sedes';

  constructor(private http: HttpClient) {
    this.selectedSede = new Sede();
  }

  //este es el crud de nuestra sede
  //no hacia falta hacer todo esto pero lo he querido hacer para complementar
  //mucho más el minimo

  getAllSedes(){
    return this.http.get(this.URL_API);
  }

  //añadimos sede como un objeto
  postSede(sede: Sede){
    return this.http.post(this.URL_API, sede);
  }

  putSede(sede: Sede){
    return this.http.put(this.URL_API + `/${sede._id}`, sede);
  }

  deleteSede(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
