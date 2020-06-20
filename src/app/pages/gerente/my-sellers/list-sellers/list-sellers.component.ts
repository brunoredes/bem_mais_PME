import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';
import { UfService } from 'app/service/uf.service';

declare const $: any;

@Component({
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.scss']
})
export class ListSellersComponent implements OnInit {

  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'code',
    'name',
    'profile',
    'storeState',
    'email',
    'visualizar',
    'editar',
    'remover'
  ];
  columnsTitle = [
    this._translate.getAggregatorListId(),
    this._translate.getMasterDealerListName(), // nome
    this._translate.getManagerSellerPosition(),
    this._translate.getManagerSellerStore(),
    this._translate.getAggregatorListEmail()
  ];

  recordDelete: any;
  formFilter: FormGroup;
  uf: any[];
  cities: string[];

  nameManager: string;
  ageManager: number;
  profileManager: string;
  emailManager: string;
  cellPhoneManager: string;
  cityManager: string;
  openManager: number;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _translate: UtilService,
    private _ufService: UfService,
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
      this._activatedRoute.snapshot.data.stores.list.vendors
    );

    this.uf = this._activatedRoute.snapshot.data.uf;

    $('#filter-listSellers').on('click', () => {
      $('.filter-listSellers').fadeToggle('fast');
    });

  }

  viewRecord(event?: any) {
    if (document.getElementById('hoverShow1').style.display === 'block') {
      document.getElementById('hoverShow1').style.display = 'none';
      document.getElementById(`actived${this.openManager}`).style.color = ''
    } else {
      document.getElementById('hoverShow1').style.display = 'block';
      document.getElementById(`actived${event.id}`).style.color = '#005AAB'
      this.openManager = event.id;
      this.nameManager = event.name;
      this.ageManager = event.age;
      this.profileManager = event.profile;
      this.emailManager = event.email;
      this.cellPhoneManager = event.cellPhone;
      this.cityManager = event.storeState;
    }
  }

  updateRecord(record) {
    this._router.navigate(
      ['/private/gerentedeloja/sellers/', record.id, 'update']
    );
  }

  setRecordDelete(recordDelete: any) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

  update(event: any) {
    this._router.navigate([`private/gerentedeloja/sellers/update-sellers/${event.id}`])
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      code: '',
      profile: '',
      name: '',
      startDate: '',
      endDate: '',
      store: '',
      uf: '',
      city: ''
    })
  }

  findSellers() {
    const filter = this._filterValue;
    $('.filter-listSellers').fadeOut('fast');
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
