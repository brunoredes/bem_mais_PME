import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AggregatorHomeComponent } from './aggregator-home.component';


const routes: Routes = [
  {
    path: '',
    component: AggregatorHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AggregatorHomeRoutingModule { }
