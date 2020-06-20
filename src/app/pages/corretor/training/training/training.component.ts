import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
