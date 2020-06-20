import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorretorHomeComponent } from './corretor-home.component';


const routes: Routes = [
  { path: '', component: CorretorHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorretorHomeRoutingModule { }
