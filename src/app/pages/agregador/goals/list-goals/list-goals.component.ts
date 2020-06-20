import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { AggregatorGoalFilterModel } from 'app/models/aggregator-goal-filter.model';
import { GoalModel } from 'app/models/goal.model';
import { AggregatorGoalsService } from 'app/service/aggregator-goals.service';
import { UfService } from '../../../../service/uf.service';
import { ProfileListModel } from 'app/models/profile-list.model';
import { DateAdapter } from '@angular/material/core';

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
    'insurance',
    'title',
    'description',
    'startDate',
    'endDate',
    'value',
    'statusPercent',
    'visualizar',
    'editar',
    'remover'
  ];
  columnsTitle = ['Código', 'Tipo', 'Seguro', 'Título', 'Descrição', 'Data Início', 'Data Fim', 'Valor', 'Status'];

  dataSource: MatTableDataSource<GoalModel>;
  formFilter: FormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  profileList: ProfileListModel[];
  estados: any = [];
  cidades: any = [];
  recordDelete: GoalModel;

  constructor(
    private _ufService: UfService,
    private _formBuilder: FormBuilder,
    private _goalsServices: AggregatorGoalsService,
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
    }),
      this._adapter.setLocale('br');

    this.loadingVolumeCancellations();
    this._createFormFilter();

    $('#filter-goals').on('click', () => {
      $('.filter-goals').fadeToggle('fast');
    });

    const { goals, states } = this._activatedRoute.parent.snapshot.data.values;
    this.dataSource = new MatTableDataSource(goals);
    this.estados = states;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadingVolumeCancellations() {
    const data = [10, 20, 30, 30, 40],
      labels = ['Dias 1', '2', '3', '4', '5', '6', '7'];

    this.VolumeCancellationsType = 'bar';
    this.VolumeCancellationsData = [
      {
        data: data
      }
    ];
    this.VolumeCancellationsLabels = labels;
    this.VolumeCancellationsOptions = {
      scales: {
        xAxes: [
          {
            barThickness: 15
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
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
    if (document.getElementById('hoverShow1').classList.contains('d-none')) {
      document.getElementById('hoverShow1').classList.remove('d-none');
      document.getElementById('hoverShow1').classList.add('d-block');
    } else {
      document.getElementById('hoverShow1').classList.remove('d-block');
      document.getElementById('hoverShow1').classList.add('d-none');
      console.log('saiu');
    }
    document.addEventListener('mouseup', () => {
      document.getElementById('hoverShow1').classList.remove('d-block');
      document.getElementById('hoverShow1').classList.add('d-none');
    })
  }

  updateRecord(record: GoalModel) {
    this._router.navigate(['private/agregador/goals/', record.id, 'update-personal-goal']);
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
