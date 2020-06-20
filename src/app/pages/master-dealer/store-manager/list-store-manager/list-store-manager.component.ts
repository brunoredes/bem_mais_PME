import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalModel } from 'app/models/goal.model';
import { MasterDealerManagerModel } from 'app/models/master-dealer-manager.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';
import { ProfileListModel } from 'app/models/profile-list.model';

declare const $: any;

@Component({
  templateUrl: './list-store-manager.component.html',
  styleUrls: ['./list-store-manager.component.scss']
})
export class ListStoreManagerComponent implements OnInit {

  displayedColumns: string[] = [
    'code',
    'profile',
    'name',
    'storeState',
    'statusDescription',
    'visualizar',
    'editar',
    'remover'
  ];

  nameManager: string;
  ageManager: number;
  profileManager: string;
  emailManager: string;
  cellPhoneManager: string;
  cityManager: string;

  profile: ProfileListModel;
  openManager: number;

  columnsTitle: string[] = [
    this._translate.getAggregatorListId(),
    this._translate.getComercialNewGoalsListProf(),
    this._translate.getComercialHomeNovosParcNome(),
    this._translate.getMasterDealerStore(),
    this._translate.getAggregatorListStat()
  ];

  dataSource: MatTableDataSource<GoalModel>;
  formFilter: FormGroup;
  recordDelete: MasterDealerManagerModel;

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
    $('#filter-storeManager').on('click', () => {
      $('.filter-storeManager').fadeToggle('fast');
    });

    this._createFormFilter();

    const { managers } = this._activatedRoute.parent.snapshot.data.values;
    this.dataSource = new MatTableDataSource(managers);

    this.profile = this._activatedRoute.parent.snapshot.data.values.profile;

  }

  viewEvent(event?: MasterDealerManagerModel) {
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

  updateEvent(event: MasterDealerManagerModel) {
    this._router.navigate(['private/masterdealer/store-manager/', event.id, 'update']);
  }

  setEventDelete(event: MasterDealerManagerModel) {
    this.recordDelete = event;
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
      name: '',
      store: '',
      profile: '',
      status: ''
    })
  }

  findManagers() {
    const filter = this._filterValue;
    $('.filter-storeManager').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

}
