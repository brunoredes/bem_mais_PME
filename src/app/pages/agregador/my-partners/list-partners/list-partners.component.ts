import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UfService } from '../../../../service/uf.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AggregatorMyPartnersService } from 'app/service/aggregator-my-partners.service';
import { InterestedPartnersFilter } from 'app/models/interested-partners-filter.model';
import { InterestedPartnersModel } from 'app/models/interested-partners';
import { UtilService } from 'app/helpers/utils';

declare const $: any;
@Component({
  templateUrl: './list-partners.component.html',
  styleUrls: ['./list-partners.component.scss']
})
export class ListPartnersComponent implements OnInit {

  displayedColumns: string[] = [
    'code',
    'corporateName',
    'cnpj',
    'email',
    'status',
    'visualizar',
    'editar',
    'remover'
  ];

  AggregatorListId: string;
  AggregatorListPartName: string;
  AggregatorListCpfCnpj: string;
  AggregatorListEmail: string;
  AggregatorListStat: string;


  columnsTitle = [
    this.AggregatorListId = this._translate.getAggregatorListId(),
    this.AggregatorListPartName = this._translate.getAggregatorListPartName(),
    this.AggregatorListCpfCnpj = this._translate.getAggregatorListCpfCnpj(),
    this.AggregatorListEmail = this._translate.getAggregatorListEmail(),
    this.AggregatorListStat = this._translate.getAggregatorListStat()
  ];

  dataSource: MatTableDataSource<InterestedPartnersModel> = new MatTableDataSource();
  formFilter: FormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  estados: any = [];
  cidades: any = [];
  recordDelete: InterestedPartnersModel;

  constructor(
    private _ufService: UfService,
    private _formBuilder: FormBuilder,
    private _myPartnersServices: AggregatorMyPartnersService,
    private _activatedRoute: ActivatedRoute,
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

    this._createFormFilter();

    $('#filter-my-partners').on('click', function () {
      $('.filter-my-partners').fadeToggle('fast');
    });

    const { partners, states } = this._activatedRoute.parent.snapshot.data.values;
    this.dataSource = new MatTableDataSource(partners);
    this.estados = states;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  change() {
    const id = this.formFilter.get('state').value;
    this._ufService.getCidade(id).subscribe(res => {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findPartners() {
    const filter = this._filterValue;
    $('.filter-my-partners').fadeToggle('fast');
    this._myPartnersServices.getPartners$(1, filter).subscribe(
      partners => {
        this.dataSource = new MatTableDataSource(partners);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  private _createFormFilter() {
    this.formFilter = this._formBuilder.group({
      corporateName: '',
      registrationStartDate: '',
      registrationEndDate: '',
      cnpj: '',
      state: '',
      city: '',
      status: ''
    });
  }

  get _filterValue(): InterestedPartnersFilter {
    return this.formFilter.value;
  }

  detailRecord(record: InterestedPartnersModel) {
    this._router.navigate(['private/agregador/my-partners/', record.id, 'report-sales'], { queryParams: { disableForm: true } });
  }

  updateRecord(record: InterestedPartnersModel) {
    this._router.navigate(['private/agregador/my-partners/', record.id, 'update']);
  }

  setRecordDelete(recordDelete: InterestedPartnersModel) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

}
