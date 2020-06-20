import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
