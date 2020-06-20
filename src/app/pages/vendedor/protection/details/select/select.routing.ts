import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';

const routes: Routes = [
    {
        path: '',
        component: SelectComponent,
        data:{
            title:"vend-protection-details-select-selecioneproduto"
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectRoutingModule { }
