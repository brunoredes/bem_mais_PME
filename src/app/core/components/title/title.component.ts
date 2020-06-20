import { Component } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'bem-mais-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  constructor(private _titleService: TitleService) {}

  get title() {
    return this._titleService.title;
  }
}
