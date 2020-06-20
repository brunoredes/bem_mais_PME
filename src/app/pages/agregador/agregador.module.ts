import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgregadorRoutingModule } from './agregador-routing.module';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AgregadorRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class AgregadorModule { }
