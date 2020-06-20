import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-dashboard',
  templateUrl: './orders-dashboard.component.html',
  styleUrls: ['./orders-dashboard.component.scss']
})
export class OrdersDashboardComponent implements OnInit {

  @Input() orderData: any[]
  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  format = (value, locale, style, currency) => {
    return new Intl.NumberFormat(locale, { style: style, currency: currency }).format(value);
  }

}
