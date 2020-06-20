import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultationsService } from 'app/service/consultations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'app/service/cart.service';
import { PurchaseService } from 'app/service/purchase.service';
import { InsuranceModel } from 'app/models/insurance.model';
import { tap } from 'rxjs/operators';
import { PaymentModel } from 'app/models/payment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  parcelas = [
    {
      'value': 1
    },
    {
      'value': 2
    },
    {
      'value': 3
    },
    {
      'value': 4
    },
    {
      'value': 5
    },
    {
      'value': 6
    },
    {
      'value': 7
    },
    {
      'value': 8
    },
    {
      'value': 9
    },
    {
      'value': 10
    },
    {
      'value': 11
    },
    {
      'value': 12
    },
  ]

  paymentForm: FormGroup
  cart: Array<InsuranceModel> = this._cartService.cart;

  constructor(public consulta: ConsultationsService,
              private fb: FormBuilder,
              public  _cartService: CartService,
              private _purchaseStorage: PurchaseService,
              private router: Router
              ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.createForm();
  }

  format = value => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  addInsurance() {
    this._cartService.cart.forEach((value, index) => {
      if (!value.productSelected) {
        this._cartService.removeInsuranceCart(index);
      }
    });
    this.cart = this._cartService.cart;
    this.router.navigateByUrl('private/vendedor/protection/safe');
  }

  createForm() {
    this.paymentForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cpfNumber: ['', Validators.required],
      installments: ['', Validators.required]
    })

    this.paymentForm.valueChanges.pipe(
      tap(() => {

        if (this.paymentForm.valid) {
          const pay: PaymentModel = this.paymentForm.value;
          this._purchaseStorage.savePayment(pay);
        }
      })
    ).subscribe();
  }

  getInsurancePlanPriceAmount(index: number) {
    const insurance = this._cartService.cart[index];
    return  (insurance && insurance.planPriceSelected) ? insurance.planPriceSelected.amount : 0;
  }

  get totalValue() {
    let totalValue = 0;
    for (const item of this._cartService.cart) {
      if (item.planPriceSelected ) {
        totalValue += +item.planPriceSelected.amount;
      }
    }
    return totalValue;
  }

}
