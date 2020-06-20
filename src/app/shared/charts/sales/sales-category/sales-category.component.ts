import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { DashVendasService } from '../../../../service/dash-vendas.service';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-sales-category',
  templateUrl: './sales-category.component.html',
  styleUrls: ['./sales-category.component.scss']
})
export class SalesCategoryComponent implements OnInit {
  public categorySales: any = [];
  public chart: any = [];

  constructor(
    public api: DashVendasService,
    public translate: TranslateService,
    private _adapter: DateAdapter<any>,
    public activaredRoute: ActivatedRoute

  ) { }

  dateRangeChange() {
    if (this.api.dateDeSalesCategory > this.api.dateAteSalesCategory) {
      this.api.dateAteSalesCategory = this.api.dateDeSalesCategory;
    }
    if (!this.api.dateAteSalesCategory) {
      this.api.dateAteSalesCategory = this.api.dateDeSalesCategory;
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
        });
    this._adapter.setLocale('br');

    (function () {
      $('#chart-sales-category').on('click', function () {
        $('.filter-data-sales-cat').fadeToggle('fast');
      });
    })();
    this.categorySales = this.activaredRoute.snapshot.data.salesCategory
    const canvas4: any = document.getElementById('chart4')
    const chart4 = canvas4.getContext('2d')
    const labels = [], data = [];
    for (let i = 0; i < this.categorySales.length; i++) {
      labels.push(this.categorySales[i].insurance);
      data.push(this.categorySales[i].value);
    }
    this.chart = new Chart(chart4, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000'],
            data: data,
          }
        ],
      }
    })

  }
}
