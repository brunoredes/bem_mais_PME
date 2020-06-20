import { Component, OnInit } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';

@Component({
  templateUrl: './my-partners.component.html',
  styleUrls: ['./my-partners.component.scss']
})
export class MyPartnersComponent implements OnInit {

  constructor(private nivel: NivelService) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
