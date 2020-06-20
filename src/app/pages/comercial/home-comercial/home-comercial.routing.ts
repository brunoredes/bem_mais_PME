import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComercialComponent } from './home-comercial.component';

const routes: Routes = [{
    path: '',
    component: HomeComercialComponent,
    data:{title:"ComercialHomeTitle"}
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeComercialRoutingModule { }
