import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TitleComponent]
})
export class TitleModule {}
