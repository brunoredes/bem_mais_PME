import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MasterDealerStoreManagerService } from 'app/service/master-dealer-store-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDealerManagerFormModel } from 'app/models/master-dealer-manager-form.model';
import { UfModel } from 'app/models/uf.model';
import { UfService } from 'app/service/uf.service';
import { CidadeModel } from 'app/models/cidade.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StateModel } from 'app/models/state.model';
import { CityModel } from 'app/models/city.model';

@Component({
  templateUrl: './form-store-manager.component.html',
  styleUrls: ['./form-store-manager.component.scss']
})
export class FormStoreManagerComponent implements OnInit {
  managerForm: FormGroup;
  states: Array<UfModel>;
  cities: string[] = [];
  stores: Array<any>;

  constructor(
    private _formBuild: FormBuilder,
    private _service: MasterDealerStoreManagerService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _ufService: UfService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createManagerForm();
    const managerId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    if (managerId) {
      const disableForm = this._activatedRoute.snapshot.queryParamMap.get(
        'disableForm'
      );
      this._service.getManagerById$(managerId).subscribe(value => {
        this.managerForm.patchValue(value);
        if (disableForm) {
          this.managerForm.disable();
        }
      });
    }
    this.states = this._activatedRoute.parent.snapshot.data.values.states;
  }

  submit() {
    this._service.sendMananger$(this.manager).subscribe(() => this.goBack());
  }

  goBack() {
    this._router.navigateByUrl('private/masterdealer/store-manager/list');
  }

  formIsInvalid() {
    return this.managerForm.invalid;
  }

  private _createManagerForm() {
    this.managerForm = this._formBuild.group({
      dealerId: '',
      name: '',
      birthDate: '',
      cpf: '',
      rg: '',
      genre: '',
      email: '',
      phone: '',
      storeId: '',
      postalCode: '',
      address: '',
      addressNumber: '',
      neighborhood: '',
      city: '',
      state: '',
      complement: ''
    });
  }

  get manager(): MasterDealerManagerFormModel {
    return this.managerForm.value;
  }

  change() {
    const id = this.managerForm.get('state').value;
    this._ufService.getCidade(id).subscribe(res => {
      this.cities = res;
    })
  }
}
