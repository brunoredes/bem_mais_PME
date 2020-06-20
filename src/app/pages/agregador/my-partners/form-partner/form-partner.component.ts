import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerFormModel } from 'app/models/partner-form.model';
import { AggregatorMyPartnersService } from 'app/service/aggregator-my-partners.service';

@Component({
  templateUrl: './form-partner.component.html',
  styleUrls: ['./form-partner.component.scss']
})
export class FormPartnerComponent implements OnInit {
  pessoajuridica: Boolean = false;
  pessoafisica: Boolean = true;
  massa: Boolean = false;
  individual: Boolean = true;

  partnerForm: FormGroup;

  constructor(
    private _formBuild: FormBuilder,
    private _myPartnersServices: AggregatorMyPartnersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createPartnerForm();
    const partnerId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    if (partnerId) {
      this._myPartnersServices.getPartnerById$(partnerId).subscribe(value => {
        this.partnerForm.patchValue(value);
      });
    }
  }

  onPictureChange(event) {}

  changepessoafisica() {
    this.pessoafisica = true
    this.pessoajuridica = false
  }
  changepessoajuridica() {
    this.pessoafisica = false
    this.pessoajuridica = true
  }
  changeindividual() {
    this.individual = true
    this.massa = false
  }
  changemassa() {
    this.individual = false
    this.massa = true
  }

  submitPartner() {
    this._myPartnersServices.sendPartner$(this._formValue).subscribe();
  }

  goBack() {
    this._router.navigateByUrl('private/agregador/my-partners/list');
  }

  formIsInvalid() {
    return this.partnerForm.invalid;
  }

  private _createPartnerForm() {
    this.partnerForm = this._formBuild.group({
      id: '',
      code: '',
      name: '',
      corporateName: '',
      image: '',
      cnpj: '',
      cpf: '',
      rg: '',
      cep: '',
      address: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      phone: '',
      email: '',
      site: '',
      responsible: this._formBuild.group({
        name: '',
        genre: '',
        phone: '',
        email: ''
      })
    });
  }

  get _formValue(): PartnerFormModel {
    return this.partnerForm.value;
  }
}
