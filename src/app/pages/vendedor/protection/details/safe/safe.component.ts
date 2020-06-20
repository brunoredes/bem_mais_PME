import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataFormSafeService } from 'app/service/data-form-safe.service';
import { DataFormSafeModel } from 'app/models/data-form-safe.model';
import { CartService } from 'app/service/cart.service';
import { InsuranceModel } from 'app/models/insurance.model';
import { Router } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';
import { PropertyModel } from 'app/models/property.model';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

declare let $: any;

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.scss']
})
export class SafeComponent implements OnInit {
  // safeForm: FormGroup;
  safeForm: FormGroup[] = [];
  fields: Array<DataFormSafeModel>;
  cart: Array<InsuranceModel> = this._cartService.cart;
  @Output()
  isInvalidForm: EventEmitter<boolean> = new EventEmitter();
  productSelected: number;
  insuranceSelectedIndex: number;
  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  properties: PropertyModel[] = [];

  constructor(
    private _translate: TranslateService,
    private _formBuilder: FormBuilder,
    private _dataFormSafeService: DataFormSafeService,
    public _cartService: CartService,
    private _router: Router,
    public loading: LoadingService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._dataFormSafeService.formSafeFields.subscribe(
      (fields: Array<DataFormSafeModel>) => {
        this.fields = fields;

        this._cartService.cart.forEach(() => {
          this.safeForm.push(this._formBuilder.group(this._createFormTemplate(fields)));
        });

        this._cartService.cartItens.subscribe(
          event => this.setCart(event)
        );

        this._cartService.safeForm.subscribe(
          event => this.removeSafeForm(event)
        );

        this.setFormValue();

        $(`#collapseOne${this._cartService.getIndexToAddProduct()}`).removeClass('collapse');
        $(`#collapseOne${this._cartService.getIndexToAddProduct()}`).addClass('collapse in show');
        $(`#aCollapseOne${this._cartService.getIndexToAddProduct()}`).removeClass('collapsed');

        let countValid = 0;

        this.safeForm.forEach((value) => {
          if (!value.invalid) {
            countValid++;
          }
        });

        this.isInvalidForm.emit(this.safeForm.length !== countValid);

      }
    );
  }

  format = value => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  setFormValue() {
    const cart = this._cartService.cart;

    cart.forEach((valueCart, index) => {
      if (valueCart.properties) {
        valueCart.properties.forEach((valueProp) => {
          this.safeForm[index].controls[valueProp.name].setValue(valueProp.value);
        });
      }
    });

  }

  checkReplicate(index: number) {

    if (document.getElementById(`checkReplicate${index}`)['checked']) {
      const cart = this._cartService.cart;
      const properties = cart[index].properties;

      if (properties[0].name === 'imei') {
        properties.splice(0, 1);
      }

      cart.forEach((value, indexCart) => {
        if (indexCart !== index) {
          this._cartService.addProperties(properties, indexCart);
        }
      });

      this.setFormValue();
    }
  }

  addInsurancePlan(index: number) {
    this._cartService.setIndexToAddProduct(index);
  }

  getInsurancePlanPriceAmount(index: number) {
    const insurance = this._cartService.cart[index];
    return (insurance && insurance.planPriceSelected) ? insurance.planPriceSelected.amount : 0;
  }

  updateProperties(index: number) {
    let countValid = 0;

    this.properties = [];
    const formValue = this.safeForm[index].getRawValue();

    for (const name in formValue) {
      this.properties.push({ name: name, value: formValue[name] });
    }

    this.cart[index].properties = this.properties;

    this.safeForm.forEach((value) => {
      if (!value.invalid) {
        countValid++;
      }
    });

    this.isInvalidForm.emit(this.safeForm.length !== countValid);
  }

  ngOnDestroy() {
    this._cartService.saveCart(this.cart);
  }

  /**
   * Cria o formato do template a partir dos valores informados;
   * @author Wesley Alves
   *
   * @param fields é uma lista de DataFormSafeModel;
   * @returns campos com validações para construção de um FormControl.
   */
  private _createFormTemplate(fields: Array<DataFormSafeModel>) {
    const formTemplate = {};
    const insurance = this._cartService.currentInsurance;
    for (const field of fields) {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }

      let propertieValue = '';
      if (insurance.properties && insurance.properties.length) {
        propertieValue = insurance.properties.find(e => e.name === field.name)
          .value;
      }
      formTemplate[field.name] = this._formBuilder.control(
        propertieValue,
        validators
      );
    }

    formTemplate['replicateData'] = this._formBuilder.control('');
    return formTemplate;
  }

  selectProductToRemove(index: number) {
    this.productSelected = index;
  }

  selectInsuranceToRemove(index: number) {
    this.insuranceSelectedIndex = index;
  }

  removeSelected() {
    if (this.insuranceSelectedIndex >= 0) {
      this._removeInsurance();
      this.insuranceSelectedIndex = undefined;
    } else if (this.productSelected >= 0) {
      this._cartService.setIndexToAddProduct(this.productSelected);
      this.productSelected = undefined;
      this.removeProduct();
    }
  }

  removeProduct() {
    const index = this._cartService.getIndexToAddProduct();
    this._cartService.removeProductInsurance(index);
    this._router.navigateByUrl('private/vendedor/select');
  }

  private _removeInsurance() {
    let countValid = 0;

    this.loading.onLoadingSafe();
    this._cartService.removeInsuranceCart(this.insuranceSelectedIndex);
    this.cart = this._cartService.cart;
    // this.safeForm.splice(this.insuranceSelectedIndex, 1);
    if (this.cart.length === 0) {
      this._router.navigateByUrl('private/vendedor/protection/safe');
    } else {
      this.setFormValue();

      this.safeForm.forEach((value) => {
        if (!value.invalid) {
          countValid++;
        }
      });

      this.isInvalidForm.emit(this.safeForm.length !== countValid);
    }

    if (this.insuranceSelectedIndex != this._cartService.getIndexToAddProduct()) {
      this._cartService.setIndexToAddProduct(this._cartService.getIndexToAddProduct() - 1);
    }

    this.loading.offLoadingSafe();
  }

  setCart(cart: any) {
    this.cart = cart;
  }

  removeSafeForm(index: number) {
    this.safeForm.splice(index, 1);

    setTimeout(() => {
      $(`#collapseOne${this._cartService.getIndexToAddProduct()}`).removeClass('collapse');
      $(`#collapseOne${this._cartService.getIndexToAddProduct()}`).addClass('collapse in show');
      $(`#aCollapseOne${this._cartService.getIndexToAddProduct()}`).removeClass('collapsed');
    }, 850);
  }

}
