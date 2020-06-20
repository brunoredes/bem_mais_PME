import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignComponent } from './campaign/campaign.component';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import { CampaignCorretorResolve } from 'app/resolves/campaign-corretor.resolve';

const routes: Routes = [
  {
    path: '',
    component: CampaignComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListCampaignComponent,
        data: {
          title: 'listaCampTitle'
        }
      },
      {
        path: 'create',
        component: FormCampaignComponent,
        data: {
          title: 'novaCampTitle'
        }
      },
      { path: ':id/view', component: FormCampaignComponent },
      {
        path: ':id/update', component: FormCampaignComponent,
        data: {
          title: 'Atualizar campanha'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
