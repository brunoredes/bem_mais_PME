import { Component, OnInit } from '@angular/core';
import { ProtectionService } from 'app/service/protection.service';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'app/service/cart.service';
import { InsuranceModel } from 'app/models/insurance.model';
import { ProductModel } from 'app/models/product.model';

declare let $: any;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  data: any = [];
  dataSmartphone: any = [];
  dataTablet: any = [];
  dataSmartwatch: any = [];
  dataFilter = [];
  dataFilter2 = [];
  requiredNewUsed: string;
  dataFilterAutoComplete = [];
  dataFilterAutoCompleteModal = [];
  productNotFound = false;
  listDeleteFilter = [];
  filterBrand: string[] = [];
  filterMemory: string[] = [];
  filterColor: string[] = [];
  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  cart: InsuranceModel[];
  searchModal: string;
  dimissModalSearch: string;

  productSelected: number;
  insuranceSelectedIndex: number;

  constructor(
    public api: ProtectionService,
    public loading: LoadingService,
    public router: Router,
    private _cartService: CartService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // Esconde a modal do filtro com classe
    $(document).mouseup(function(e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.hide();
      }
      // Filter
    });
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
    (() => {
      const searchbox = $('#search');
      const autocomplete = $('#search-autocomplete');

      searchbox.on('focus', () => {
        if (document.getElementById('search')['value'] &&
          document.getElementById('search')['value'].length > 0) {
          autocomplete.slideDown('fast');
        }
      }).on('keyup', () => {
        if (document.getElementById('search')['value'] &&
          document.getElementById('search')['value'].length > 0) {
          autocomplete.slideDown('fast');
        } else {
          autocomplete.slideUp('fast');
          this.closeCollapseNewUsed();
        }
      });

      $(document).on('click', (e) => {
        // click anywhere outside searchbox to close
        if (!$(e.target).closest('.searchbox').length) {
          if (autocomplete.is(':visible')) {
            autocomplete.slideUp('fast');
            this.closeCollapseNewUsed();
          }
        }
      });

      autocomplete.css('top', (searchbox.outerHeight()) + 'px');

    })();

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


    this.data = this.activatedRoute.snapshot.data.product

    this.dataSmartphone = this.data.filter((record) => {
      return record.category === 'Smartphone';
    });
    this.dataTablet = this.data.filter((record) => {
      return record.category === 'Tablet';
    });
    this.dataSmartwatch = this.data.filter((record) => {
      return record.category === 'Smartwatchs';
    });
    this.filterCategory('Smartphone');

  }

  ngOnDestroy() {
    this._cartService.cart.forEach((value, index) => {
      if (!value.productSelected) {
        this._cartService.removeInsuranceCart(index);
      }
    });
    this.cart = this._cartService.cart;
  }

  showSearchModal() {

    this.searchModal = '';

    if (screen.width < 769) {
      // this.dataFilterAutoCompleteModal = this.data;
      this.searchModal = '#search-modal';
      document.getElementById('searchModal')['value'] = '';
      setTimeout(() => {
        document.getElementById('searchModal').focus();
      }, 300);
    }

  }

  alterTab(category: string) {
    this.filterCategory(category)
    this.clearFilter(false);
  };

  filterCategory(category: string) {
    this.dataFilter = [];
    this.loading.onLoadingSelectProduct();
    setTimeout(() => {
      if (category === 'Smartphone') {
        this.dataFilter = this.dataSmartphone;
      } else if (category === 'Tablet') {
        this.dataFilter = this.dataTablet;
      } else if (category === 'Smartwatchs') {
        this.dataFilter = this.dataSmartwatch;
      }
    }, 800);
    this.loading.offLoadingSelectProduct();
  }

  onKeyUpFilter(id: string) {
    if (screen.width >= 769) {
      this.dataFilterAutoComplete = [];
    } else {
      this.dataFilterAutoCompleteModal = [];
    }

    let description: string;
    const regExp: RegExp = new RegExp('.*' + document.getElementById(id)['value'].toLowerCase() + '.*');

    if (regExp) {
      this.data.forEach((value) => {

        description = value.category + ' ' + value.name + ' ' + value.description;

        if (description.toLowerCase().match(regExp)) {
          if (screen.width >= 769) {
            this.dataFilterAutoComplete.push(value);
          } else {
            this.dataFilterAutoCompleteModal.push(value);
          }
        }
      });
    }
  }

  selectProduct(product: any, action: string) {

    let idNew: string;
    let idUsed: string;
    let timeout = 0;
    this.dimissModalSearch = '';

    if (action === 'ConsultaSeguro' &&
      !document.getElementById(`newSearch${product.id}`)['checked'] &&
      !document.getElementById(`usedSearch${product.id}`)['checked']) {

      if (document.getElementById(`collapseNewUsed${product.id}`).getAttribute('aria-expanded') === 'false') {
        this.requiredNewUsed = `#collapseNewUsed${product.id}`;
      } else {
        this.requiredNewUsed = '';
      }
    } else if (action === 'ConsultaSeguroModal' &&
      !document.getElementById(`newSearchModal${product.id}`).classList.contains('mat-radio-checked') &&
      !document.getElementById(`usedSearchModal${product.id}`).classList.contains('mat-radio-checked')) {

      this.toastr.error('Selecione um produto novo ou usado.');

    } else if (action === 'addProduto' &&
      !document.getElementById(`new${product.id}`)['checked'] &&
      !document.getElementById(`used${product.id}`)['checked']) {

      this.toastr.error('Selecione um produto novo ou usado.');

    } else {
      if (action === 'ConsultaSeguro') {
        idNew = `newSearch${product.id}`;
        idUsed = `usedSearch${product.id}`;
      } else if (action === 'addProduto') {
        idNew = `new${product.id}`;
        idUsed = `used${product.id}`;
        timeout = 1000;

        $(`#addProduct${product.id}`).parent().parent().find(`#product_overlay_addProduct${product.id}`).css({
          'transform': ' translateY(0px)',
          'opacity': '1',
          'transition': 'all ease-in-out .45s'
        }).delay(1500);
      } else if (action === 'ConsultaSeguroModal') {
        idNew = `newSearch${product.id}`;
        idUsed = `usedSearch${product.id}`;
        this.dimissModalSearch = 'modal';
      }

      if (action === 'addProduto' || action === 'ConsultaSeguro') {
        if (document.getElementById(idNew)['checked']) {
          product.status = 'Novo';
        } else if (document.getElementById(idUsed)['checked']) {
          product.status = 'Usado';
        }
      } else if (action === 'ConsultaSeguroModal') {

        if (document.getElementById(`newSearchModal${product.id}`).classList.contains('mat-radio-checked')) {
          product.status = 'Novo';
        } else if (document.getElementById(`usedSearchModal${product.id}`).classList.contains('mat-radio-checked')) {
          product.status = 'Usado';
        }
      }

      this._cartService.addProductInCurrentInsurance(product);

      setTimeout(() => {
        this.router.navigateByUrl('private/vendedor/protection/product');
      }, timeout);
    }
  }

  closeCollapseNewUsed() {
    this.dataFilterAutoComplete.forEach((value) => {
      document.getElementById(`collapseNewUsed${value.id}`).setAttribute('aria-expanded', 'false');
      $(`#collapseNewUsed${value.id}`).removeClass('collapse in show');
      $(`#collapseNewUsed${value.id}`).addClass('collapsing');
    });
  }

  filterArray(filterArray: string[], dataArray: any[], field: string) {

    let regExp: RegExp;
    let property: string;
    let i = 0;

    filterArray.forEach((value) => {
      if (field === 'marca') {
        regExp = new RegExp('.*' + value + ' .*');
        property = 'name';
      } else if (field === 'memoria') {
        regExp = new RegExp('^' + value + ',.*');
        property = 'description';
      } else if (field === 'cor') {
        regExp = new RegExp(value + '.*');
        property = 'color';
      }

      if ((field === 'memoria' && this.filterBrand.length > 0) ||
        (field === 'cor' && (this.filterBrand.length > 0 || this.filterMemory.length > 0))) {

        i = 0;

        while (i < this.dataFilter2.length) {
          const item = this.dataFilter2[i];

          if (!this.listDeleteFilter[i]) {
            this.listDeleteFilter.push({ 'delete': 'Y' })
          }

          if (!item['description'].match(regExp)) {
            i += 1;
          } else {
            this.listDeleteFilter[i]['delete'] = 'N'
            i += 1;
          }
        };
      } else {
        dataArray.forEach((value) => {
          if (value[property].match(regExp)) {
            if (field === 'marca' ||
              (field === 'memoria' && this.filterBrand.length === 0) ||
              (field === 'cor' && (this.filterBrand.length === 0 || this.filterMemory.length === 0))) {
              this.dataFilter2.push(value);
            }
          }
        });
      }
    });
  }

  deleteFilter() {
    this.listDeleteFilter.forEach(() => {
      let i = 0;
      while (i < this.dataFilter2.length) {
        const item = this.listDeleteFilter[i];
        if (item['delete'] === 'Y') {
          this.dataFilter2.splice(i, 1);
          this.listDeleteFilter.splice(i, 1);
        } else {
          i += 1;
        }
      };
    });
  }

  filterProduct(filter: string, field: string) {

    let dataCategory

    if (document.getElementById('smartphone').getAttribute('aria-selected') === 'true') {
      dataCategory = this.dataSmartphone;
    } else if (document.getElementById('tablet').getAttribute('aria-selected') === 'true') {
      dataCategory = this.dataTablet;
    } else if (document.getElementById('smartwatchs').getAttribute('aria-selected') === 'true') {
      dataCategory = this.dataSmartwatch;
    }

    this.loading.onLoadingSelectProduct();
    this.productNotFound = false;
    this.dataFilter = [];
    this.dataFilter2 = [];

    if (document.getElementById(filter)['checked']) {
      if (field === 'marca') {
        this.filterBrand.push(filter)
      } else if (field === 'memoria') {
        this.filterMemory.push(filter)
      } else if (field === 'cor') {
        this.filterColor.push(filter)
      }
    } else {
      let i = 0;
      if (field === 'marca') {
        while (i < this.filterBrand.length) {
          const item = this.filterBrand[i];
          if (item === filter) {
            this.filterBrand.splice(i, 1);
          } else {
            i += 1;
          }
        };
      } else if (field === 'memoria') {
        while (i < this.filterMemory.length) {
          const item = this.filterMemory[i];
          if (item === filter) {
            this.filterMemory.splice(i, 1);
          } else {
            i += 1;
          }
        };
      } else if (field === 'cor') {
        while (i < this.filterColor.length) {
          const item = this.filterColor[i];
          if (item === filter) {
            this.filterColor.splice(i, 1);
          } else {
            i += 1;
          }
        };
      }
    }

    if (this.filterBrand.length > 0) {
      this.filterArray(this.filterBrand, dataCategory, 'marca');
    }

    if (this.filterMemory.length > 0) {
      this.listDeleteFilter = [];
      if (this.dataFilter2.length > 0 && this.filterBrand.length > 0) {
        this.filterArray(this.filterMemory, this.dataFilter2, 'memoria');
        this.deleteFilter();
      } else {
        this.filterArray(this.filterMemory, dataCategory, 'memoria');
      }
    }

    if (this.filterColor.length > 0) {
      this.listDeleteFilter = [];
      if (this.dataFilter2.length > 0 && (this.filterBrand.length > 0 || this.filterMemory.length > 0)) {
        this.filterArray(this.filterColor, this.dataFilter2, 'cor');
        this.deleteFilter();
      } else {
        this.filterArray(this.filterColor, dataCategory, 'cor');
      }
    }

    if (this.dataFilter2.length > 0) {

      this.dataFilter2.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });

      setTimeout(() => {
        this.dataFilter = this.dataFilter2;
      }, 800);

    } else if (this.filterBrand.length === 0 && this.filterMemory.length === 0 && this.filterColor.length === 0) {
      if (document.getElementById('smartphone').getAttribute('aria-selected') === 'true') {
        this.filterCategory('Smartphone');
      } else if (document.getElementById('tablet').getAttribute('aria-selected') === 'true') {
        this.filterCategory('Tablet');
      } else if (document.getElementById('smartwatchs').getAttribute('aria-selected') === 'true') {
        this.filterCategory('Smartwatchs');
      }
      setTimeout(() => {
        this.productNotFound = false;
      }, 800);
    } else {
      setTimeout(() => {
        this.dataFilter = this.dataFilter2;
        this.productNotFound = true;
      }, 800);
    }

    this.loading.offLoadingSelectProduct();

  }

  clearFilter(refreshData: boolean) {
    document.getElementById('Samsung')['checked'] = false;
    document.getElementById('LG')['checked'] = false;
    document.getElementById('Motorola')['checked'] = false;
    document.getElementById('Positivo')['checked'] = false;
    document.getElementById('Asus')['checked'] = false;
    document.getElementById('Iphone')['checked'] = false;
    document.getElementById('8GB')['checked'] = false;
    document.getElementById('16GB')['checked'] = false;
    document.getElementById('32GB')['checked'] = false;
    document.getElementById('64GB')['checked'] = false;
    document.getElementById('128GB')['checked'] = false;
    document.getElementById('Preto')['checked'] = false;
    document.getElementById('Dourado')['checked'] = false;
    document.getElementById('Branco')['checked'] = false;
    document.getElementById('Cinza')['checked'] = false;
    document.getElementById('Azul')['checked'] = false;
    this.productNotFound = false;

    this.filterBrand = [];
    this.filterMemory = [];
    this.filterColor = [];

    if (refreshData) {
      if (document.getElementById('smartphone').getAttribute('aria-selected') === 'true') {
        this.filterCategory('Smartphone');
      } else if (document.getElementById('tablet').getAttribute('aria-selected') === 'true') {
        this.filterCategory('Tablet');
      } else if (document.getElementById('smartwatchs').getAttribute('aria-selected') === 'true') {
        this.filterCategory('Smartwatchs');
      }
    }
  }

  removeSelected() {
    if (this.insuranceSelectedIndex >= 0) {
      this._removeInsurance();
      this.insuranceSelectedIndex = undefined
    } else if (this.productSelected >= 0) {
      this._cartService.setIndexToAddProduct(this.productSelected);
      this.removeProduct();
    }
  }

  removeProduct() {
    const index = this._cartService.getIndexToAddProduct();
    this._cartService.removeProductInsurance(index);
    this.router.navigateByUrl('private/vendedor/select');

    if (document.getElementById('smartphone').getAttribute('aria-selected') === 'true') {
      this.filterCategory('Smartphone');
    } else if (document.getElementById('tablet').getAttribute('aria-selected') === 'true') {
      this.filterCategory('Tablet');
    } else if (document.getElementById('smartwatchs').getAttribute('aria-selected') === 'true') {
      this.filterCategory('Smartwatchs');
    }

    this.clearFilter(false);
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

  selectProductToRemove(index: number) {
    this.productSelected = index;
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
    this._cartService.cart.forEach((value, index) => {
      if (!value.productSelected) {
        this._cartService.removeInsuranceCart(index);
      }
    });
    this._cartService.removeInsuranceCart(this.insuranceSelectedIndex);
    this.cart = this._cartService.cart;
    this.router.navigateByUrl('private/vendedor/protection/safe');
  }


  /**
    * Quantidade de seguros dentro do carrinho;
    *
    * @author Wesley Alves
    */
  get qtdInsuranceInCart(): number {
    return this.cart.length;
  }

}
