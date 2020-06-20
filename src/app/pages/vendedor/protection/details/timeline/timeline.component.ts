import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'app/service/cart.service';
import { InsuranceModel } from 'app/models/insurance.model';
import { ProductModel } from 'app/models/product.model';
import { LoadingService } from 'app/service/loading.service';
import { RegisterClientFormService } from 'app/service/register-client-form.service';
import { ToastrService } from 'ngx-toastr';
import { MatStepper } from '@angular/material';
import { UtilService } from 'app/helpers/utils';

declare var $;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  invalidFormTwoStep = true;
  invalidFormThreeStep = true;
  title: any;
  cart: InsuranceModel[];

  safe = false;

  productSelected: number;
  insuranceSelectedIndex: number;

  informePgto: string;

  constructor(
    private _formBuilder: FormBuilder,
    public _cartService: CartService,
    public router: Router,
    public loading: LoadingService,
    private registerClientForm: RegisterClientFormService,
    private toastr: ToastrService,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const sidebarTrigger = document.getElementById('cart');
    const sidebarClose = document.getElementById('sidebar__close');
    const sidebar = document.getElementById('content-grid-feed');

    sidebarTrigger.addEventListener('click', () => {
      if (screen.width < 769) {
        sidebar.style.display = 'block'
        sidebar.classList.remove('isClosed');
        document.getElementById('menu-overlay').style.display = 'block';
        document.getElementById('sidebar__close').style.display = 'block';
      }
    })
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.add('isClosed');
      document.getElementById('sidebar__close').style.display = 'none';
      document.getElementById('menu-overlay').style.display = 'none';
    })

    this.cart = this._cartService.cart;
    this._cartService.cartItens.subscribe(
      event => this.setCart(event)
    );

    this.title = this._translate.getVendProtectionDetailsTimelineTitle();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    // hover cart

    (function () {
      $('#cart').on('click', function () {
        if (screen.width >= 769) {
          $('.shopping-cart').fadeToggle('fast');
        }
      });
      $('.shopping-cart').on('mouseleave', function () {
        $('.shopping-cart').fadeOut();
      });
    })();

    (function () {
      $('#filter').on('click', function () {
        $('.filter').fadeToggle('fast');
      });

      $('.filter').on('mouseleave', function () {
        $('.filter').fadeOut();
      });
    })();
  }

  setCart(cart: any) {
    this.cart = cart;
  }

  nextCustomerRegistration(stepper: MatStepper) {
    this.informePgto = '';
    if (this.registerClientForm.validateForm()) {
      this.informePgto = '#informePgto';
      stepper.selected.completed = true;
      stepper.next();
    };
  }

  noneTitle(event: any) {
    if (event.selectedIndex <= 2) {
      document.getElementById('Title').classList.remove('d-none');
      if (event.selectedIndex === 0) {
        this.safe = false;
      } else if (event.selectedIndex === 1) {
        this.safe = true;
      }
    } else {
      document.getElementById('Title').classList.add('d-none');
    }
  }

  nextSelectInsurance(stepper: MatStepper) {
    const cart = this._cartService.cart;
    const index = this._cartService.getIndexToAddProduct();

    if (!cart[index].planPriceSelected) {
      this.toastr.error(`Selecione um plano de pagamento`);
    } else {
      this.safe = true;
      stepper.selected.completed = true;
      stepper.next();
    }
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

  select() {
    this.safe = false;
    this.title = this._translate.getVendProtectionDetailsTimelineTitle();
  }

  product(stepper: MatStepper) {
    this.title = 'Detalhe do Seguro';
    this.nextSelectInsurance(stepper);
  }

  register(stepper: MatStepper) {
    const cart = this._cartService.cart;
    let planNotFound = false;
    this.title = 'Cadastro de cliente';

    cart.forEach((value) => {
      if (!value.planPriceSelected) {
        planNotFound = true;
      }
    })

    if (planNotFound) {
      this.toastr.error(`Existe seguro(s) sem plano de pagamento selecionado.`);
    } else {
      stepper.selected.completed = true;
      stepper.next();
    }
  }

  // noneTitle(stepper: MatStepper) {
  //   document.getElementById('Title').classList.add('d-none');
  //   stepper.selected.completed = true;
  //   stepper.next();
  // }

  nextInformPayment(stepper: MatStepper) {
    stepper.selected.completed = true;
    stepper.next();
  }

  removeSelected() {
    if (this.insuranceSelectedIndex >= 0) {
      this._removeInsurance();
      this.insuranceSelectedIndex = undefined;
    } else if (this.productSelected >= 0) {
      this._cartService.setIndexToAddProduct(this.productSelected);
      this.removeProduct();
    }
  }

  removeProduct() {
    const index = this._cartService.getIndexToAddProduct();
    this._cartService.removeProductInsurance(index);
    this.router.navigateByUrl('private/vendedor/select');
  }


  displayEvent(event) {
    this.invalidFormThreeStep = event;
  }

  selectProductToRemove(index: number) {
    this.productSelected = index;

    if (screen.width < 769) {

      const sidebar = document.getElementById('content-grid-feed');

      sidebar.classList.add('isClosed');
      document.getElementById('sidebar__close').style.display = 'none';
      document.getElementById('menu-overlay').style.display = 'none';
    }
  }

  selectInsuranceToRemove(index: number) {
    this.insuranceSelectedIndex = index;

    if (screen.width < 769) {

      const sidebar = document.getElementById('content-grid-feed');

      sidebar.classList.add('isClosed');
      document.getElementById('sidebar__close').style.display = 'none';
      document.getElementById('menu-overlay').style.display = 'none';
    }
  }

  private _removeInsurance() {

    this.loading.onLoadingSafe();
    this._cartService.removeInsuranceCart(this.insuranceSelectedIndex);
    this.cart = this._cartService.cart;

    if (this.cart.length === 0) {
      this.router.navigateByUrl('private/vendedor/protection/safe');
    } else if (this.insuranceSelectedIndex === this._cartService.getIndexToAddProduct()) {
      this.router.navigateByUrl('private/vendedor/protection/safe');
    }

    if (this.insuranceSelectedIndex !== this._cartService.getIndexToAddProduct()) {
      this._cartService.setIndexToAddProduct(this._cartService.getIndexToAddProduct() - 1);
    }

    this.loading.offLoadingSafe();
  }

  /**
   * Quantidade de seguros dentro do carrinho;
   *
   * @author Wesley Alves
   */
  get qtdInsuranceInCart(): number {
    return this._cartService.cart.length;
  }
}
