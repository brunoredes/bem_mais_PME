import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqResolve } from 'app/resolves/faq.resolve';
import { FaqCategoryResolve } from 'app/resolves/farCategory.resolve';
import { FeedbackResolve } from 'app/resolves/feedbackResolve';
import { FeedbackCategoryResolve } from 'app/resolves/feedbackCategory';
import { FeedbackResponseResolve } from 'app/resolves/feedbackResponse.resolve';
import { CorretorHomeResolver } from 'app/resolves/corretor-home.resolve';
import { GerenteHomeResolver } from 'app/resolves/gerente-home.resolve';
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
      import('./gerente-home/gerente-home.module').then(
        m => m.GerenteHomeModule
      ),
    resolve: {
      values: GerenteHomeResolver
    }
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('./my-goals/my-goals.module').then(
        m => m.MyGoalsModule
      )
  },
  {
    path: 'sellers',
    loadChildren: () =>
      import('./my-sellers/my-sellers.module').then(
        m => m.MySellersModule
      )
  },
  {
    path: 'my-store',
    loadChildren: () =>
      import('./my-store/my-store.module').then(
        m => m.MyStoreModule
      )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        m => m.DashboardModule
      )
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
export class GerenteRoutingModule { }
