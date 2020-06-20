import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDealerHomeComponent } from './master-dealer-home.component';

const routes: Routes = [
  {
    path: '',
    component: MasterDealerHomeComponent,
    data: { title: 'MasterDealerHomeTitle' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDealerHomeRoutingModule {}
