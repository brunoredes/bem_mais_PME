import { Injectable, EventEmitter } from '@angular/core';
import { InsuranceModel } from 'app/models/insurance.model';
import { ProductModel } from 'app/models/product.model';
import { PropertyModel } from 'app/models/property.model';
import { PlanPriceModel } from 'app/models/plan-price.model';
import { AuthService } from 'app/core/security/services/auth.service';

/**
 * CartService - Serviço para salvar os seguros selecionado
 * atualizando os mesmos a cada alteração;
 *
 * @author Wesley Alves
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storage = window.sessionStorage;

  cartItens = new EventEmitter<any>();
  safeForm = new EventEmitter<any>();

  constructor(private readonly _authService: AuthService) {}

  /**
   * Adiciona ou atualiza um seguro dentro do carrinho;
   */
  saveInsuranceInCart(insurance: InsuranceModel) {
    const cart = this.cart;
    // let indexInsurance = cart.findIndex(e => e.id === insurance.id);
    // if (indexInsurance != -1) {
    //   cart[indexInsurance] = insurance;
    // } else {
    //   cart.push(insurance);
    // }
    this.setIndexToAddProduct(this.cart.length)
    cart.push(insurance);
    this._saveCart(cart);
  }

  /***
   * Remove um seguro do carrinho;
   * @param insurance a ser removido
   */
  removeInsuranceCart(index: number) {
    const cart = this.cart;
    // const insuranceIndex = cart.findIndex(e => e.id === insurance.id);
    cart.splice(index, 1);
    this.safeForm.emit(index);
    this._saveCart(cart);
  }

  /**
   * Adiciona ou atualiza um produto dentro do seguro selecionado;
   * @param product Produto selecionado.
   */
  addProductInCurrentInsurance(product: ProductModel) {
    const cart = this.cart;
    let index: number;

    if (this.getIndexToAddProduct() >= 0) {
      index = this.getIndexToAddProduct()
    } else {
      index = this.cart.length - 1;
    }

    cart[index].productSelected = product;
    this._saveCart(cart);
  }

  addProperties(property: PropertyModel[], index: number) {
    const cart = this.cart;
    cart[index].properties = property;
    this._saveCart(cart);
  }

  addInsurancePlan(plan: PlanPriceModel) {
    const cart = this.cart;
    cart[this.getIndexToAddProduct()].planPriceSelected = plan;
    this._saveCart(cart);
  }

  removeProductInsurance(index: number) {
    const cart = this.cart;

    delete cart[index].productSelected;

    this._saveCart(cart);
  }

  setIndexToAddProduct(index: number) {
    // this.indexToAddProduct = index;
    this.storage.setItem('cart-current-index', JSON.stringify(index));
  }

  getIndexToAddProduct() {
    return JSON.parse(this.storage.getItem('cart-current-index'));
    // return this.indexToAddProduct;
  }

  reset() {
    this._saveCart(new Array<InsuranceModel>());
  }

  /**
   * Salva a lista de seguro no carrinho do usuário atual;
   * @param insurances
   */

  saveCart(insurances: Array<InsuranceModel>) {
    this._saveCart(insurances);
  }
  
  private _saveCart(insurances: Array<InsuranceModel>) {
    this.storage.setItem(this.cartKey, JSON.stringify(insurances));
    this.cartItens.emit(this.cart);
  }

  /**
   * Retorna o ultimo seguro adicionado no carrinho;
   */
  get currentInsurance(): InsuranceModel {
    const cart = this.cart;
    return cart[cart.length - 1];
  }

  /**
   * Retorna a lista de seguros adicionadas no carrinho do usuário atual;
   */
  get cart(): Array<InsuranceModel> {
    return (
      JSON.parse(this.storage.getItem(this.cartKey)) ||
      new Array<InsuranceModel>()
    );
  }

  /**
   * Chave do carriho atual, formado por um préfixo para
   * identificar o carrinho e pela chave do usuário.
   */
  get cartKey(): string {
    return `cart-${this._authService.currentUser.id}`;
  }
}
