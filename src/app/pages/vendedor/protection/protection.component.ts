import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InsuranceModel } from 'app/models/insurance.model';
import { CartService } from 'app/service/cart.service';
import { InsuranceService } from 'app/service/insurance.service';
import { PurchaseService } from 'app/service/purchase.service';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

const DEFAULT_PHONE_MASK = '0{11}';
const EMAIL_PATTERN = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnInit {
  insurances: Array<InsuranceModel>;
  insuranceSelected: InsuranceModel;

  searchProtection: string;
  clientForm: FormGroup;

  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  maskPhone: string = DEFAULT_PHONE_MASK;
  modalCliente: string;

  constructor(
    private _router: Router,
    private _insuranceService: InsuranceService,
    private _formBuilder: FormBuilder,
    private _cartService: CartService,
    private _purchaseService: PurchaseService,
    public loading: LoadingService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.insurances = this.activatedRoute.snapshot.data.yourProtection;
    this._createClientForm();

    const rs = document.readyState;
    switch (rs) {
      case 'interactive':
      case 'complete':
        this.loading.offLoadingMenuComponents();
        break;
    }
  }

  /** Adiciona o seguro selecionado ao carrinho */
  addCart(insurance: InsuranceModel) {
    this._cartService.setIndexToAddProduct(this._cartService.cart.length)
    this._cartService.saveInsuranceInCart(insurance);
    if (this._purchaseService.person) {
      this._router.navigateByUrl('private/vendedor/select');
    } else {      
      this.modalCliente = 'modal'
    }
  }

  getMaskPhone(control, focus?: boolean) {
    if (focus) {
      return (this.maskPhone = DEFAULT_PHONE_MASK);
    }
    if (this.clientForm.get(control).value) {
      if (this.clientForm.get(control).value.length > 10) {
        this.maskPhone = '(00) 00000 0000';
      } else {
        this.maskPhone = '(00) 0000 0000';
      }
    }
  }

  /**
   * Salva parte das informações do atual cliente;
   */
  saveProspect() {
    this._purchaseService.savePerson(this.clientForm.value);
  }

  /**
   * Cria formulário do cliente com os campos necessário para continuar;
   */
  private _createClientForm() {
    this.clientForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      cellPhone: ['', [Validators.required]],
      postalCode: ['', [Validators.required]]
    });
  }
}
