import { Component, OnInit } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';
import { UtilService } from 'app/helpers/utils';

@Component({
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  update: any
  title: string

  constructor(private nivel: NivelService, private _translate: UtilService) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.title = this._translate.getAggregTitleList()
    this.update = this.nivel.verificaUrl('update')
    console.log(this.update);

  }

}
