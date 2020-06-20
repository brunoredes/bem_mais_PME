import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewCampaignComponent } from './new-campaign.component';
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { CampaignResolve } from 'app/resolves/campaign.resolve';
import { InsuranceListCampaignResolve } from 'app/resolves/insuranceListCampaign.resolve';
import { GoalsListCampaignResolve } from 'app/resolves/goalsListCampaign.resolve';
import { ProfileListCampaignResolve } from 'app/resolves/profileListCampaign.resolve';

const routes: Routes = [
    {
        path: '',
        component: NewCampaignComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                component: ListCampaignComponent,
                resolve: {
                    campaign: CampaignResolve,
                    insuranceListCampaign: InsuranceListCampaignResolve,
                    goalsListCampaign: GoalsListCampaignResolve,
                    profileListCampaign: ProfileListCampaignResolve
                },
                data: {
                    title: 'ComercialNewCampTitlPag'
                }
            },
            {
                path: 'form',
                component: FormCampaignComponent,
                resolve: {
                    insuranceListCampaign: InsuranceListCampaignResolve,
                    goalsListCampaign: GoalsListCampaignResolve,
                    profileListCampaign: ProfileListCampaignResolve
                },
                data: {
                    title: 'ComercialNewCampTitleNew'
                }
            },
            {
                path: ':id/update',
                component: FormCampaignComponent,
                resolve: {
                    insuranceListCampaign: InsuranceListCampaignResolve,
                    goalsListCampaign: GoalsListCampaignResolve,
                    profileListCampaign: ProfileListCampaignResolve
                },
                data: {
                    title: 'edit-icon'
                }
            },
            {
                path: ':id/view',
                component: FormCampaignComponent,
                resolve: {
                    insuranceListCampaign: InsuranceListCampaignResolve,
                    goalsListCampaign: GoalsListCampaignResolve,
                    profileListCampaign: ProfileListCampaignResolve
                },
                data: {
                    title: 'view-icon'
                }
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewCampaignRoutingModule { }

