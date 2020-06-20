import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { switchMap } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { UfService } from 'app/service/uf.service';
import { SalesPartnersService } from 'app/service/sales-partners.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SalePartnerModel } from 'app/models/sale-partner.model';
import { SalePartnerFilter } from 'app/models/sale-partner-filter.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UfModel } from 'app/models/uf.model';
import { CityModel } from 'app/models/city.model';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
  templateUrl: './sales-partnerns.component.html',
  styleUrls: ['./sales-partnerns.component.scss']
})
export class SalesPartnernsComponent implements OnInit {
  formFilter: FormGroup;

  displayedColumnsActive: string[] = [
    'code',
    'corporateName',
    'cnpj',
    'city',
    'state',
    'insuranceCategory',
    'email',
    'aprovar',
    'editar',
    'visualizar'
  ];

  columnsTitleActive: string[] = [
    this._translate.getAggregatorListId(),
    this._translate.getComercialInterestedPartnersRazSoc(),
    this._translate.getAggregatorListCpfCnpj(),
    this._translate.getComercialInterestedPartnersCidade(),
    this._translate.getComercialInterestedPartnersUf(),
    this._translate.getComercialInterestedPartnersCatSeguro(),
    this._translate.getAggregatorListEmail()
  ]

  displayedColumnsDesactive: string[] = [
    'code',
    'corporateName',
    'cnpj',
    'city',
    'state',
    'insuranceCategory',
    'email',
    'aprovar',
    'editar',
    'visualizar'
  ];

  columnsTitleDesactive: string[] = [
    this._translate.getAggregatorListId(),
    this._translate.getComercialInterestedPartnersRazSoc(),
    this._translate.getAggregatorListCpfCnpj(),
    this._translate.getComercialInterestedPartnersCidade(),
    this._translate.getComercialInterestedPartnersUf(),
    this._translate.getComercialInterestedPartnersCatSeguro(),
    this._translate.getAggregatorListEmail()
  ]

  dataSource: MatTableDataSource<SalePartnerModel>;
  estados: Array<UfModel>;
  cidades: string[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  revendaItems: Array<any>;
  SlideOptions = {
    items: 4,
    dots: true,
    nav: false,
    autoWidth: true,
    loop: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { itens: 3 }
    }
  };

  constructor(
    private api: DashCancellationsService,
    private estadosService: UfService,
    private _salesPartners: SalesPartnersService,
    private _formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    private _activatedRoute: ActivatedRoute,
    private _ufService: UfService,
    private _router: Router,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    })
    this._adapter.setLocale('br');

    this._createFormFilter();
    const { partners, items, states } = this._activatedRoute.snapshot.data.values;
    this.dataSource = new MatTableDataSource(partners);
    this.revendaItems = items;
    this.estados = states;

    $('#filter-partners').on('click', () => {
      $('.filter-partners').fadeToggle('fast');
    });

    $(document).ready(() => {
      $('.owl-stage').css({
        width: $('#tamanho').width() * $('.owl-item').length
      });
    });
    this._ufService.getEstados().subscribe(res => this.estados = res);
    this.cidades = this._activatedRoute.snapshot.data.values.city;
  }

  findPartners() {
    const filter = this._filterValue;
    const status = filter.status;
    $('.filter-partners').fadeToggle('fast');
    this._salesPartners.getPartners$(status, filter).subscribe(partners => {
      this.dataSource = new MatTableDataSource(partners);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  changeTabStatus(index: number) {
    this.formFilter.get('status').setValue(++index);
    this.findPartners();
  }

  cpfCnpjM(rawVal) {
    const numbers = rawVal.match(/\d/g);
    let numLength = 0
    if (numbers) {
      numLength = numbers.join('').length;
    }
    return numLength <= 11 ? [/[\d]/, /[\d]/, /[\d]/, '.', /[\d]/, /[\d]/, /[\d]/, '.', /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/] :
      [/[\d]/, /[\d]/, '.', /[\d]/, /[\d]/, /[\d]/, '.', /[\d]/, /[\d]/, /[\d]/, '/', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/]
  }

  change() {
    const id = this.formFilter.get('state').value;
    this.estadosService.getCidade(id).subscribe(res => {
      this.cidades = res;
    })
  }

  private _createFormFilter() {
    this.formFilter = this._formBuilder.group({
      corporateName: '',
      cnpj: '',
      category: '',
      registrationStartDate: '',
      registrationEndDate: '',
      state: '',
      city: ''
    });
  }

  get _filterValue(): SalePartnerFilter {
    return this.formFilter.value;
  }

  approve(event: any) {

  }

  view(event: any) {
    this._router.navigate(['private/comercial/interested-sales/edit/', event.id]);
  }

  update(event: any) {
    this._router.navigate(['private/comercial/interested-sales/edit/', event.id]);
  }
}
