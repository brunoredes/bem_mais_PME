import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CorretorGoalsService } from 'app/service/corretor-goals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GerenteMyStoreService } from 'app/service/gerente-my-store.service';
import { MasterDealerStoreFormModel } from 'app/models/master-dealer-store-form.model';
import { UfModel } from 'app/models/uf.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UfService } from 'app/service/uf.service';

@Component({
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.scss']
})
export class MyStoreComponent implements OnInit {

  storeForm: FormGroup;
  states: Array<UfModel>;
  cities: string[];

  constructor(
    private _formBuild: FormBuilder,
    private _gerenteMyStoreService: GerenteMyStoreService,
    private _router: Router,
    private _ufService: UfService
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createStoreForm();
    this._ufService.getEstados().subscribe( res => this.states = res);
  }

  submit() {
    this._gerenteMyStoreService
      .sendStore$(this._store)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this._router.navigateByUrl('private/gerentedeloja/home');
  }

  formIsInvalid() {
    return this.storeForm.invalid;
  }

  private _createStoreForm() {
    this.storeForm = this._formBuild.group({
      id: '',
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
