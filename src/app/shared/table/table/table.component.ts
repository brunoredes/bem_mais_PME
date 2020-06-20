import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

declare const $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any>;
  @Input() columnsTitle: string[];
  @Output() recordDelete = new EventEmitter();
  @Output() viewElement = new EventEmitter();
  @Output() updateElement = new EventEmitter();
  @Output() detailElement = new EventEmitter();
  @Output() approveElement = new EventEmitter();
  @Output() disapproveElement = new EventEmitter();
  @Output() documentElement = new EventEmitter();
  @Output() emailElement = new EventEmitter();

  ngOnChanges() {
    this.requestFilter();
  }

  columns: string[] = [];

  constructor(
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.displayedColumns.forEach((value) => {
      if (value !== 'documento' &&
          value !== 'aprovar' &&
          value !== 'reprovar' &&
          value !== 'visualizar' &&
          value !== 'detalhes' &&
          value !== 'editar' &&
          value !== 'emailIcon' &&
          value !== 'remover') {
        this.columns.push(value);
      }
    });
  }

  requestFilter() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setRecordDelete(element: any) {
    this.recordDelete.emit(element);
  }

  view(element: any) {
    this.viewElement.emit(element);
  }

  update(element: any) {
    this.updateElement.emit(element);
  }

  detail(element: any) {
    this.detailElement.emit(element);
  }

  approve(element: any) {
    this.approveElement.emit(element);
  }

  disapprove(element: any) {
    this.disapproveElement.emit(element);
  }

  document(element: any) {
    this.documentElement.emit(element);
  }

  email(element: any) {
    this.emailElement.emit(element);
  }

}
