import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPartnersComponent } from './list-partners/list-partners.component';
import { FormPartnerComponent } from './form-partner/form-partner.component';
import { ReportComponent } from './report/report.component';
import { MyPartnersComponent } from './my-partners.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: MyPartnersComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListPartnersComponent },
      { path: 'create', component: FormPartnerComponent },
      {
        path: ':id', children: [
          { path: 'update', component: FormPartnerComponent },
          {
            path: 'report-sales', children: [
              {
                path: '',
                component: ReportComponent
              },
              {
                path: ':id/detail',
                component: DetailsComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPartnersRoutingModule { }
