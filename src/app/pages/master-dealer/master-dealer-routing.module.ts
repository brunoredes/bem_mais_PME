import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqResolve } from 'app/resolves/faq.resolve';
import { FaqCategoryResolve } from 'app/resolves/farCategory.resolve';
import { MasterDealerHomeResolve } from 'app/resolves/master-dealer-home.resolve';
import { AchievementGoalsResolve } from 'app/resolves/achievementGoals.resolve';
import { GoalsBeatsResolve } from 'app/resolves/goalsBeats.resolve';
import { BestMonthAgregadorResolve } from 'app/resolves/metas-melhores-mes-agregador.resolve';
import { GoalsSafeAgregadorResolve } from 'app/resolves/metas-vendas-seguro.resolve';
import { CategoryGoalsAgregadorResolve } from 'app/resolves/metas-categoria-vendas-agregador.resolve';
import { ComparativaSalesHomeAgregadorResolve } from 'app/resolves/comparative-sales-agregador.resolve';
import { SuggestionsHomeAgregadorResolve } from 'app/resolves/suggestions-home-agregador.resolve';
import { MasterDealerStoreManagerResolve } from 'app/resolves/master-dealer-store-manager.resolve';
import { FeedbackResolve } from 'app/resolves/feedbackResolve';
import { FeedbackCategoryResolve } from 'app/resolves/feedbackCategory';
import { FeedbackResponseResolve } from 'app/resolves/feedbackResponse.resolve';
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
      import('./master-dealer-home/master-dealer-home.module').then(
        m => m.MasterDealerHomeModule
      ),
    resolve: {
      values: MasterDealerHomeResolve
    }
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    resolve: {
      uf: LoadingUfResolve
    }
  },
  {
    path: 'my-stores',
    loadChildren: () =>
      import('./my-stores/my-stores.module').then(m => m.MyStoresModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'store-manager',
    loadChildren: () =>
      import('./store-manager/store-manager.module').then(
        m => m.StoreManagerModule
      ),
    resolve: {
      values: MasterDealerStoreManagerResolve
    }
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('./goals/goals.module').then(
        m => m.GoalsModule
      ),
    resolve: {
      achievementGoals: AchievementGoalsResolve,
      goalsBeats: GoalsBeatsResolve,
      melhores: BestMonthAgregadorResolve,
      vendasSeguros: GoalsSafeAgregadorResolve,
      vendasCategoria: CategoryGoalsAgregadorResolve,
      comparativeSales: ComparativaSalesHomeAgregadorResolve,
      suggestions: SuggestionsHomeAgregadorResolve
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
export class MasterDealerRoutingModule { }
