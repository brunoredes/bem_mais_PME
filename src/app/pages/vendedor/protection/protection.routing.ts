import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProtectionComponent } from './protection.component';

const routes: Routes = [
    {
        path: '',
        component: ProtectionComponent,
        data: {
            title: 'vend-protection-selecioneseguro'
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProtectionRoutingModule { }

