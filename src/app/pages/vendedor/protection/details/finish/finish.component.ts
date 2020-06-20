import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'app/service/purchase.service';
import { PersonModel } from 'app/models/person.model';
import { PurchaseModel } from 'app/models/purchase.model';
import { CartService } from 'app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {
  constructor(
    private _purchaseService: PurchaseService,
    private _cartService: CartService,
    private _router: Router
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;}

  newSale() {
    this._purchaseService.reset();
    this._cartService.reset();
    this._router.navigateByUrl('private/vendedor/protection/safe');
  }

  sendCertificateEmail() {
    this._purchaseService.sendCertificateEmail();
  }

  sendKitEmail() {
    this._purchaseService.sendKitEmail();
  }

  get paymentInfo() {
    return this._purchaseService.payment;
  }

  get personInfo() {
    return this._purchaseService.person;
  }

  get insurances() {
    return this._cartService.cart;
  }
}
