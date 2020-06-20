import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NivelService } from 'app/service/nivel.service';
import { AuthService } from 'app/core/security/services/auth.service';

declare var $;

@Component({
   selector: 'app-loginone-session',
   templateUrl: './loginone-component.html',
   styleUrls: ['./loginone-component.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class LoginoneComponent {

   username: string;
   password: string;
   name: string;

   constructor(
      private router: Router,
      private authService: AuthService,
      public translate: TranslateService,
      public nivel: NivelService
   ) { }

   // when email and password is correct, user logged in.
   logIn(value) {
      const stayLogged = !document.getElementById('switch-nofications')['checked'];
      this.authService.login(value, stayLogged);
   }

   Mudarestado(el) {
      const display = document.getElementById(el).style.display;
      if (display === 'none') {
         document.getElementById(el).style.display = 'block';
      }
      else { document.getElementById(el).style.display = 'none'; }
   }

   ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
      document.getElementById('red-width').style.width = '100%'
      document.getElementById('red').style.margin = '0'
   }
}
