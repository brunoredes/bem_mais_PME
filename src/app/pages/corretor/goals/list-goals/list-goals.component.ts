import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { AggregatorGoalFilterModel } from 'app/models/aggregator-goal-filter.model';
import { GoalModel } from 'app/models/goal.model';
import { ProfileListModel } from 'app/models/profile-list.model';
import { CorretorGoalsService } from 'app/service/corretor-goals.service';
import { UfService } from '../../../../service/uf.service';
import { DateAdapter } from '@angular/material/core';
import { StateModel } from 'app/models/state.model';
import { CityModel } from 'app/models/city.model';


declare const $: any;
@Component({
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.scss']
})
export class ListGoalsComponent implements OnInit {
  VolumeCancellationsType: any = [];
  VolumeCancellationsOptions: any = [];
  VolumeCancellationsData: any = [];
  VolumeCancellationsLabels: any = [];

  displayedColumns: string[] = [
    'code',
    'type',
    'title',
    'description',
    'startDate',
    'endDate',
    'amount',
    'visualizar',
    'editar',
    'remover'
  ];
  columnsTitle = ['Código', 'Tipo', 'Título', 'Descrição', 'Data Início', 'Data Fim', 'Valor'];

  dataSource: MatTableDataSource<GoalModel>;
  formFilter: FormGroup;
  recordDelete: GoalModel;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  profileList: ProfileListModel[];
  estados: any = [];
  cidades: string[] = [];

  constructor(
    private _ufService: UfService,
    private _formBuilder: FormBuilder,
    private _goalsServices: CorretorGoalsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _adapter: DateAdapter<any>
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

    $('#filter-goals').on('click', () => {
      $('.filter-goals').fadeToggle('fast');
    });

    this._adapter.setLocale('br');

    const { goals, states, profileList } = this._activatedRoute.parent.snapshot.data.values;
    this.dataSource = new MatTableDataSource(goals);
    this.estados = states;
    this.profileList = profileList;
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

  findGoals() {
    const filter = this._filterValue;
    $('.filter-goals').fadeToggle('fast');
    this._goalsServices.getGoals$(filter).subscribe(
      goals => {
        this.dataSource = new MatTableDataSource(goals);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  private _createFormFilter() {
    this.formFilter = this._formBuilder.group({
      code: '',
      profile: '',
      goal: '',
      validityStartDate: '',
      validityEndDate: '',
      goalAmount: '',
      state: '',
      city: ''
    });
  }

  get _filterValue(): AggregatorGoalFilterModel {
    return this.formFilter.value;
  }

  viewRecord(record: GoalModel) {
    this._router.navigate(['private/corretor/my-goals/', record.id, 'view-personal-goal'], { queryParams: { disableForm: true } });
  }

  updateRecord(record: GoalModel) {
    this._router.navigate(['private/corretor/my-goals/', record.id, 'uptade-personal-goal'],{
      queryParams: {disableForm: false}
    });
  }

  setRecordDelete(recordDelete: GoalModel) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
