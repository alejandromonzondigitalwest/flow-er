import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Parser } from '../models/parser';
import { Mapper } from '../models/mapper';
import { FlowComponent } from '../components/flow/flow.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  mapper: Mapper[] = [];
  parser: Parser[] = [];
  //flow: Flow[] = [];
  constructor(private http: HttpClient) {
   }

  readonly URL_API = 'http://localhost:3000';


  get(elemento) {
        return this.http.get(this.URL_API + '/' + elemento);

  }

  post(elemento, envio) {

    return this.http.post(this.URL_API + '/' + elemento, envio, { headers: { 'Content-Type': 'application/json' } });

  }

}
