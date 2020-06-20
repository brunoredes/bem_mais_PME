import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProspectModel } from 'app/models/prospect.model';
import { PersonModel } from 'app/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {

  public selectedProduct: any;
  public all: any;
  public apiMock: any;
  public $all: Subject<any> = new Subject<any>();
  public apiMock$: Subject<any> = new Subject<any>();
  public qntCarrinho = 0;
  public carrinho: any = [];
  prospect: ProspectModel;
  client: PersonModel

  constructor(private api: RequestService, private http: HttpClient) { }

  setSelectedProduct(product: any) {
    this.selectedProduct = product;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

  getHome() {
    this.api.getVendedor('home').subscribe((data: any) => {
      this.all = data
      this.$all.next(true)
    })
  }

  getApiMock() {

    this.http.get('/assets/api.json').subscribe((data: any) => {
      this.apiMock = data;
      this.apiMock$.next(true)
    })
  }

  addCart(produto: any) {
    const contador = this.carrinho.find(obj => obj.id === produto.id);
    if (!contador) {
      this.qntCarrinho += 1;
      this.carrinho.push(produto);
    }
  }

  setProspect(newProspect): void {
    this.prospect = newProspect;
  }

  getProspect(): ProspectModel {
    if (this.prospect) {
      return this.prospect;
    } else { return null }
  }

  setClient(newClient): void {
    this.client = newClient;
  }

  getClient(): PersonModel {
    if (this.client) {
      return this.client;
    } else { return null }
  }

}
