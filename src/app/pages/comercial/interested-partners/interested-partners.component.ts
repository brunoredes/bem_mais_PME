import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { InterestedPartnersModel } from 'app/models/interested-partners';
import { InterestedPartnersFilter } from 'app/models/interested-partners-filter.model';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { InterestedPartnersService } from 'app/service/interested-partners.service';
import { UfService } from '../../../service/uf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
  templateUrl: './interested-partners.component.html',
  styleUrls: ['./interested-partners.component.scss']
})
export class InterestedPartnersComponent implements OnInit {

  title = 'Parceiros Interessados';

  displayedColumnsApproved: string[] = [
    'code',
    'corporateName',
    'cnpj',
    'state',
    'city',
    'registrationDate',
    'documento',
    'aprovar',
    'reprovar',
    'visualizar',
    'remover'
  ];
  columnsTitleApproved = [
    this._translate.getAggregatorListId(),
    this._translate.getComercialInterestedPartnersRazSoc(),
    this._translate.getAggregatorListCpfCnpj(),
    this._translate.getComercialInterestedPartnersCidade(),
    this._translate.getComercialInterestedPartnersUf(),
    this._translate.getManagerFilterRegDate()
  ]

  displayedColumnsDisapproved: string[] = [
    'code',
    'corporateName',
    'cnpj',
    'state',
    'city',
    'registrationDate',
    'documento',
    'visualizar',
    'remover'
  ];
  columnsTitleDisapproved = [
    this._translate.getAggregatorListId(),
    this._translate.getComercialInterestedPartnersRazSoc(),
    this._translate.getAggregatorListCpfCnpj(),
    this._translate.getComercialInterestedPartnersCidade(),
    this._translate.getComercialInterestedPartnersUf(),
    this._translate.getManagerFilterRegDate()
  ]

  recordDelete: InterestedPartnersModel;
  formFilter: FormGroup;
  dataSource: MatTableDataSource<InterestedPartnersModel>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  seguros: any[];
  estados: any = [];
  cidades: string[] = [];

  constructor(
    private estadosService: UfService,
    private fb: FormBuilder,
    private _adapter: DateAdapter<any>,
    private api: DashCancellationsService,
    private _partnersServices: InterestedPartnersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _translate: UtilService
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    });
    this._adapter.setLocale('br');

    this._createFormFilter();
    const { partners, states } = this._activatedRoute.snapshot.data.values;
    this.dataSource = new MatTableDataSource(partners);
    this.estados = states;

    $('#filter-interested').on('click', () => {
      $('.filter-interested').fadeToggle('fast');
    });
  }

  change() {
    const id = this.formFilter.get('state').value;
    this.estadosService.getCidade(id).subscribe(res => {
      this.cidades = res;
    })
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

  findPartners() {
    const filter = this._filterValue;
    const status = filter.status;
    $('.filter-interested').fadeToggle('fast');
    this._partnersServices.getPartners$(status, filter).subscribe(
      partners => {
        this.dataSource = new MatTableDataSource(partners);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  changeTabStatus(index: number) {
    this.formFilter.get('status').setValue(++index);
    this.findPartners();
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      corporateName: '',
      registrationStartDate: '',
      registrationEndDate: '',
      cnpj: '',
      state: '',
      city: '',
      category: ''
    })
  }

  get _filterValue(): InterestedPartnersFilter {
    return this.formFilter.value;
  }

  setRecordDelete(event: InterestedPartnersModel) {
    this.recordDelete = event;
  }

  view(event: any) {
    this._router.navigate(['private/comercial/interested-partnerns/view/', event.id]);
  }

  approve(event: any) {
  }

  disapprove(event: any) {
  }

  document(event: any) {
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

}
