import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { DataFormSafeModel } from 'app/models/data-form-safe.model';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataFormSafeService {
  constructor(private request: RequestService) {}

  /**
   * Somente os dados necessários para construção do formulário;
   * @author Wesley Alves
   *
   * @returns Observable contendo uma lista de DataFormSafeModel.
   */
  get formSafeFields(): Observable<Array<DataFormSafeModel>> {
    return this._requestForms().pipe(
      map((res: any) => {
        return res.data.form;
      })
    );
  }

  /**
   * Realiza requisição para retornar todos os dados
   * para o formulário bem segurado;
   *
   * @author Wesley Alves
   */
  private _requestForms() {
    return this.request.getVendedor(
      '9_Menu_Sua_Protecao/3_Consulta_Formulario_Dados_Do_Bem_Segurado/Consulta_Form_Dados_Bem_Segurado.json'
    );
  }
}
