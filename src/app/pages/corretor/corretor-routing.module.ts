import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessForRegionResolve } from 'app/resolves/accessForRegion.resolve';
import { CampaignCorretorResolve } from 'app/resolves/campaign-corretor.resolve';
import { ComboKindMaterialResolve } from 'app/resolves/comboKindMaterial.resolve';
import { ComboPartnersResolve } from 'app/resolves/comboPartners.resolve';
import { CorretorGoalsResolve } from 'app/resolves/corretor-goals.resolve';
import { CorretorHomeResolver } from 'app/resolves/corretor-home.resolve';
import { FaqResolve } from 'app/resolves/faq.resolve';
import { FaqCategoryResolve } from 'app/resolves/farCategory.resolve';
import { FeedbackCategoryResolve } from 'app/resolves/feedbackCategory';
import { FeedbackResolve } from 'app/resolves/feedbackResolve';
import { FeedbackResponseResolve } from 'app/resolves/feedbackResponse.resolve';
import { LoadingCidadeResolve } from 'app/resolves/loadingCidade.resolve.';
import { LoadingUfResolve } from 'app/resolves/loadingUf.resolve';
import { MostAccessResolve } from 'app/resolves/mostAccess.resolve';
import { StatusTrainingsResolve } from 'app/resolves/statusTrainings.resolve';
import { SummaryTrainingsResolve } from 'app/resolves/summaryTrainings.resolve';
import { TrainingsResolve } from 'app/resolves/trainings.resolve';
import { VendorsFinishResolve } from 'app/resolves/vendorsFinish.resolve';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./corretor-home/corretor-home.module').then(
                m => m.CorretorHomeModule
            ),
        resolve: {
            values: CorretorHomeResolver
        }
    },
    {
        path: 'campaign',
        loadChildren: () =>
            import('./campaign/campaign.module').then(
                m => m.CampaignModule
            ),
        resolve: {
            values: CampaignCorretorResolve,
            uf: LoadingUfResolve,
            cidade: LoadingCidadeResolve
        }
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./dashboard/dashboard.module').then(
                m => m.DashboardModule
            )
    },
    {
        path: 'my-goals',
        loadChildren: () =>
            import('./goals/goals.module').then(
                m => m.GoalsModule
            ),
        resolve: {
            values: CorretorGoalsResolve,
            uf: LoadingUfResolve,
            cidade: LoadingCidadeResolve
        }
    },
    {
        path: 'training',
        resolve: {
            trainings: TrainingsResolve,
            comboKind: ComboKindMaterialResolve,
            comboPartners: ComboPartnersResolve,
            statusDash: StatusTrainingsResolve,
            regionDash: AccessForRegionResolve,
            vendedorFinish: VendorsFinishResolve,
            mostAcess: MostAccessResolve,
            summary: SummaryTrainingsResolve
        },
        loadChildren: () => import('app/shared/trainings/trainings.module').then(m => m.TrainingsnModule)
    },
    {
        path: 'faq',
        loadChildren: () => import('../../shared/faq/faq.module').then(m => m.FaqModule),
        resolve: {
            faq: FaqResolve,
            categoria: FaqCategoryResolve
        }
    },
    {
        path: 'feedback',
        loadChildren: () => import('../../shared/feedback/feedback.module').then(m => m.FeedbackModule),
        resolve: {
            list: FeedbackResolve,
            category: FeedbackCategoryResolve,
            response: FeedbackResponseResolve
        }

    },
    {
        path: 'editUser',
        loadChildren: () => import('../../shared/edit-user/edit-user.module').then(m => m.EditUserModule),
        resolve: {
            uf: LoadingUfResolve
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CorretorRoutingModule { }
