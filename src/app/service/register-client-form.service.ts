import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class RegisterClientFormService {

    constructor(
        private toastr: ToastrService
    ) {}

    registerClientFormFisica: FormGroup;
    registerClientFormJuridica: FormGroup;
    typePerson: string;

    setTypePerson(typePerson: string) {
        this.typePerson = typePerson;
    }

    setRegisterClientFormFisica(registerClientFormFisica: FormGroup) {
        this.registerClientFormFisica =  registerClientFormFisica;
    }

    setRegisterClientFormJuridica(registerClientFormJuridica: FormGroup) {
        this.registerClientFormJuridica = registerClientFormJuridica;
    }

    getRegisterClientFormFisica() {
        return this.registerClientFormFisica;
    }

    getRegisterClientFormJuridica() {
        return this.registerClientFormJuridica;
    }

    validateForm(): boolean {
      if (this.typePerson === 'Juridica') {
        for (const field in this.registerClientFormJuridica.value) {
          if (this.registerClientFormJuridica.getRawValue()[field] === '' &&
              field !== 'complementJuridica' &&
              field !== 'smsNewsJuridica' &&
              field !== 'whatsNewsJuridica' &&
              field !== 'emailNewsJuridica' &&
              field !== 'politicallyExposedJuridica' ) {
            document.getElementById(field).focus();
            document.getElementById(field).setAttribute('style', 'border-bottom: 2px solid red;');
            document.getElementById(field + 'Label').setAttribute('style', 'color: red;');
            this.toastr.error(`Campo ${document.getElementById(field + 'Label').innerHTML} é obrigatório.`);
            return false;
          }
        }

        for (const field in this.registerClientFormJuridica.value) {
            if (this.registerClientFormJuridica.controls[field].invalid) {
                document.getElementById(field).focus();
                document.getElementById(field).setAttribute('style', 'border-bottom: 2px solid red;');
                document.getElementById(field + 'Label').setAttribute('style', 'color: red;');
                this.toastr.error(`Campo ${document.getElementById(field + 'Label').innerHTML} inválido.`);
                return false;
            }
        }
      } else if (this.typePerson === 'Fisica') {
        for (const field in this.registerClientFormFisica.value) {
            if (this.registerClientFormFisica.getRawValue()[field] === '' &&
                field !== 'complement' &&
                field !== 'smsNews' &&
                field !== 'whatsNews' &&
                field !== 'emailNews' &&
                field !== 'politicallyExposed') {
              document.getElementById(field).focus();
              document.getElementById(field).setAttribute('style', 'border-bottom: 2px solid red;');
              document.getElementById(field + 'Label').setAttribute('style', 'color: red;');
              this.toastr.error(`Campo ${document.getElementById(field + 'Label').innerHTML} é obrigatório.`);
              return false;
            }
        }
        for (const field in this.registerClientFormFisica.value) {
            if (this.registerClientFormFisica.controls[field].invalid) {
                document.getElementById(field).focus();
                document.getElementById(field).setAttribute('style', 'border-bottom: 2px solid red;');
                document.getElementById(field + 'Label').setAttribute('style', 'color: red;');
                this.toastr.error(`Campo ${document.getElementById(field + 'Label').innerHTML} inválido.`);
                return false;
            }
        }
      }

      return true;

    }
}
