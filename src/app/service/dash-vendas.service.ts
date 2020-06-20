import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { RequestService } from './request.service';
import { MyPerformaceModel } from 'app/models/myPerformace.model';
import { map } from 'rxjs/operators';
import { OrderDashModel } from 'app/models/orderDash.model';
import { MyPerformaceDashModel } from 'app/models/myPerformaceDash.model';
import { InsuranceSafeModel } from 'app/models/InsuranceSafe.model';
import { SalesAmountModel } from 'app/models/salesAmount.model';
import { CategorySalesModel } from 'app/models/categorySales.model';
import { NivelService } from './nivel.service';

@Injectable({
  providedIn: 'root'
})
export class DashVendasService {
  public my: any
  public order: any
  public myPerfomace: any
  public salesAmount: any
  public insuranceSafe: any
  public categorySales: any

  public my$: Subject<any> = new Subject<any>();
  public order$: Subject<any> = new Subject<any>();
  public myPerfomace$: Subject<any> = new Subject<any>();
  public salesAmount$: Subject<any> = new Subject<any>();
  public insuranceSafe$: Subject<any> = new Subject<any>();
  public categorySales$: Subject<any> = new Subject<any>();

  public dateDeMyPerformance: Date = new Date();
  public dateAteMyPerformance: Date = new Date();
  public dateDeInsuranceSales: Date = new Date();
  public dateAteInsuranceSales: Date = new Date();
  public dateDeSalesAmount: Date = new Date();
  public dateAteSalesAmount: Date = new Date();
  public dateDeSalesCategory: Date = new Date();
  public dateAteSalesCategory: Date = new Date();
  public filterStatusVendas: string;
  public filterCategoryVendas: string;
  public urlVendas = '5_Menu_Dashboard/Vendas'
  constructor(private request: RequestService, public nivel: NivelService) { }
  getMy(): Observable<Array<MyPerformaceModel>> {
    return this._requestMy().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestMy() {
    return this.request.getVendedor(
      `${this.urlVendas}/1_Minha_Performance_Response.json`
    );
  }

  getOrder(): Observable<Array<OrderDashModel>> {
    return this._requestOrder().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestOrder() {
    return this.request.getVendedor(
      `${this.urlVendas}/2_Dados_Orders_Response.json`
    );
  }
  getMyPerfomace(): Observable<Array<MyPerformaceDashModel>> {
    return this._requestMyPerfomace().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestMyPerfomace() {
    return this.request.getVendedor(
      `${this.urlVendas}/3_Minha_Performance_Dash_Response_Copy.Json`
    );
  }

  getSalesAmount(): Observable<Array<SalesAmountModel>> {
    return this._requestSalesAmount().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestSalesAmount() {
    return this.request.getVendedor(
      `${this.urlVendas}/4_Volume_Vendas_Dash_Response.Json`
    );
  }

  getCategorySales(): Observable<Array<CategorySalesModel>> {
    return this._requestCategorySales().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestCategorySales() {
    let request
    this.nivel.verificaUrl('/masterdealer')
      ? request = this.request.getMasterDealer(
        `7_Menu_Dashboard/1_Vendas/4_Distribuicao_Vendas_Categoria_Produtos_Response.json`
      )
      : request = this.request.getVendedor(
        `${this.urlVendas}/5_Distribuicao_Vendas_Categorias_Produtos.json`
      )
    return request
  }

  getInsuranceSafe(): Observable<Array<InsuranceSafeModel>> {
    return this._requestInsuranceSafe().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestInsuranceSafe() {
    let request
    this.nivel.verificaUrl('/masterdealer')
      ? request = this.request.getMasterDealer(
        '7_Menu_Dashboard/1_Vendas/3_Distribuicao_Vendas_Seguro_Response.json'
      )
      : request = this.request.getVendedor(
        `${this.urlVendas}/6_Distribuicao_Vendas_Por_Seguro.json`
      )
    return request
  }
}
