import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputImageComponent } from './input-image.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InputImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    InputImageComponent
  ]
})
export class InputImageModule { }
