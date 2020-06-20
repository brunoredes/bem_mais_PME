import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FaqComponent } from './faq.component';

const routes: Routes = [{
    path: '',
    component: FaqComponent
  }];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FaqRoutingModule { }

