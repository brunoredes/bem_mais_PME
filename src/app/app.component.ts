import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TitleService } from './core/components/title/title.service';

@Component({
  selector: 'app-chankya-app',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.component.css']
})
export class ChankyaAppComponent implements OnInit {
  logged = false;
  botao = null;
  loadingSubscription: Subscription;
  constructor(
    translate: TranslateService,
    private _titleService: TitleService
  ) {
    translate.addLangs([
      'pt',
      'en',
      'es',
    ]);
    translate.use(localStorage.getItem('lang') || translate.getBrowserLang())
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._titleService.startTrackingRouteEvent();
  }
}
