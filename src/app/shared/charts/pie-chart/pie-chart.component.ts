import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() pieChartData: SingleDataSet;
  @Input() pieChartLabels: string[];

  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public pieChartColors: Color[] = [
    {
      backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
    },
  ]

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
