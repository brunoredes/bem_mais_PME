import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UfService } from 'app/service/uf.service';
import { MeusVendedoreService } from 'app/service/meus-vendedores-gerente.service';

@Component({
  templateUrl: './form-sellers.component.html',
  styleUrls: ['./form-sellers.component.scss']
})
export class FormSellersComponent implements OnInit {

  newSellerForm: FormGroup;
  profiles = ['option 1', 'option2'];
  uf: any[];
  cities: string[];
  individual: any
  massa: any
  update: any

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _ufService: UfService,
    private _service: MeusVendedoreService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createForm();
    const sellerId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    if (sellerId) {
      const disableForm = this._activatedRoute.snapshot.queryParamMap.get(
        'disableForm'
      );
      this._service.getSellerById$(sellerId).subscribe(value => {
        this.newSellerForm.patchValue(value);
        this.update = true;
        if (disableForm) {
          this.newSellerForm.disable();
        }
      });
    }
    this.uf = this._activatedRoute.snapshot.data.uf;
    this.individual = true
  }

  changeindividual() {
    this.individual = true;
    this.massa = false;
  }

  changemassa() {
    this.individual = false;
    this.massa = true;
  }

  voltar() {
    history.back()
  }

  private _createForm() {
    this.newSellerForm = this._fb.group({
      dealerId: '',
      username: '',
      storeId: '',
      name: '',
      birthDate: '',
      cpf: '',
      rg: '',
      genre: '',
      email: '',
      site: '',
      phone: '',
      postalCode: '',
      address: '',
      addressNumber: '',
      neighborhood: '',
      city: '',
      state: '',
      complement: ''
    });
  }

  change() {
    const id = this.newSellerForm.get('state').value;
    this._ufService.getCidade(id).subscribe(res => {
      this.cities = res;
    })
  }
}
