import { Component, OnInit } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';
import { UtilService } from 'app/helpers/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-comercial',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComercialComponent implements OnInit {

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}



