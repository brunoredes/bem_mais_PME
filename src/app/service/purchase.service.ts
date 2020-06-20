import { Injectable } from '@angular/core';
import { PaymentModel } from 'app/models/payment.model';
import { PersonModel } from 'app/models/person.model';
import { PurchaseModel } from 'app/models/purchase.model';
import { CartService } from './cart.service';
import { InsuranceModel } from 'app/models/insurance.model';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/core/security/services/auth.service';

/**
 * PurchaseService - Serviço para salvar informações de compra;
 * - Dados do cliente;
 * - Dados de pagamento;
 *
 * @author Wesley Alves
 */
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private readonly storage = window.sessionStorage;

  constructor(
    private readonly _authService: AuthService,
    private readonly _cartService: CartService,
    private readonly _request: RequestService,
    private readonly _http: HttpClient,
    private readonly _toastrService: ToastrService
  ) {}

  /**
   * Agrupa informações e retorna um objeto de compra;
   *
   * @returns PurchaseModel
   */
  finalizePurchase() {
    const insurances: Array<InsuranceModel> = this._cartService.cart;
    const purchase: PurchaseModel = {
      id: '0',
      person: this.person,
      insuranceList: insurances,
      payment: this.payment
    };
    return purchase;
  }

  /**
   * Salva informações do cliente em storage;
   *
   * @param person informações do cliente;
   */
  savePerson(person: PersonModel) {
    const purchase = this.purchase;
    purchase.person = person;
    this._savePurchase(purchase);
  }

  /**
   * Salva informações do pagamento;
   *
   * @param payment informações do pagamento;
   */
  savePayment(payment: PaymentModel) {
    const purchase = this.purchase;
    purchase.payment = payment;
    this._savePurchase(purchase);
  }

  /**
   * Limpa dados do storage de pagamento e cliente;
   */
  reset() {
    this.savePayment(undefined);
    this.savePerson(undefined);
  }

  /**
   * Realiza a requisição para enviar o certificado para o email do cliente
   */
  sendCertificateEmail() {
    this._request
      .getVendedor(
        '9_Menu_Sua_Protecao/5_Enviar_Certificado_Email/Enviar_Certificado_Response.json'
      )
      .subscribe((res: any) => {
        this._toastrService.success(res.data.message);
      });
  }

  /**
   * Realiza a requisição para enviar um kit para o email do cliente;
   */
  sendKitEmail() {
    this._request
      .getVendedor(
        '9_Menu_Sua_Protecao/5_Enviar_Kit_Email/Enviar_Kit_Response.json'
      )
      .subscribe((res: any) => {
        this._toastrService.success(res.data.message);
      });
  }

  /**
   * Salva informações da compra atual no storage com
   * identificadores e chave do usuário atual;
   * @param insurances
   */
  private _savePurchase(purchase: PurchaseModel) {
    this.storage.setItem(this.storageKey, JSON.stringify(purchase));
  }

  /**
   * Informações do cliente, pode ser todas as informações cadastradas
   * na etapa de cadastro de cliente, ou apenas uma parte cadastrada na
   * seleção do seguro;
   */
  get person() {
    return this.purchase.person;
  }

  get payment() {
    return this.purchase.payment;
  }

  /**
   * Informações da compra presente no storage;
   */
  get purchase(): PurchaseModel {
    return (
      JSON.parse(this.storage.getItem(this.storageKey)) || new PurchaseModel()
    );
  }

  /**
   * Chave do storage, formado por um préfixo para
   * identificar informações de compra e pela chave do usuário.
   */
  get storageKey(): string {
    return `purchase-${this._authService.currentUser.id}`;
  }
}
