import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';
import { UfService } from 'app/service/uf.service';

declare const $: any;

@Component({
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.scss']
})
export class ListGoalsComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'code',
    'type',
    'title',
    'description',
    'startDate',
    'endDate',
    'value',
    'insurance',
    'editar',
    'remover'
  ];

  columnsTitle = [
    this._translate.getAggregatorListId(),
    this._translate.getAggregatorListType(),
    this._translate.getComercialNewGoalsListTit(),
    this._translate.getComercialNewCampNewDescr(),
    this._translate.getComercialNewGoalsListDtStart(),
    this._translate.getComercialNewGoalsListDtEnd(),
    this._translate.getMasterDealerListValue(),
    this._translate.getComercialNewGoalsListIns()
  ];

  recordDelete: any;
  formFilter: FormGroup;
  uf: any[];
  cities: string[];

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _translate: UtilService,
    private _ufService: UfService,
    private _router: Router
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

    this.dataSource = new MatTableDataSource(
      this._activatedRoute.snapshot.data.stores.list.goals
    );

    this.uf = this._activatedRoute.snapshot.data.uf;

    $('#filter-listGoals').on('click', () => {
      $('.filter-listGoals').fadeToggle('fast');
    });

  }

  update(event: any) {
    this._router.navigate([`/private/gerentedeloja/goals/update-goals/${event.id}/${event.type}`])
  }

  setRecordDelete(recordDelete: any) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      code: '',
      profile: '',
      name: '',
      startDate: '',
      endDate: '',
      store: '',
      amount: '',
      uf: '',
      city: ''
    })
  }

  findGoals() {
    const filter = this._filterValue;
    $('.filter-listGoals').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

  change() {
    const id = this.formFilter.get('uf').value;
    this._ufService.getCidade(id).subscribe(res => {
      this.cities = res;
    })
  }

}
