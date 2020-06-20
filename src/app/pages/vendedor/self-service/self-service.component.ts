import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-self-service',
  templateUrl: './self-service.component.html',
  styleUrls: ['./self-service.component.scss']
})
export class SelfServiceComponent implements OnInit {
  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  constructor(public loading: LoadingService) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const rs = document.readyState;
    switch (rs) {
      case 'interactive':
      case 'complete':
        this.loading.offLoadingMenuComponents();
        break;
    }
  }

}
