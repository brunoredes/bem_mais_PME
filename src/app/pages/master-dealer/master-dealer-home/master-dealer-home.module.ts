import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/pages/shared.module';
import { ChartsModule } from 'ng2-charts';
import { MasterDealerHomeRoutingModule } from './master-dealer-home-routing.module';
import { MasterDealerHomeComponent } from './master-dealer-home.component';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [MasterDealerHomeComponent],
  imports: [
    CommonModule,
    MasterDealerHomeRoutingModule,
    ChartsModule,
    SharedModule,
    TitleModule
  ]
})
export class MasterDealerHomeModule {}
