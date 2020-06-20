import { Component, OnInit } from '@angular/core';
import { UtilService } from 'app/helpers/utils';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = '';

  constructor(private _translate: UtilService) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.title = this._translate.getDashTitle();
  }
}
