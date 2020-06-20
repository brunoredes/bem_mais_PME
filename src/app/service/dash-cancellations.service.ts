import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { RequestService } from './request.service';
import { CancellationsNumberModel } from 'app/models/cancellationsNumber.model';
import { map } from 'rxjs/operators';
import { ConcellationsProductModel } from 'app/models/cancellationsProduct.model';
import { CancellationsCategoryModel } from 'app/models/cancellationsCategory.model';

@Injectable({
  providedIn: 'root'
})
export class DashCancellationsService {

  public urlCancelamentos = '5_Menu_Dashboard/Cancelamentos'

  public numberCancellations: any
  public cancellationsSafe: any
  public cancellationsProduct: any

  public numberCancellations$: Subject<any> = new Subject<any>();
  public cancellationsSafe$: Subject<any> = new Subject<any>();
  public cancellationsProduct$: Subject<any> = new Subject<any>();

  public dateDeCancellationsProduct: Date = new Date();
  public dateAteCancellationsProduct: Date = new Date();
  public dateDeCancellationsSafe: Date = new Date();
  public dateAteCancellationsSafe: Date = new Date();
  public dateDeNumberCancellations: Date = new Date();
  public dateAteNumberCancellations: Date = new Date();
  public filterStatusCancellations: string;
  public filterCategoryCancellations: string;

  constructor(private request: RequestService) { }

  getNumberCancellations(): Observable<Array<CancellationsNumberModel>> {
    return this._requestCancellationsNumber().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestCancellationsNumber() {
    return this.request.getVendedor(
      `${this.urlCancelamentos}/1_Volume_Cancelamento_Dash_Response.Json`
    );
  }

  getCancellationsSafe(): Observable<Array<ConcellationsProductModel>> {
    return this._requestCancellationsSafe().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestCancellationsSafe() {
    return this.request.getVendedor(
      `${this.urlCancelamentos}/2_Cancelamentos_Por_Seguro.json`
    );
  }

  getCancellationsProduct(): Observable<Array<CancellationsCategoryModel>> {
    return this._requestCancellationsProduct().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestCancellationsProduct() {
    return this.request.getVendedor(
      `${this.urlCancelamentos}/3_Cancelamentos_Por_Categoria_De_Produtos.json`
    );
  }

  // getNumberCancellations() {
  //   this.request.get(`${this.urlCancelamentos}/1_Volume_Cancelamento_Dash_Response.Json`).subscribe((data: any) => {
  //     this.numberCancellations = data
  //     this.numberCancellations$.next(true)
  //   })
  // }

  // getCancellationsSafe() {
  //   this.request.get(`${this.urlCancelamentos}/2_Cancelamentos_Por_Seguro.json`).subscribe((data: any) => {
  //     this.cancellationsSafe = data
  //     this.cancellationsSafe$.next(true)
  //   })
  // }

  // getCancellationsProduct()
  //   this.request.get(`${this.urlCancelamentos}/3_Cancelamentos_Por_Categoria_De_Produtos.json`).subscribe((data: any) => {
  //     this.cancellationsProduct = data
  //     this.cancellationsProduct$.next(true)
  //   })
  // }
}
