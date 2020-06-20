import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeedbackComponent } from './feedback.component';

const routes: Routes = [
    {
        path: '',
        component: FeedbackComponent,
        data:{
            title:"feedback-title"
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeedbackRoutingModule { }

