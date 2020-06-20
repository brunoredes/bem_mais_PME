import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterDealerProductFormModel } from 'app/models/master-dealer-product-form.model';
import { ProductTableModel } from 'app/models/product-table.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { CategoryProductModel } from 'app/models/category-product.model';
@Injectable({
  providedIn: 'root'
})
export class MasterDealerProductService {
  constructor(
    private _request: RequestService,
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) {}

  getDataProduct(): Observable<ProductTableModel> {
    return this._requestProduct().pipe(
      map((res: any) => {
        return res.data.products;
      })
    );
  }

  getProductById$(productId: number): Observable<MasterDealerProductFormModel> {
    return this._requestProductById(productId).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  sendProduct$(product: MasterDealerProductFormModel) {
    let obs$ = this._http.post('Managers', product);
    if (product.id) {
      obs$ = this._http.put(`Managers/${product.id}`, product);
    }
    // MOCK - Create manager
    obs$ = this._request.getMasterDealer(
      '4_Menu_Gerentes_de_Loja/2_Cadastra_Gerentes/Cadastra_Gerentes_Response.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  private _requestProduct() {
    return this._request.getMasterDealer(
      '6_Menu_Produtos/1_Consulta_Produtos/Consulta_Produtos_Response.json'
    );
  }

  private _requestProductById(productId: number) {
    return this._request.getMasterDealer(
      '6_Menu_Produtos/3_Detalhe_Produto/Detalhe_Produto_Response.json'
    );
  }


  private _requestCategoryProduct() {
    return this._request.getVendedor(
      '9_Menu_Sua_Protecao/1_Precificacao_Lista_Celulares/Consulta_Categorias/Consulta_Categoria_Response.json'
    );
  }

  getDataCategoryProduct(): Observable<CategoryProductModel> {
    return this._requestCategoryProduct().pipe(
      map((res: any) => {
        return res.data.Categories;
      })
    );
  }

}
