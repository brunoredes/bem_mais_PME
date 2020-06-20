import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyStoreComponent } from './my-store/my-store.component';

const routes: Routes = [
  { path: '', component: MyStoreComponent, data: { title: 'ManagerMyStore' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoreRoutingModule {}
