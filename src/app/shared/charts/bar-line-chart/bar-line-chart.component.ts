import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';

declare let $: any;

@Component({
  selector: 'app-bar-line-chart',
  templateUrl: './bar-line-chart.component.html',
  styleUrls: ['./bar-line-chart.component.scss']
})
export class BarLineChartComponent implements OnInit {

  @Input() barLineChartData: ChartDataSets[];
  @Input() barLineChartLabels: string[];

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

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (this.barLineChartType === 'pie') {
      this.barLineChartColors = [
        {
          backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
        }
      ]
    }
  }

}
