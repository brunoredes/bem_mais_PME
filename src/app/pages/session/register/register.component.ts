import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArchiveModel } from 'app/models/archive.model';
import { CommonServices } from 'app/helpers/commonServices'
import { AuthService } from 'app/core/security/services/auth.service';

declare var $
@Component({
   selector: 'app-register-session',
   templateUrl: './register-component.html',
   styleUrls: ['./register-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

   private DEFAULT_CPF_CNPJ_MASK = '0{14}';
   private DEFAULT_PHONE_MASK = '0{11}';
   ngForm: FormGroup;
   emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
   selectedFiles: Array<ArchiveModel> = [];
   util: CommonServices = new CommonServices();
   picture: any;
   maskcpfOrCnpj: string;
   maskPhone: string = this.DEFAULT_PHONE_MASK;
   maskPhoneResponsabible: string = this.DEFAULT_PHONE_MASK;


   constructor(
      private router: Router,
      private authService: AuthService,
      private formBuilder: FormBuilder,
      public translate: TranslateService
   ) { }

   ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
      this.ngForm = this.formBuilder.group({
         corporateName: this.formBuilder.control('', [Validators.required]),
         cnpjOrCpf: this.formBuilder.control('', [Validators.required]),
         name: this.formBuilder.control('', [Validators.required]),
         picture: this.formBuilder.control(''),
         gender: this.formBuilder.control('Male'),
         zipCode: this.formBuilder.control('', [Validators.required]),
         address: this.formBuilder.control('', [Validators.required]),
         number: this.formBuilder.control('', [Validators.required]),
         complement: this.formBuilder.control('', [Validators.required]),
         discrict: this.formBuilder.control('', [Validators.required]),
         city: this.formBuilder.control('', [Validators.required]),
         uf: this.formBuilder.control('', [Validators.required]),
         phone: this.formBuilder.control('', [Validators.required]),
         email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
         website: this.formBuilder.control(''),
         nameResponsible: this.formBuilder.control('', [Validators.required]),
         phoneResponsible: this.formBuilder.control('', [Validators.required]),
         emailResponsible: this.formBuilder.control('', [Validators.required]),
         archive: this.formBuilder.control(''),
      })

      Validators.pattern(this.emailPattern)
      $('input').focus(function () {
         $(this).parents('.form-group').addClass('focused');
      });

      $('input').blur(function () {
         const inputValue = $(this).val();
         if (inputValue === '') {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
         } else {
            $(this).addClass('filled');
         }
      })

      this.maskcpfOrCnpj = this.DEFAULT_CPF_CNPJ_MASK;
   }

   register() {
      if (this.ngForm.valid) {

         if (this.picture) {
            this.ngForm.controls.picture.setValue(this.picture);
         }
         if (this.selectedFiles.length > 0) {
            this.ngForm.controls.archive.setValue(this.selectedFiles);
         }

        this.authService.signUpUserProfile(this.ngForm);
      }
   }

   onFileChange(event) {
      if (event.target.files && event.target.files.length > 0) {
         for (let i = 0; i < event.target.files.length; i++) {
            this.readContent(event.target.files[i]);
         }
      }
   }

   readContent = file => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
         const typedArray = e.target.result;
         const byteArray = new Uint8Array(typedArray);
         const archive = new ArchiveModel(file.name, Array.from(byteArray));
         this.selectedFiles.push(archive);
      }
      reader.readAsArrayBuffer(file);
   }

   onPictureChange(event) {
      if (event.target.files && event.target.files.length > 0) {
         const archive = event.target.files[0];
         const reader = new FileReader();

         reader.onload = (e: any) => {
            const typedArray = e.target.result;
            const byteArray = new Uint8Array(typedArray);
            this.picture = new ArchiveModel(archive.name, Array.from(byteArray));
         }
         reader.readAsArrayBuffer(archive);
      }
   }

   getMaskCpfCnpj(focus?: boolean) {
      if (focus) { return this.maskcpfOrCnpj = this.DEFAULT_CPF_CNPJ_MASK; }

      if (this.ngForm.value.cnpjOrCpf) {
         if (this.ngForm.value.cnpjOrCpf.length > 11) {
            this.maskcpfOrCnpj = '00.000.000/0000-00';
         } else {
            this.maskcpfOrCnpj = '000.000.000-00';
         }
      }
   }

   setMaskcpfOrCnpj() {
      return this.maskcpfOrCnpj;
   }

   getMaskPhone(control, focus?: boolean) {
      if (focus) {
         if (control === 'phoneResponsible') {
            return this.maskPhoneResponsabible = this.DEFAULT_PHONE_MASK;
         } else {
            return this.maskPhone = this.DEFAULT_PHONE_MASK;
         }
      }
      if (this.ngForm.get(control).value) {
         if (this.ngForm.get(control).value.length > 10) {
            if (control === 'phoneResponsible') {
               this.maskPhoneResponsabible = '(00) 00000 0000';
            } else {
               this.maskPhone = '(00) 00000 0000';
            }
         } else {
            if (control === 'phoneResponsible') {
               this.maskPhoneResponsabible = '(00) 0000 0000';
            } else {
               this.maskPhone = '(00) 0000 0000';
            }
         }
      }
   }

   onlyNumber(event): boolean {
      return this.util.numberOnly(event);
   }


}
