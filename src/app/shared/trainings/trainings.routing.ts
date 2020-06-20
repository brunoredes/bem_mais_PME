import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrainingsComponent } from './trainings.component';
import { MaterialComponent } from './material/material.component';
import { NewTrainingsComponent } from './new-trainings/new-trainings.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { TrainingsResolve } from 'app/resolves/trainings.resolve';
import { ComboKindMaterialResolve } from 'app/resolves/comboKindMaterial.resolve';
import { ComboPartnersResolve } from 'app/resolves/comboPartners.resolve';
import { StatusTrainingsResolve } from 'app/resolves/statusTrainings.resolve';
import { AccessForRegionResolve } from 'app/resolves/accessForRegion.resolve';
import { VendorsFinishResolve } from 'app/resolves/vendorsFinish.resolve';
import { MostAccessResolve } from 'app/resolves/mostAccess.resolve';
import { SummaryTrainingsResolve } from 'app/resolves/summaryTrainings.resolve';


const routes: Routes = [
    {
        path: '',
        component: TrainingsComponent,
        children: [
            { path: '', redirectTo: 'material', pathMatch: 'full' },
            {
                path: 'material',
                component: MaterialComponent,
                resolve: {
                    trainings: TrainingsResolve,
                    statusDash: StatusTrainingsResolve,
                    regionDash: AccessForRegionResolve,
                    vendedorFinish: VendorsFinishResolve,
                    mostAcess: MostAccessResolve,
                    summary: SummaryTrainingsResolve,
                    comboKind: ComboKindMaterialResolve,
                    comboPartners: ComboPartnersResolve,
                },
                data: {
                    title: 'TStitleTrainingsMaterial'
                }
            },
            {
                path: 'new-trainings',
                component: NewTrainingsComponent,
                resolve: {
                    trainings: TrainingsResolve,
                    statusDash: StatusTrainingsResolve,
                    regionDash: AccessForRegionResolve,
                    vendedorFinish: VendorsFinishResolve,
                    mostAcess: MostAccessResolve,
                    summary: SummaryTrainingsResolve,
                    comboKind: ComboKindMaterialResolve,
                    comboPartners: ComboPartnersResolve,
                },
                data: {
                    title: 'TStitleTrainingsNovoTreina'
                }
            },
            {
                path: 'statistic',
                component: EstatisticaComponent,
                resolve: {
                    trainings: TrainingsResolve,
                    statusDash: StatusTrainingsResolve,
                    regionDash: AccessForRegionResolve,
                    vendedorFinish: VendorsFinishResolve,
                    mostAcess: MostAccessResolve,
                    summary: SummaryTrainingsResolve,
                    comboKind: ComboKindMaterialResolve,
                    comboPartners: ComboPartnersResolve,
                },
                data: {
                    title: 'TStitleTrainingsEstatistica'
                }
            }

        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingsRoutingModule { }

