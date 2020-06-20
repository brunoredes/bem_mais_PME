import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'app/core/security/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { LoginoneComponent } from './loginone/loginone.component';
import { RegisterComponent } from './register/register.component';
import { SessionRoutes } from './session.routing';
import { NgxMaskModule, MaskDirective } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxMaskModule
  ],
  declarations: [RegisterComponent, LoginoneComponent],
  providers: [AuthService]
})
export class SessionDemoModule {}
