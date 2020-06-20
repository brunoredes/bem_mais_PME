import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getVendedor(url: string) {
    return this.http.get(`./assets/JSON/Vendedor/${url}`)
  }

  getComercial(url: string) {
    return this.http.get(`./assets/JSON/Comercial/${url}`)
  }

  getAgregador(url: string) {
    return this.http.get(`./assets/JSON/Agregador/${url}`)
  }

  getCorretor(url: string) {
    return this.http.get(`./assets/JSON/Corretor/${url}`)
  }

  getMasterDealer(url: string) {
    return this.http.get(`./assets/JSON/MasterDealer/${url}`)
  }

  getGerente(url: string) {
    return this.http.get(`./assets/JSON/Gerente/${url}`)
  }
}
