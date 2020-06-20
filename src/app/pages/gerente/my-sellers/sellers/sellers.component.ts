import { Component, OnInit } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';

@Component({
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {
  update: boolean;

  constructor(private nivel: NivelService) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.update = this.nivel.verificaUrl('update');
  }
}
