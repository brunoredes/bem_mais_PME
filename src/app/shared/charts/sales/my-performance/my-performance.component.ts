import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { DashVendasService } from 'app/service/dash-vendas.service';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {

  public myPerfomace: any = [];
  public chart: any = [];

  constructor(
    public api: DashVendasService,
    public translate: TranslateService,
    private _adapter: DateAdapter<any>,
    public activaredRoute: ActivatedRoute

  ) { }

  dateRangeChange() {
    if (this.api.dateDeMyPerformance > this.api.dateAteMyPerformance) {
      this.api.dateAteMyPerformance = this.api.dateDeMyPerformance;
    }
    if (!this.api.dateAteMyPerformance) {
      this.api.dateAteMyPerformance = this.api.dateDeMyPerformance;
    }
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._adapter.setLocale('br');

    (function () {
      $('#chart-my-performance').on('click', function () {
        $('.chart-my-performance').fadeToggle('fast');
      });
    })();
    this.myPerfomace = this.activaredRoute.snapshot.data.myPerformaceDash
    const canvas1: any = document.getElementById('chart1')
    const chart1 = canvas1.getContext('2d')
    this.chart = new Chart(chart1, {
      type: 'line',
      data: {
        labels: this.myPerfomace.xAxys,
        datasets: [
          {
            label: this.myPerfomace.series[0].name,
            data: this.myPerfomace.series[0].data,
            borderColor: 'rgba(52, 52, 52, .7)',
            backgroundColor: 'rgba(52, 52, 52, .2)',
            borderWidth: 2
          },
          {
            label: this.myPerfomace.series[1].name,
            data: this.myPerfomace.series[1].data,
            borderColor: 'rgba(98, 188, 0, .7)',
            backgroundColor: 'rgba(98, 188, 0, .2)',
            borderWidth: 2
          },
          {
            label: this.myPerfomace.series[2].name,
            data: this.myPerfomace.series[2].data,
            backgroundColor: 'rgba(0, 90, 171, .2)',
            borderColor: 'rgba(0, 90, 171, .7)',
            borderWidth: 2
          }
        ]
      }
    })
  }
}


