import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonServices } from 'app/helpers/commonServices';
import { EventEmitter } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PurchaseService } from 'app/service/purchase.service';
import { RegisterClientFormService } from 'app/service/register-client-form.service';
import { UtilService } from 'app/helpers/utils';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  util: CommonServices  = new CommonServices();
  registerClientFormFisica: FormGroup;
  registerClientFormJuridica: FormGroup;
  emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
  private DEFAULT_PHONE_MASK = '0{11}';
  maskPhone: string = this.DEFAULT_PHONE_MASK;
  maskPhoneResp: string = this.DEFAULT_PHONE_MASK;
  maskCpfCnpj: string;
  @Output()
  isInvalidForm: EventEmitter<boolean> = new EventEmitter();

  typePerson = 'Fisica';

  constructor(
    private fb: FormBuilder,
    private _purchaseStorage: PurchaseService,
    private registerClientForm: RegisterClientFormService,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.createForm();
    this.valuesProspect();
    this.registerClientForm.setTypePerson(this.typePerson);
  }


  createForm(): void {

    this.registerClientFormFisica = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      birthDate: this.fb.control(''),
      cpf: this.fb.control('', [Validators.required]),
      rg: this.fb.control('', [Validators.required]),
      gender: this.fb.control('Male'),
      nationality: this.fb.control('', [Validators.required]),
      address: this.fb.control('', [Validators.required]),
      postalCode: this.fb.control('', [Validators.required]),
      number: this.fb.control(''),
      complement: this.fb.control(''),
      discrict: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
      uf: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      cellPhone: this.fb.control('', [Validators.required]),
      smsNews: this.fb.control(false),
      whatsNews: this.fb.control(false),
      emailNews: this.fb.control(false),
      politicallyExposed: this.fb.control(false),
    });

    this.registerClientFormFisica.valueChanges.pipe(
      tap(() => {
        this.registerClientForm.setRegisterClientFormFisica(this.registerClientFormFisica);
        this.isInvalidForm.emit(this.registerClientFormFisica.invalid);
        if (this.registerClientFormFisica.valid) {
          const client = this.registerClientFormFisica.value;
          this._purchaseStorage.savePerson(client);
        }
      })
    ).subscribe();

    this.registerClientFormJuridica = this.fb.group({
      companyNameJuridica: this.fb.control('', [Validators.required]),
      cnpjJuridica: this.fb.control('', [Validators.required]),
      fantasyNameJuridica: this.fb.control('', [Validators.required]),
      zipCodeJuridica: this.fb.control('', [Validators.required]),
      addressJuridica: this.fb.control('', [Validators.required]),
      numberJuridica: this.fb.control('', [Validators.required]),
      complementJuridica: this.fb.control(''),
      discrictJuridica: this.fb.control('', [Validators.required]),
      cityJuridica: this.fb.control('', [Validators.required]),
      ufJuridica: this.fb.control('', [Validators.required]),
      cellPhoneJuridica: this.fb.control('', [Validators.required]),
      emailJuridica: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      websiteJuridica: this.fb.control('', [Validators.required]),
      nameRespJuridica: this.fb.control('', [Validators.required]),
      genderRespJuridica: this.fb.control('Male', [Validators.required]),
      cellPhoneRespJuridica: this.fb.control('', [Validators.required]),
      emailRespJuridica: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      smsNewsJuridica: this.fb.control(false),
      whatsNewsJuridica: this.fb.control(false),
      emailNewsJuridica: this.fb.control(false),
      politicallyExposedJuridica: this.fb.control(false),
    });

    this.registerClientFormJuridica.valueChanges.pipe(
      tap(() => {
        this.registerClientForm.setRegisterClientFormJuridica(this.registerClientFormJuridica);
        this.isInvalidForm.emit(this.registerClientFormJuridica.invalid);
        if (this.registerClientFormJuridica.valid) {
          const client = this.registerClientFormJuridica.value;
          this._purchaseStorage.savePerson(client);
        }
      })
    ).subscribe();
  }

  changeTypePerson() {
    this.registerClientForm.setTypePerson(this.typePerson);
  }

  onlyNumber(event): boolean {
    return this.util.numberOnly(event);
  }

  getMaskPhone(control, focus?: boolean) {
    if (focus) {
      if (control === 'cellPhoneRespJuridica') {
        return this.maskPhoneResp = this.DEFAULT_PHONE_MASK;
      } else {
        return this.maskPhone = this.DEFAULT_PHONE_MASK;
      }
    }
    if (this.registerClientFormFisica.get(control)) {
      if (this.registerClientFormFisica.get(control).value.length > 10) {
        this.maskPhone = '(00) 00000 0000';
      } else {
        this.maskPhone = '(00) 0000 0000';
      }
    }
    if (this.registerClientFormJuridica.get(control)) {
      if (this.registerClientFormJuridica.get(control).value.length > 10) {
        this.maskPhone = '(00) 00000 0000';
        this.maskPhoneResp = '(00) 00000 0000';
      } else {
        this.maskPhone = '(00) 0000 0000';
        this.maskPhoneResp = '(00) 00000 0000';
      }
    }
  }

  getMaskCpfCnpj(control, focus?: boolean) {
    if (focus) {
      return this.maskCpfCnpj = '';
    }
    if (this.registerClientFormJuridica.get(control)) {
      if (this.registerClientFormJuridica.get(control).value.length > 11) {
        this.maskCpfCnpj = '000.000.000/0000-00';
      } else {
        this.maskCpfCnpj = '000.000.000-00';
      }
    }
  }

  valuesProspect(): void {
    const prospect = this._purchaseStorage.person;
    if (prospect != null) {
      this.registerClientFormFisica.patchValue(prospect);
      this.getMaskPhone('cellPhone');

      this.registerClientFormJuridica.patchValue(prospect);
      this.getMaskPhone('cellPhoneJuridica');
      this.getMaskCpfCnpj('cnpjJuridica');
    }
  }

  clearValidate(field: string) {
    document.getElementById(field).removeAttribute('style');
    document.getElementById(field + 'Label').removeAttribute('style');
  }

}
