import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqResolve } from 'app/resolves/faq.resolve';
import { FaqCategoryResolve } from 'app/resolves/farCategory.resolve';
import { FeedbackResolve } from 'app/resolves/feedbackResolve';
import { FeedbackCategoryResolve } from 'app/resolves/feedbackCategory';
import { FeedbackResponseResolve } from 'app/resolves/feedbackResponse.resolve';
import { SuggestionsGoalsResolve } from 'app/resolves/suggestionsGoals.resolve';
import { AggregatorMyPartnersResolve } from 'app/resolves/aggregator-my-partners.resolve';
import { AggregatorGoalsResolve } from 'app/resolves/aggregator-goals.resolve';
import { ComparativaSalesHomeAgregadorResolve } from 'app/resolves/comparative-sales-agregador.resolve';
import { CancellationsSafeHomeAgregadorResolve } from 'app/resolves/cancellations-safe-agregador.resolve';
import { CancellationsProductAgregadorResolve } from 'app/resolves/cancellations-category-home-agregador.resolve';
import { SalesSafeAgregadorHomeAgregadorResolve } from 'app/resolves/sales-safe-home-agregador.resolve';
import { SalesCategoryHomeAgregadorResolve } from 'app/resolves/sales-category-home-agregador.resolve';
import { SuggestionsHomeAgregadorResolve } from 'app/resolves/suggestions-home-agregador.resolve';
import { LoadingUfResolve } from 'app/resolves/loadingUf.resolve';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./aggregator-home/aggregator-home.module').then(
        m => m.AggregatorHomeModule
      ),
    resolve: {
      suggestionsGoals: SuggestionsGoalsResolve,
      comparativeSales: ComparativaSalesHomeAgregadorResolve,
      cancellationSafe: CancellationsSafeHomeAgregadorResolve,
      cancellationsProduct: CancellationsProductAgregadorResolve,
      SalesSafe: SalesSafeAgregadorHomeAgregadorResolve,
      SalesCategory: SalesCategoryHomeAgregadorResolve,
      suggestions: SuggestionsHomeAgregadorResolve
    }
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule),
    resolve: {
      values: AggregatorGoalsResolve
    }
  },
  {
    path: 'my-partners',
    loadChildren: () =>
      import('./my-partners/my-partners.module').then(m => m.MyPartnersModule),
    resolve: {
      values: AggregatorMyPartnersResolve
    }
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('../../shared/faq/faq.module').then(m => m.FaqModule),
    resolve: {
      faq: FaqResolve,
      categoria: FaqCategoryResolve
    }
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('../../shared/feedback/feedback.module').then(
        m => m.FeedbackModule
      ),
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
export class AgregadorRoutingModule { }
