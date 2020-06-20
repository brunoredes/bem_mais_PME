import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

declare let $: any;

@Component({
  selector: 'app-chart-info',
  templateUrl: './chart-info.component.html',
  styleUrls: ['./chart-info.component.scss']
})
export class ChartInfoComponent implements OnInit {

  @Output() filterChart = new EventEmitter();
  @Input() chartInfoData: ChartDataSets[];
  @Input() chartInfoLabels: string[];
  @Input() chartInfoOptions: ChartOptions;
  @Input() chartInfoColors: Color[];
  @Input() chartInfoType: ChartType = 'bar';
  @Input() chartInformations: any[];
  public chartInfoLegend = true;

  @Input() chartTitle: string;
  @Input() filterId: string;

  dateDe: Date = new Date();
  dateAte: Date = new Date();
  formFilter: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _adapter: DateAdapter<any>
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._adapter.setLocale('br');
    this._createFormFilter();

    if (this.chartInfoType === 'pie') {
      this.chartInfoColors = [
        {
          backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
        }
      ]
    }
  }

  showFilter() {
    if (document.getElementById(this.filterId).style.display === 'block') {
      document.getElementById(this.filterId).style.display = 'none';
    } else {
      document.getElementById(this.filterId).style.display = 'block';
    }
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group( {
      startDate: '',
      endDate: '',
      period: '',
      insurance: '',
      resale: ''
    })
  }

  filter() {
    const filter = this._filterValue;
    this.showFilter();
    this.filterChart.emit(filter);
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

}
