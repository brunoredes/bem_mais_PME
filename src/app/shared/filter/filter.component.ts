import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DateAdapter } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Location } from '@angular/common'
import { UtilService } from 'app/helpers/utils';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    loadingTemplate = this.loading.loadingTemplate;
    ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    filtro = false
    //   displayedColumns: string[] = ['position', 'razaoSocial', 'cnpjOrCpf', 'cidade', 'uf',
    //   'categoriaSeguro', 'email', 'documento', 'aprovado', 'reprovado'];
    displayedColumns: string[] = ['position', 'razaoSocial', 'cnpjOrCpf', 'cidade', 'uf',
        'email', 'documento', 'reprovado'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    toppingsUf = new FormControl();
    listUf: string[] = ['AC', 'SP', 'RJ', 'MG', 'PR'];
    toppingsCity = new FormControl();
    listCity: string[] = ['Rio Branco', 'São Paulo', 'Maceió', 'Macapá'];
    selectedUf = [];
    selectedCity = [];
    filterRemove: number;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private _adapter: DateAdapter<any>,
        private toastr: ToastrService,
        public loading: LoadingService,
        private _location: Location,
        private _translate: UtilService
    ) { }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        this._adapter.setLocale('br');

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    filter() {
        this.loading.onLoadingAdvancedFilter();
        document.getElementById('paginator1').style.display = 'none';
        this.filtro = true;
        document.getElementById('paginator1').classList.remove('d-none');
        if (document.getElementById('btnMoreFilter')) {
            document.getElementById('btnMoreFilter').innerHTML = this._translate.getComercialAdvFilterMore();
        };
        this.loading.offLoadingAdvancedFilter();
        setTimeout(() => {
            document.getElementById('paginator1').style.display = 'block';
        }, 800);
    }

    moreFilter() {
        if (document.getElementById('collapseFilter').getAttribute('aria-expanded') === 'false') {
            document.getElementById('btnMoreFilter').innerHTML = this._translate.getComercialAdvFilterMenos();
        } else {
            document.getElementById('btnMoreFilter').innerHTML = this._translate.getComercialAdvFilterMore();
        }
    }
    backClicked() {
        history.back()
    }

    addTopping(field: string, value: any) {

        let toppingsSelected = []
        if (field === 'uf') {
            toppingsSelected = this.toppingsUf.value;
            if (this.selectedUf.includes(value)) {
                this.removeSelected('uf', this.selectedUf.indexOf(value));
            } else {
                if (this.toppingsUf.value.length <= 3) {
                    this.selectedUf.push(value);
                } else {
                    toppingsSelected.splice(toppingsSelected.indexOf(value), 1);
                    this.toppingsUf.setValue(toppingsSelected);
                    this.toastr.error(this._translate.getComercialToastrState());
                }
            }
        } else if (field === 'city') {
            toppingsSelected = this.toppingsCity.value;
            if (this.selectedCity.includes(value)) {
                this.removeSelected('city', this.selectedCity.indexOf(value));
            } else {
                if (this.toppingsCity.value.length <= 3) {
                    this.selectedCity.push(value);
                } else {
                    toppingsSelected.splice(toppingsSelected.indexOf(value), 1);
                    this.toppingsCity.setValue(toppingsSelected);
                    this.toastr.error(this._translate.getComercialToastrCity());
                }
            }
        }
    }

    removeSelected(field: string, index: number) {

        const toppingsSelected = []

        if (field === 'uf') {
            this.selectedUf.splice(index, 1);
            this.selectedUf.forEach((value) => {
                toppingsSelected.push(value);
            });
            this.toppingsUf.setValue(toppingsSelected);
        } else if (field === 'city') {
            this.selectedCity.splice(index, 1);
            this.selectedCity.forEach((value) => {
                toppingsSelected.push(value);
            });
            this.toppingsCity.setValue(toppingsSelected);
        }
    }

    setFilterToRemove(id: number) {
        this.filterRemove = id;
    }

    removeFilter() {
    }

}

export interface PeriodicElement {
    razaoSocial: string;
    position: number;
    cnpjOrCpf: string;
    cidade: string;
    uf: string;
    //   categoriaSeguro: string;
    email: string;
    documento: any;
    //   aprovado: any;
    reprovado: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        position: 1, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 2, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 3, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 4, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 5, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 6, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 7, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 8, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 9, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 10, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 11, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 12, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 13, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 14, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 15, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 16, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 17, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 18, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 19, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
    {
        position: 20, razaoSocial: 'Lorem Ipsum is simply', cnpjOrCpf: '00000000000-0',
        cidade: 'São Paulo', uf: 'SP', email: 'parceiro@zurich.com.br', documento: '', reprovado: ''
    },
];
