import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/session/session.module').then(m => m.SessionDemoModule)
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./core/security/security.module').then(m => m.SecurityModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class RoutingModule {}
