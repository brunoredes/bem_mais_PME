import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { DashVendasService } from '../../../../service/dash-vendas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public order: any = [];
  public myPerformace: any = [];

  constructor(
    public api: DashVendasService,
    public translate: TranslateService,
    public activaredRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.myPerformace = this.activaredRoute.snapshot.data.myPerformace
    this.order = this.activaredRoute.snapshot.data.orderDash
    setTimeout(() => {
      const element = this.myPerformace.id;
      const sales = this.myPerformace.percent;
      document.getElementById(`idSales${element}`).style.width = `${sales}%`
    }, .1);
  }

  format = (value, locale, style, currency) => {
    return new Intl.NumberFormat(locale, { style: style, currency: currency }).format(value);
  }

}
