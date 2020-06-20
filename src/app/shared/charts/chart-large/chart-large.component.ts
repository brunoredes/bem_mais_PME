import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UfService } from 'app/service/uf.service';

declare let $: any;

@Component({
  selector: 'app-chart-large',
  templateUrl: './chart-large.component.html',
  styleUrls: ['./chart-large.component.scss']
})
export class ChartLargeComponent implements OnInit {

  @Output() changeDate = new EventEmitter();
  @Input() barLineChartData: ChartDataSets[];
  @Input() barLineChartLabels: string[];

  @Input() exportId: string;
  @Input() iconExportId: string;
  @Input() filterDataId: string;
  @Input() chartTitle: string;
  @Input() filterId: string;
  @Output() filterChart = new EventEmitter();

  @Input() barLineChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 3
  };

  @Input() barLineChartType: ChartType = 'bar';
  public barLineChartLegend = true;

  @Input() barLineChartColors: Color[] = [
    {
      backgroundColor: '#DEE4E8',
      borderColor: '#DEE4E8',
      pointBackgroundColor: '#DEE4E8',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#DEE4E8'
    },
    {
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: '#00caac',
      pointBackgroundColor: 'rgba(67, 210, 158, 1)',
      pointBorderColor: '#00caac',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(67, 210, 158, 0.8)',
    },
  ]

  dateDe: Date = new Date();
  dateAte: Date = new Date();
  formFilter: FormGroup;
  uf: any[];
  cities: string[];

  constructor(
    private _ufService: UfService,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder
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
        });
    if (this.filterId) {
      this.uf = this._activatedRoute.snapshot.data.values.uf;
    }

    this._createFormFilter();

    if (this.barLineChartType === 'pie') {
      this.barLineChartColors = [
        {
          backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
        }
      ]
    }
  }

  showContainerExport() {

    if (document.getElementById(this.exportId).style.display === 'block') {
      document.getElementById(this.exportId).style.display = 'none';
      document.getElementById(this.iconExportId).classList.remove('fa-chevron-up');
      document.getElementById(this.iconExportId).classList.add('fa-chevron-down');
    } else {
      document.getElementById(this.exportId).style.display = 'block';
      document.getElementById(this.iconExportId).classList.remove('fa-chevron-down');
      document.getElementById(this.iconExportId).classList.add('fa-chevron-up');
    }
  }

  showFilterCalendar() {
    if (document.getElementById(this.filterDataId).style.display === 'block') {
      document.getElementById(this.filterDataId).style.display = 'none';
    } else {
      document.getElementById(this.filterDataId).style.display = 'block';
    }
  }

  showFilter() {
    if (document.getElementById(this.filterId).style.display === 'block') {
      document.getElementById(this.filterId).style.display = 'none';
    } else {
      document.getElementById(this.filterId).style.display = 'block';
    }
  }

  dateRangeChange() {
    if (this.dateDe > this.dateAte) {
      this.dateAte = this.dateDe;
    }
    if (!this.dateAte) {
      this.dateAte = this.dateDe;
    }
    this.changeDate.emit([this.dateDe, this.dateAte]);
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group( {
      startDate: '',
      endDate: '',
      resale: '',
      uf: '',
      city: ''
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

  change() {
    const id = this.formFilter.get('uf').value;
    this._ufService.getCidade(id).subscribe(res => {
      this.cities = res;
    })
  }

}
