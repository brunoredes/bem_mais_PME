import { Component, OnInit } from '@angular/core';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { Chart } from 'chart.js';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-cancellations-product',
  templateUrl: './cancellations-product.component.html',
  styleUrls: ['./cancellations-product.component.scss']
})
export class CancellationsProductComponent implements OnInit {

  public cancellationsProduct: any = [];
  public chart: any = [];

  constructor(
    public api: DashCancellationsService,
    private _adapter: DateAdapter<any>,
    private activated: ActivatedRoute
  ) { }

  dateRangeChange() {
    if (this.api.dateDeCancellationsProduct > this.api.dateAteCancellationsProduct) {
      this.api.dateAteCancellationsProduct = this.api.dateDeCancellationsProduct;
    }
    if (!this.api.dateAteCancellationsProduct) {
      this.api.dateAteCancellationsProduct = this.api.dateDeCancellationsProduct;
    }
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._adapter.setLocale('br');

    (function () {
      $('#chart-cancellations-product').on('click', function () {
        $('.chart-cancellations-product').fadeToggle('fast');
      });
    })();

    this.cancellationsProduct = this.activated.snapshot.data.cancellationsProduct
    const cancellationsProductCanva: any = document.getElementById('cancellationsProductChart')
    const cancellationsProductChart = cancellationsProductCanva.getContext('2d')
    const labels = [], data = [];
    for (let i = 0; i < this.cancellationsProduct.length; i++) {
      labels.push(this.cancellationsProduct[i].category);
      data.push(this.cancellationsProduct[i].value);
    }
    this.chart = new Chart(cancellationsProductChart, {
      type: 'pie',
      data: {
        datasets: [
          {
            backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000'],
            data: data,
          }
        ],
        labels: labels,

      }
    })
  }
}
