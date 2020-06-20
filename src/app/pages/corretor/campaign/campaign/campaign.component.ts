import { Component, OnInit } from '@angular/core';
import { UtilService } from 'app/helpers/utils';
import { NivelService } from 'app/service/nivel.service';

declare const $: any;

@Component({
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  title = '';
  update: any
  constructor(private _translate: UtilService, private nivel: NivelService) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.title = this._translate.getCampanhasTitle();
    this.update = this.nivel.verificaUrl('update')
  }
}
