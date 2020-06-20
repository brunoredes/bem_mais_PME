import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { DashVendasService } from '../../../../service/dash-vendas.service';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-sales-amount',
  templateUrl: './sales-amount.component.html',
  styleUrls: ['./sales-amount.component.scss']
})
export class SalesAmountComponent implements OnInit {
  public salesAmount: any = [];
  public chart: any = [];

  constructor(
    public api: DashVendasService,
    public translate: TranslateService,
    private _adapter: DateAdapter<any>,
    public activaredRoute: ActivatedRoute
  ) { }

  dateRangeChange() {
    if (this.api.dateDeSalesAmount > this.api.dateAteSalesAmount) {
      this.api.dateAteSalesAmount = this.api.dateDeSalesAmount;
    }
    if (!this.api.dateAteSalesAmount) {
      this.api.dateAteSalesAmount = this.api.dateDeSalesAmount;
    }
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._adapter.setLocale('br');

    (function () {
      $('#chart-sales-amount').on('click', function () {
        $('.chart-sales-amount').fadeToggle('fast');
      });
    })();
    this.salesAmount = this.activaredRoute.snapshot.data.salesAmount
    const canvas2: any = document.getElementById('chart2')
    const chart2 = canvas2.getContext('2d')
    this.chart = new Chart(chart2, {
      type: 'bar',
      data: {
        labels: this.salesAmount.xAxys,
        datasets: [
          {
            label: this.salesAmount.series[0].name,
            data: this.salesAmount.series[0].data,
            backgroundColor: '#1862c6',
            borderColor: '#1862c6',
            pointBackgroundColor: '#1862c6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#1862c6'
          },
          {
            type: 'line',
            label: this.salesAmount.series[1].name,
            data: this.salesAmount.series[1].data,
            backgroundColor: '#DEE4E8',
            borderColor: '#DEE4E8',
            pointBackgroundColor: '#DEE4E8',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#DEE4E8',
            borderWidth: 1
          }
        ]
      }
    })
  }
}
