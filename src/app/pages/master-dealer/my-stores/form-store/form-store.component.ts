import { Component, OnInit } from '@angular/core';
import { PartnerFormModel } from 'app/models/partner-form.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MasterDealerStoreFormModel } from 'app/models/master-dealer-store-form.model';
import { switchMap } from 'rxjs/operators';
import { UfModel } from 'app/models/uf.model';
import { Observable } from 'rxjs';
import { MasterDealerMyStoreService } from 'app/service/master-dealer-my-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UfService } from 'app/service/uf.service';
import { StateModel } from 'app/models/state.model';
import { CityModel } from 'app/models/city.model';

@Component({
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.scss']
})
export class FormStoreComponent implements OnInit {
  massa: Boolean = false;
  individual: Boolean = true;

  storeForm: FormGroup;
  states: Array<UfModel>;
  cities: string[];
  stores: Array<any>;

  constructor(
    private _formBuild: FormBuilder,
    private _service: MasterDealerMyStoreService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _ufService: UfService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createGoalForm();
    const storeId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    if (storeId) {
      const disableForm = this._activatedRoute.snapshot.queryParamMap.get(
        'disableForm'
      );
      this._service.getStoreById$(storeId).subscribe(value => {
        this.storeForm.patchValue(value);
        if (disableForm) {
          this.storeForm.disable();
        }
      });
    }
    this._ufService.getEstados().subscribe(res => this.states = res);
  }

  submit() {
    this._service.sendStore$(this._store).subscribe(() => this.goBack());
  }

  goBack() {
    history.back()
  }

  formIsInvalid() {
    return this.storeForm.invalid;
  }

  changeindividual() {
    this.individual = true;
    this.massa = false;
  }

  changemassa() {
    this.individual = false;
    this.massa = true;
  }

  private _createGoalForm() {
    this.storeForm = this._formBuild.group({
      companyName: '',
      cnpj: '',
      commercialname: '',
      postalCode: '',
      address: '',
      addressNumber: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      phone: '',
      email: '',
      site: '',
      image: ''
    });
  }

  get _store(): MasterDealerStoreFormModel {
    return this.storeForm.value;
  }

  change() {
    const id = this.storeForm.get('state').value;
    this._ufService.getCidade(id).subscribe(res => {
      this.cities = res;
    })
  }
}
