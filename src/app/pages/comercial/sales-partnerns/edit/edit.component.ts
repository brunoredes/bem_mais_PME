import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SalesPartnersService } from 'app/service/sales-partners.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditSalesComponent implements OnInit {
  partnerForm: FormGroup;

  constructor(
    private _formBuild: FormBuilder,
    private _partnersServices: SalesPartnersService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createPartnerForm();
    const partnerId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    const disableForm = this._activatedRoute.snapshot.queryParamMap.get(
      'disableForm'
    );

    this._partnersServices.getPartnerById(partnerId).subscribe(value => {
      this.partnerForm.patchValue(value);
      if (disableForm) {
        this.partnerForm.disable(); }
    });
  }

  onPictureChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      //   reader.onload = (event) => { // called once readAsDataURL is completed
      //     this.url = event.target.result;
      //   }
    }
  }

  private _createPartnerForm() {
    this.partnerForm = this._formBuild.group({
      id: '',
      code: '',
      corporateName: '',
      commercialName: '',
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
      level: '',
      responsible: this._formBuild.group({
        name: '',
        genre: '',
        phone: '',
        email: ''
      })
    });
  }
}
