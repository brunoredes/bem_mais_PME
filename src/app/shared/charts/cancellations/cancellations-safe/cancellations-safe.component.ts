import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-cancellations-safe',
  templateUrl: './cancellations-safe.component.html',
  styleUrls: ['./cancellations-safe.component.scss']
})
export class CancellationsSafeComponent implements OnInit {

  public cancellationsSafe: any = [];
  public chart: any = [];

  constructor(
    public api: DashCancellationsService,
    public translate: TranslateService,
    private _adapter: DateAdapter<any>,
    private activated: ActivatedRoute
  ) { }

  dateRangeChange() {
    if (this.api.dateDeCancellationsSafe > this.api.dateAteCancellationsSafe) {
      this.api.dateAteCancellationsSafe = this.api.dateDeCancellationsSafe;
    }
    if (!this.api.dateAteCancellationsSafe) {
      this.api.dateAteCancellationsSafe = this.api.dateDeCancellationsSafe;
    }
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._adapter.setLocale('br');

    (function () {
      $('#chart-cancellations-safe').on('click', function () {
        $('.chart-cancellations-safe').fadeToggle('fast');
      });
    })();

    this.cancellationsSafe = this.activated.snapshot.data.cancellationsSafe
    const cancellationsSafeCanva: any = document.getElementById('cancellationsSafeChart')
    const cancellationsSafeChart = cancellationsSafeCanva.getContext('2d')
    const labels = [], data = [];
    for (let i = 0; i < this.cancellationsSafe.length; i++) {
      labels.push(this.cancellationsSafe[i].insurance);
      data.push(this.cancellationsSafe[i].value);
    }
    this.chart = new Chart(cancellationsSafeChart, {
      type: 'pie',
      data: {
        datasets: [
          {
            backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa'],
            data: data,
          }
        ],
        labels: labels,
      }
    })
  }
}
