import { Routes } from '@angular/router';
import { AccessForRegionResolve } from 'app/resolves/accessForRegion.resolve';
import { CancelCategoryResolve } from 'app/resolves/cancelCategory.resolve';
import { CancelInsuranceResolve } from 'app/resolves/cancelInsurance.resolve';
import { ClaimsCategoryResolve } from 'app/resolves/claimsCategory.resolve';
import { ClaimsInsuranceResolve } from 'app/resolves/claimsInsurance.resolve';
import { ComboKindMaterialResolve } from 'app/resolves/comboKindMaterial.resolve';
import { ComboPartnersResolve } from 'app/resolves/comboPartners.resolve';
import { ComercialInterestedPartnersResolve } from 'app/resolves/comercial-interested-partners.resolve';
import { ComercialSalesPartnersResolve } from 'app/resolves/comercial-sales-partners.resolve';
import { FaqResolve } from 'app/resolves/faq.resolve';
import { FaqCategoryResolve } from 'app/resolves/farCategory.resolve';
import { FeedbackCategoryResolve } from 'app/resolves/feedbackCategory';
import { FeedbackResolve } from 'app/resolves/feedbackResolve';
import { FeedbackResponseResolve } from 'app/resolves/feedbackResponse.resolve';
import { FilterCategoryResolve } from 'app/resolves/filterCategory';
import { FilterStatusResolve } from 'app/resolves/filterStatus.resolve';
import { InsuranceSalesResolve } from 'app/resolves/InsuranceSales.resolve';
import { LoadingBestPartnersResolve } from 'app/resolves/loadingBestPartners.resolve';
import { LoadingCidadeResolve } from 'app/resolves/loadingCidade.resolve.';
import { LoadingFeedbackPercentResolve } from 'app/resolves/loadingFeedbackPercent.resolve';
import { LoadingGoalsResolve } from 'app/resolves/loadingGoals.resolve';
import { LoadingInsuranceResolve } from 'app/resolves/loadingInsurance.resolve';
import { LoadingNewInterestedPartnersResolve } from 'app/resolves/loadingNewInterestedPartners.resdolve';
import { SalesByStateResolve } from 'app/resolves/loadingSalesByState.resolve';
import { LoadingSalesInsuranceResolve } from 'app/resolves/loadingSalesInsurance.resolve';
import { SearchGoalsResolve } from 'app/resolves/loadingSearchGoals.resolve';
import { LoadingUfResolve } from 'app/resolves/loadingUf.resolve';
import { LoadingWorstPartnersResolve } from 'app/resolves/loadingWorstPartners.resolve';
import { MostAccessResolve } from 'app/resolves/mostAccess.resolve';
import { MyPerformaceResolve } from 'app/resolves/myPerformace.resolve';
import { OrderSalesResolve } from 'app/resolves/orderSales.resolve';
import { SalesCategoryResolve } from 'app/resolves/SalesCategory.resolve';
import { StatusTrainingsResolve } from 'app/resolves/statusTrainings.resolve';
import { SummaryTrainingsResolve } from 'app/resolves/summaryTrainings.resolve';
import { TotalCanceledVolumeResolve } from 'app/resolves/TotalCanceledVolume.resolve';
import { TotalClaimsVolumeResolve } from 'app/resolves/totalClaimsVolume.resolve';
import { TotalSalesVolumeResolve } from 'app/resolves/TotalSalesVolume.resolve';
import { TrainingsResolve } from 'app/resolves/trainings.resolve';
import { VendorsFinishResolve } from 'app/resolves/vendorsFinish.resolve';

export const ComercialRouting: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    resolve: {
      dataGoals: LoadingGoalsResolve,
      dataSearchGoals: SearchGoalsResolve,
      dataSalesByState: SalesByStateResolve,
      dataNewInterestedPartners: LoadingNewInterestedPartnersResolve,
      dataFeedbackPercent: LoadingFeedbackPercentResolve,
      dataBestPartners: LoadingBestPartnersResolve,
      dataWorstPartners: LoadingWorstPartnersResolve,
      dataSalesInsurance: LoadingSalesInsuranceResolve
    },
    loadChildren: () =>
      import('./home-comercial/home-comercial.module').then(
        m => m.HomeComercialModule
      )
  },
  {
    path: 'filterStates',
    resolve: {
      uf: LoadingUfResolve,
      cidade: LoadingCidadeResolve,
      tipoSeguro: LoadingInsuranceResolve
    },
    loadChildren: () =>
      import('app/shared/compare-states/compare-states.module').then(
        m => m.CompareStateModule
      )
  },
  {
    path: 'interested-partnerns',
    resolve: {
      values: ComercialInterestedPartnersResolve
    },
    loadChildren: () =>
      import('./interested-partners/interested-partners.component.module').then(
        m => m.IntrestedPatersModule
      )
  },
  {
    path: 'interested-sales',
    resolve: {
      values: ComercialSalesPartnersResolve
    },
    loadChildren: () =>
      import('./sales-partnerns/sales-partnerns.module').then(
        m => m.SalesPatersModule
      )
  },
  {
    path: 'trainings',
    loadChildren: () =>
      import('app/shared/trainings/trainings.module').then(
        m => m.TrainingsnModule
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
    path: 'sales-arguments',
    loadChildren: () =>
      import('./sales-arguments/sales-arguments.module').then(
        m => m.SalesArgumentsModule
      )
  },
  {
    path: 'new-goals',
    loadChildren: () =>
      import('./new-goals/new-goals.module').then(m => m.NewGoalsModule)
  },
  {
    path: 'new-campaign',
    loadChildren: () =>
      import('./new-campaign/new-campaign.module').then(
        m => m.NewCampaignModule
      )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    resolve: {
      filterStatus: FilterStatusResolve,
      filterCategory: FilterCategoryResolve,
      uf: LoadingUfResolve,
      cidade: LoadingCidadeResolve
    }
  },
  {
    path: 'filter',
    loadChildren: () =>
      import('app/shared/filter/filter.module').then(m => m.FilterModule)
  },
  {
    path: 'editUser',
    loadChildren: () =>
      import('../../shared/edit-user/edit-user.module').then(
        m => m.EditUserModule
      ),
    resolve: {
      uf: LoadingUfResolve
    }
  }
];
