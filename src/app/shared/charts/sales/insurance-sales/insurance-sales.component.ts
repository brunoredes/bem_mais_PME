import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { DashVendasService } from 'app/service/dash-vendas.service';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-insurance-sales',
  templateUrl: './insurance-sales.component.html',
  styleUrls: ['./insurance-sales.component.scss']
})
export class InsuranceSalesComponent implements OnInit {
  public insuranceSafe: any = [];
  public chart: any = [];

  constructor(
    public api: DashVendasService,
    public translate: TranslateService,
    private _adapter: DateAdapter<any>,
    public activaredRoute: ActivatedRoute

  ) { }

  dateRangeChange() {
    if (this.api.dateDeInsuranceSales > this.api.dateAteInsuranceSales) {
      this.api.dateAteInsuranceSales = this.api.dateDeInsuranceSales;
    }
    if (!this.api.dateAteInsuranceSales) {
      this.api.dateAteInsuranceSales = this.api.dateDeInsuranceSales;
    }
  }

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
        }),
    this._adapter.setLocale('br');

    (function () {
      $('#chart-insurance-sales').on('click', function () {
        $('.filter-data').fadeToggle('fast');
      });
    })();
    this.insuranceSafe = this.activaredRoute.snapshot.data.insuranceSales
    const canvas3: any = document.getElementById('chart3')
    const chart3 = canvas3.getContext('2d')
    const labels = [], data = [];
    for (let i = 0; i < this.insuranceSafe.length; i++) {
      labels.push(this.insuranceSafe[i].insurance);
      data.push(this.insuranceSafe[i].value);
    }
    this.chart = new Chart(chart3, {
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
