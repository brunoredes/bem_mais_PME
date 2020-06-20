import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './extracts.component.html',
  styleUrls: ['./extracts.component.scss']
})
export class ExtractsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  get routeData() {
    return this._activatedRoute.snapshot.data.values;
  }
}
