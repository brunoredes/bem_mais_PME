import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDealerStoreModel } from 'app/models/master-dealer-store.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent implements OnInit {
  dataSource: MatTableDataSource<MasterDealerStoreModel>;

  displayedColumns: string[] = [
    'code',
    'store',
    'cnpj',
    'email',
    'status',
    'visualizar',
    'editar',
    'remover'
  ];
  columnsTitle = [
    this._translate.getAggregatorListId(),
    this._translate.getMasterDealerListStoreName(),
    'CNPJ',
    'E-mail',
    'Status'
  ];

  recordDelete: MasterDealerStoreModel;
  formFilter: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // Esconde a modal do filtro com classe
    $(document).mouseup(function(e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.hide();
      }
      // Filter
    }),
    this._createFormFilter();

    $('#filter-myStores').on('click', () => {
      $('.filter-myStores').fadeToggle('fast');
    });

    this.dataSource = new MatTableDataSource(
      this._activatedRoute.snapshot.data.values.myStores
    );
  }

  viewEvent(event: MasterDealerStoreModel) {
    this._router.navigate(['private/masterdealer/my-stores/', event.id, 'view'], {
      queryParams: { disableForm: true }
    });
  }

  updateEvent(event: MasterDealerStoreModel) {
    this._router.navigate(['private/masterdealer/my-stores/', event.id, 'update']);
  }

  setRecordDelete(recordDelete: MasterDealerStoreModel) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      code: '',
      store: '',
      cnpj: '',
      status: ''
    })
  }

  findStores() {
    const filter = this._filterValue;
    $('.filter-myStores').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

}
