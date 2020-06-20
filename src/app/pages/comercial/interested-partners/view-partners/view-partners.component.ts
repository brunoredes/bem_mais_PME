import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InterestedPartnersService } from 'app/service/interested-partners.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './view-partners.component.html',
  styleUrls: ['./view-partners.component.scss']
})
export class ViewPartnersComponent implements OnInit {
  partnerForm: FormGroup;

  constructor(
    private _formBuild: FormBuilder,
    private _partnersServices: InterestedPartnersService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createPartnerForm();
    const partnerId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    this._partnersServices.getPartnerById(partnerId).subscribe(value => {
      this.partnerForm.patchValue(value);
      this.partnerForm.disable();
    });
  }

  onPictureChange(event) {}

  private _createPartnerForm() {
    this.partnerForm = this._formBuild.group({
      id: '',
      code: '',
      corporateName: '',
      image: '',
      cnpj: '',
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
}
