import { Component, OnInit } from '@angular/core';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { Chart } from 'chart.js';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-number-cancellations',
  templateUrl: './number-cancellations.component.html',
  styleUrls: ['./number-cancellations.component.scss']
})
export class NumberCancellationsComponent implements OnInit {
  public numberCancellations: any = [];
  public chart: any = [];

  constructor(
    public api: DashCancellationsService,
    private _adapter: DateAdapter<any>,
    private activated: ActivatedRoute
  ) { }

  dateRangeChange() {
    if (this.api.dateDeNumberCancellations > this.api.dateAteNumberCancellations) {
      this.api.dateAteNumberCancellations = this.api.dateDeNumberCancellations;
    }
    if (!this.api.dateAteNumberCancellations) {
      this.api.dateAteNumberCancellations = this.api.dateDeNumberCancellations;
    }
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._adapter.setLocale('br');

    (function () {
      $('#chart-number-cancellations').on('click', function () {
        $('.chart-number-cancellations').fadeToggle('fast');
      });
    })();
    this.numberCancellations = this.activated.snapshot.data.cancellationsNumber
    const numberCancellationsCanva: any = document.getElementById('numberCancellationsChart')
    const numberCancellationsChart = numberCancellationsCanva.getContext('2d')
    this.chart = new Chart(numberCancellationsChart, {
      type: 'bar',
      data: {
        labels: this.numberCancellations.xAxys,
        datasets: [
          {
            label: this.numberCancellations.series[0].name,
            data: this.numberCancellations.series[0].data,
            backgroundColor: '#DEE4E8',
            borderColor: '#DEE4E8',
            pointBackgroundColor: '#DEE4E8',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#DEE4E8'

          },
          {
            type: 'line',
            label: this.numberCancellations.series[1].name,
            data: this.numberCancellations.series[1].data,
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: '#00caac',
            pointBackgroundColor: 'rgba(67, 210, 158, 1)',
            pointBorderColor: '#00caac',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(67, 210, 158, 0.8)',
            borderWidth: 1
          }
        ]
      }

    })

  }
}
