import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDealerRoutingModule } from './master-dealer-routing.module';
import { SharedModule } from 'app/pages/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MasterDealerRoutingModule
  ]
})
export class MasterDealerModule { }
