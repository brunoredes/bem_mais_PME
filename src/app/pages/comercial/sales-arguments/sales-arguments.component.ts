import { Component, OnInit } from '@angular/core';
import { ArgumentSalesModel } from 'app/models/argument-sales.model';

@Component({
  selector: 'app-sales-arguments',
  templateUrl: './sales-arguments.component.html',
  styleUrls: ['./sales-arguments.component.scss']
})
export class SalesArgumentsComponent implements OnInit {
  constructor() {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;}
}
