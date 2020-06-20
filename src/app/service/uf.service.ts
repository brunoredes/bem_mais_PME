import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UfModel } from 'app/models/uf.model';
import { CidadeModel } from 'app/models/cidade.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UfService {

  url = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados'
  api = `http://educacao.dadosabertosbr.com/api/cidades`

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Array<UfModel>> {
    return this.http.get<any[]>(this.url);
  }

  getCidade(uf): Observable<Array<string>> {
    return this.http.get<any[]>(`${this.api}/${uf}`, httpOptions);
    // return this.http.get<any[]>(`https://cors-anywhere.herokuapp.com/${this.api}/${uf}`, httpOptions);
  }



}
