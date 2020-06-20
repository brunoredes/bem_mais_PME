import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { GoalsCommercialService } from 'app/service/goals-commercial.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { GoalModel } from 'app/models/goal.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileListModel } from 'app/models/profile-list.model';
import { DateAdapter } from '@angular/material/core';

declare const $: any;
@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.scss']
})
export class ListGoalsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Output('goal-selected')
  goalSelect: EventEmitter<GoalModel> = new EventEmitter();

  @Output('selected-option')
  selectedOption: EventEmitter<'VIEW' | 'EDIT' | 'DELETE'> = new EventEmitter();

  profileList: ProfileListModel[];

  displayedColumns: string[] = [
    'code',
    'profile',
    'title',
    'description',
    'startDate',
    'endDate',
    'insurance',
    'visualizar',
    'editar',
    'remover'
  ];

  dataSource: MatTableDataSource<GoalModel>;
  columnsTitle = ['Código', 'Perfil', 'Título', 'Descrição', 'Data Início', 'Data Fim', 'Seguro'];
  recordDelete: GoalModel;

  formFilter: FormGroup;

  constructor(
    private _goalsService: GoalsCommercialService,
    private _fb: FormBuilder,
    private _adapter: DateAdapter<any>,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    document.body.scrollTop = 0;
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

    this.getListProfile();
    this._buildFilterForm();
    this.dataSource = new MatTableDataSource(this.activatedRoute.snapshot.data.goals);

    $('#filter-goals').on('click', () => {
      $('.filter-goals').fadeToggle('fast');
    });
  }

  loadGoals() {
    const filter = this._filterValue;
    $('.filter-goals').fadeToggle('fast');
  }

  showForm(goal: GoalModel, option: 'VIEW' | 'EDIT' | 'DELETE') {
    this.goalSelect.emit(goal);
    this.selectedOption.emit(option);
  }

  private _buildFilterForm() {
    this.formFilter = this._fb.group({
      code: [''],
      profile: [''],
      goal: [''],
      validityStartDate: [''],
      validityEndDate: [''],
      valueGoal: ['']
    });
  }

  get _filterValue() {
    return this.formFilter.value;
  }

  getListProfile() {
    this.profileList = this.activatedRoute.snapshot.data.profileList;
  }

  setRecordDelete(recordDelete: GoalModel) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }
  updateEvent(event: any) {
    this._router.navigate(['private/comercial/new-goals/', event.id, 'update'], {
      queryParams: { disableForm: false }
    });
  }

  viewEvent(event: any) {
    this._router.navigate(['private/comercial/new-goals/', event.id, 'view'],{
      queryParams: {disableForm: true}
    });
  }
}
