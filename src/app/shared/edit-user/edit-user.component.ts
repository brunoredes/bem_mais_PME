import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'app/helpers/commonServices';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArchiveModel } from 'app/models/archive.model';
import { UserModel } from 'app/models/user.model';
import { ConsultationsService } from 'app/service/consultations.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { UtilService } from 'app/helpers/utils';
import { AuthService } from 'app/core/security/services/auth.service';
import 'rxjs/add/operator/filter'
import { UfService } from 'app/service/uf.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

    util: CommonServices = new CommonServices();
    private DEFAULT_PHONE_MASK = '0{11}';
    maskPhone: string = this.DEFAULT_PHONE_MASK;
    editProfileForm: FormGroup;
    emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    profiles = [{ id: '1', name: 'Perfil 1' }, { id: '2', name: 'Perfil 2' }, { id: '3', name: 'Perfil 3' }]
    stores = [{ id: '1', name: 'Loja 1' }, { id: '2', name: 'Loja 2' }, { id: '3', name: 'Loja 3' }]
    picture: any;
    loadingTemplate = this.loading.loadingTemplate;
    ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

    modalEditUser: string;
    EditUserCampo: string;
    EditUserCampoObrigatorio: string;
    EditUserCampoInvalido: string;

    lastUrl: string;
    uf: any[];
    cities: string[];

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        public consulta: ConsultationsService,
        private toastr: ToastrService,
        public loading: LoadingService,
        private _activatedRoute: ActivatedRoute,
        private _utilService: UtilService,
        private _router: Router,
        private _ufService: UfService
    ) {
        this.voltar();
    }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        this.createForm();

        const rs = document.readyState;
        switch (rs) {
            case 'interactive':
            case 'complete':
                this.loading.offLoadingMenuComponents();
                break;
        }

        this.EditUserCampo = this._utilService.getEditUserCampo();
        this.EditUserCampoObrigatorio = this._utilService.getEditUserCampoObrigatorio();
        this.EditUserCampoInvalido = this._utilService.getEditUserCampoInvalido();
        this.uf = this._activatedRoute.snapshot.data.uf;     
        
        console.log(this.localStorageProfile().user.ograo);
        

    }

    localStorageProfile = () => {
        return JSON.parse(localStorage.getItem('userProfile'))
    }

    createForm(): void {
        let user = this.localStorageProfile().user
        this.editProfileForm = this.fb.group({
            name: this.fb.control(user.name, [Validators.required]),
            gender: this.fb.control(user.genero),
            nacionalidade: this.fb.control(user.nacionalidade, [Validators.required]),
            orgaoExpeditor: this.fb.control(user.orgao, [Validators.required]),
            dataExpedicao: this.fb.control(user.dataExpedicao, [Validators.required]),
            birthDate: this.fb.control(user.dataNascimento, [Validators.required]),
            cpf: this.fb.control(user.cpf, [Validators.required]),
            rg: this.fb.control(user.rg, [Validators.required]),
            zipCode: this.fb.control(user.cep, [Validators.required]),
            address: this.fb.control(user.endereco, [Validators.required]),
            number: this.fb.control(user.numero, [Validators.required]),
            complement: this.fb.control(user.complemento, [Validators.required]),
            discrict: this.fb.control(user.bairro, [Validators.required]),
            city: this.fb.control(user.cidade, [Validators.required]),
            uf: this.fb.control(user.uf, [Validators.required]),
            email: this.fb.control(user.email, [Validators.required, Validators.pattern(this.emailPattern)]),
            phoneNumber: this.fb.control(user.telefone, [Validators.required]),

        })

        this.fillForm();
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

    onlyNumber(event): boolean {
        return this.util.numberOnly(event);
    }

    getMaskPhone(control, focus?: boolean) {
        if (focus) {
            return this.maskPhone = this.DEFAULT_PHONE_MASK;
        }
        if (this.editProfileForm.get(control).value) {
            if (this.editProfileForm.get(control).value.length > 10) {
                this.maskPhone = '(00) 00000 0000';
            } else {
                this.maskPhone = '(00) 0000 0000';
            }
        }
    }

    update() {
        this.modalEditUser = '';
        if (this.validateForm()) {
            let user: UserModel;
            this.modalEditUser = '#modalEditUser';
        }
    }

    fillForm(): void {
        // TODO: this.editProfileForm.patchValue(this.authService.getEditUserMock())
    }

    validateForm(): boolean {

        for (const field in this.editProfileForm.value) {
            if (this.editProfileForm.getRawValue()[field] === '' &&
                field !== 'complement') {
                document.getElementById(field).focus();
                document.getElementById(field).setAttribute('style', 'border-bottom: 2px solid red;');
                document.getElementById(field + 'Label').setAttribute('style', 'color: red;');
                this.toastr.error(`${this.EditUserCampo} ${document.getElementById(
                    field + 'Label').innerHTML} ${this.EditUserCampoObrigatorio}`);
                return false;
            }
        }

        for (const field in this.editProfileForm.value) {
            if (this.editProfileForm.controls[field].invalid) {
                document.getElementById(field).focus();
                document.getElementById(field).setAttribute('style', 'border-bottom: 2px solid red;');
                document.getElementById(field + 'Label').setAttribute('style', 'color: red;');
                this.toastr.error(`${this.EditUserCampo} ${document.getElementById(
                    field + 'Label').innerHTML} ${this.EditUserCampoInvalido}`);
                return false;
            }
        }

        return true;

    }

    clearValidate(field: string) {
        document.getElementById(field).removeAttribute('style');
        document.getElementById(field + 'Label').removeAttribute('style');
    }

    voltar() {
        this._router.events.filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => {
                const utlAtual = e.url;
                const rotas = utlAtual.split('/');
                this.lastUrl = `/private/${rotas[2]}/home`;
            })
    }

    change() {
        const id = this.editProfileForm.get('uf').value;
        this._ufService.getCidade(id).subscribe(res => {
            this.cities = res;
        })
    }

}
