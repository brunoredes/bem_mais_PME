import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

declare let $: any;

@Component({
  selector: 'app-dual-chart-large',
  templateUrl: './dual-chart-large.component.html',
  styleUrls: ['./dual-chart-large.component.scss']
})
export class DualChartLargeComponent implements OnInit {

  @Output() changeDate = new EventEmitter();
  @Input() chart1Data: ChartDataSets[];
  @Input() chart1Labels: string[];
  @Input() chart1Options: ChartOptions;
  @Input() chart1Colors: Color[];
  @Input() chart1Type: ChartType = 'bar';
  @Input() chart1Title: string;
  public chart1Legend = true;

  @Input() chart2Data: ChartDataSets[];
  @Input() chart2Labels: string[];
  @Input() chart2Options: ChartOptions;
  @Input() chart2Colors: Color[];
  @Input() chart2Type: ChartType = 'bar';
  @Input() chart2Title: string;
  public chart2Legend = true;

  @Input() exportId: string;
  @Input() iconExportId: string;
  @Input() filterDataId: string;
  @Input() chartTitle: string;

  dateDe: Date = new Date();
  dateAte: Date = new Date();

  constructor() { }

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
    if (this.chart1Type === 'pie') {
      this.chart1Colors = [
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

  dateRangeChange() {
    if (this.dateDe > this.dateAte) {
      this.dateAte = this.dateDe;
    }
    if (!this.dateAte) {
      this.dateAte = this.dateDe;
    }
    this.changeDate.emit([this.dateDe, this.dateAte]);
  }

}
