import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MyStoreRoutingModule } from './my-store-routing.module';
import { MyStoreComponent } from './my-store/my-store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [MyStoreComponent],
  imports: [
    CommonModule,
    MyStoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    TranslateModule,
    TitleModule
  ]
})
export class MyStoreModule {}
