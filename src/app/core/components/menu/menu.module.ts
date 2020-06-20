import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MenuComponent } from './menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    MatTooltipModule,
    TranslateModule,
    RouterModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {}
