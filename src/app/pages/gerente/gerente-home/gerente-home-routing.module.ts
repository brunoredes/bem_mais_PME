import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenteHomeComponent } from './gerente-home.component';

const routes: Routes = [{ path: '', component: GerenteHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenteHomeRoutingModule {}
