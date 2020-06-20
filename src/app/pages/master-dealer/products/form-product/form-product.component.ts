import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MasterDealerProductService } from 'app/service/master-dealer-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDealerProductFormModel } from 'app/models/master-dealer-product-form.model';
import { CategoryProductModel } from 'app/models/category-product.model';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  categoryProducts: CategoryProductModel;

  warranties: Array<string> = [
    'Garantia 1',
    'Garantia 2',
    'Garantia 3'
  ];

  productForm: FormGroup;

  massa: Boolean = false;
  individual: Boolean = true;

  constructor(
    private _formBuild: FormBuilder,
    private _service: MasterDealerProductService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._createProductForm();
    const productId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );

    if (productId) {
      const disableForm = this._activatedRoute.snapshot.queryParamMap.get(
        'disableForm'
      );
      this._service.getProductById$(productId).subscribe(value => {
        this.productForm.patchValue(value);
        if (disableForm) {
          this.productForm.disable();
        }
      });
    }

    this.categoryProducts = this._activatedRoute.snapshot.data.values.categoryProducts;
  }

  submit() {
    this._service.sendProduct$(this._product).subscribe(() => this.goBack());
  }

  goBack() {
    this._router.navigateByUrl('private/masterdealer/products/list');
  }

  formIsInvalid() {
    return this.productForm.invalid;
  }

  changeindividual() {
    this.individual = true;
    this.massa = false;
  }

  changemassa() {
    this.individual = false;
    this.massa = true;
  }

  private _createProductForm() {
    this.productForm = this._formBuild.group({
      id: '',
      code: '',
      name: '',
      brand: '',
      model: '',
      version: '',
      categoryId: '',
      amount: '',
      ean: '',
      dactoryWarranty: ''
    });
  }

  get _product(): MasterDealerProductFormModel {
    return this.productForm.value;
  }
}
