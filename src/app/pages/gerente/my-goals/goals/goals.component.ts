import { Component, OnInit } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';

@Component({
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  update: any
  constructor(private nivel: NivelService) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.update = this.nivel.verificaUrl('update')
  }
}
