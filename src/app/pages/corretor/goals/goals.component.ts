import { Component, OnInit } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';
import { UtilService } from 'app/helpers/utils';

@Component({
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  title = '';
  update: any
  constructor(private nivel: NivelService, private _translate: UtilService) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.title = this._translate.getMetasTitle();
    this.update = this.nivel.verificaUrl('update')
  }
}
