import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArgumentSalesService } from 'app/service/argument-sales.service';
import { ArgumentSalesModel } from 'app/models/argument-sales.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceListModel } from 'app/models/insurance-list.model';
import { DateAdapter } from '@angular/material/core';

declare const $: any;
@Component({
  selector: 'app-list-arguments',
  templateUrl: './list-arguments.component.html',
  styleUrls: ['./list-arguments.component.scss']
})
export class ListArgumentsComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  insuranceList: InsuranceListModel[];

  displayedColumns: string[] = ['code', 'title', 'insurance', 'visualizar', 'editar', 'remover'];
  dataSource: MatTableDataSource<ArgumentSalesModel>;
  formFilter: FormGroup;
  columnsTitle = ['Código', 'Título', 'Seguro'];
  recordDelete: ArgumentSalesModel;

  @Output('argument-selected')
  argumentSelect: EventEmitter<ArgumentSalesModel> = new EventEmitter();

  @Output('selected-option')
  selectedOption: EventEmitter<'VIEW' | 'EDIT' | 'DELETE'> = new EventEmitter();

  constructor(
    private _fb: FormBuilder,
    private _argumentSalesService: ArgumentSalesService,
    private _adapter: DateAdapter<any>,
    private activatedRoute: ActivatedRoute,
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
    this._adapter.setLocale('br');
    this.dataSource = new MatTableDataSource(this.activatedRoute.snapshot.data.argumentSales);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getListInsurance();
    this._buildFilterForm();

    $('#filter-arguments').on('click', () => {
      $('.filter-arguments').fadeToggle('fast');
    });
  }

  private _buildFilterForm() {
    this.formFilter = this._fb.group({
      title: [''],
      validityStartDate: [''],
      validityEndDate: [''],
      responsible: [''],
      insurance: ['']
    });
  }

  requestFilter() {
    const filter = this._filterValue;
    $('.filter-arguments').fadeToggle('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

  showForm(argument: ArgumentSalesModel, option: 'VIEW' | 'EDIT' | 'DELETE') {
    this.argumentSelect.emit(argument);
    this.selectedOption.emit(option);
  }

  getListInsurance() {
    this.insuranceList = this.activatedRoute.snapshot.data.insuranceList;
  }

  setRecordDelete(recordDelete: ArgumentSalesModel) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }
  updateEvent(event: any) {
    this._router.navigate(['private/comercial/sales-arguments/', event.id, 'update']);
  }

  viewEvent(event: any) {
    this._router.navigate(['private/comercial/sales-arguments/', event.id, 'view'], {
      queryParams: { disableForm: true }
    });
  }

}
