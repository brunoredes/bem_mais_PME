import { Component, OnInit } from '@angular/core';
import { DashGoalsService } from 'app/service/dash-goals.service';
import * as Chart from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparative-sales',
  templateUrl: './comparative-sales.component.html',
  styleUrls: ['./comparative-sales.component.scss']
})
export class ComparativeSalesComponent implements OnInit {
  public comparativeSales: any = []
  public chart: any = []
  constructor(public activaredRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.comparativeSales = this.activaredRoute.snapshot.data.comparativeSales
    const comparativoSalesCanva: any = document.getElementById('comparativoSalesChart')
    const comparativoSalesChart = comparativoSalesCanva.getContext('2d')
    const labels = [], data = [], position = [];
    for (let i = 0; i < this.comparativeSales.vendors.length; i++) {
      data.push(this.comparativeSales.vendors[i].amount);
      labels.push(this.comparativeSales.vendors[i].name);
      position.push(this.comparativeSales.vendors[i].position);
    }
    this.chart = new Chart(comparativoSalesChart, {
      type: 'horizontalBar',
      data: {
        datasets: [
          {
            data: data,
            backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658'],
          }
        ],
        labels: position,

      }
    })
  }
}
