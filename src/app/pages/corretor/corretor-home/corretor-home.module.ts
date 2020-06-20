import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorretorHomeRoutingModule } from './corretor-home-routing.module';
import { CorretorHomeComponent } from './corretor-home.component';


@NgModule({
  declarations: [CorretorHomeComponent],
  imports: [
    CommonModule,
    CorretorHomeRoutingModule
  ]
})
export class CorretorHomeModule { }
