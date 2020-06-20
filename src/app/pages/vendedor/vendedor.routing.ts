import { Routes } from '@angular/router';
import { BestWeekResolve } from 'app/resolves/bestweek.resolve';
import { EmailPolicyResolve } from 'app/resolves/emailPolicy.resolve';
import { FaqResolve } from 'app/resolves/faq.resolve';
import { FaqCategoryResolve } from 'app/resolves/farCategory.resolve';
import { FeedbackCategoryResolve } from 'app/resolves/feedbackCategory';
import { FeedbackResolve } from 'app/resolves/feedbackResolve';
import { FeedbackResponseResolve } from 'app/resolves/feedbackResponse.resolve';
import { FilterCategoryResolve } from 'app/resolves/filterCategory';
import { FilterStatusResolve } from 'app/resolves/filterStatus.resolve';
import { InstitucionalResolve } from 'app/resolves/institucional.resolve';
import { MarketingResolve } from 'app/resolves/market.resolve';
import { PolicyResolve } from 'app/resolves/policy.resolve';
import { ProductResolve } from 'app/resolves/productResolve.resolve';
import { TrainingsResolve } from 'app/resolves/trainings.resolve';
import { YourProtectionResolve } from 'app/resolves/yourProtectionResolve.resolve';
import { LoadingUfResolve } from 'app/resolves/loadingUf.resolve';

export const VendedorRouting: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        resolve: {
            institucional: InstitucionalResolve,
            market: MarketingResolve,
            bestweek: BestWeekResolve
        },
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'policy',
        resolve: {
            policy: PolicyResolve,
            email: EmailPolicyResolve
        },
        loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule)
    },
    {
        path: 'protection/safe',
        resolve: {
            yourProtection: YourProtectionResolve,
        },
        loadChildren: () => import('./protection/protection.module').then(m => m.ProtectionModule)
    },
    {
        path: 'select',
        resolve: {
            product: ProductResolve
        },
        loadChildren: () => import('./protection/details/select/select.module').then(m => m.SelectModule)
    },
    {
        path: 'protection/product',
        loadChildren: () => import('./protection/details/timeline/timeline.module').then(m => m.TimelineModule)
    },
    {
        path: 'trainings',
        resolve: {
            trainings: TrainingsResolve,
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
        path: 'dashboard',
        loadChildren: () => import('../../pages/vendedor/dashboard/dashboard.module').then(m => m.DashboardModule),
        resolve: {
            filterStatus: FilterStatusResolve,
            filterCategory: FilterCategoryResolve
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
