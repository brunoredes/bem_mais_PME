import { Component, OnInit, Input } from '@angular/core';
import { LoadingService } from 'app/service/loading.service';
import { NivelService } from 'app/service/nivel.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Router } from '@angular/router';
import { LocalStorageService } from 'app/service/localstorage.service';
import { IMenu } from 'app/core/interfaces/menu.interface';
import { AuthService } from 'app/core/security/services/auth.service';
import { RouteUtilService } from 'app/core/security/services/route-util.service';
import { TranslateService } from '@ngx-translate/core';

declare var $;
@Component({
  selector: 'bem-mais-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('config-menu')
  itemsMenu: Array<IMenu>;

  status: any;
  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  iconMudaEn = ''
  iconMudaEs = ''
  iconMudaPt = ''
  constructor(
    private authService: AuthService,
    public loading: LoadingService,
    private _router: Router,
    private nivel: NivelService,
    private _routeUtil: RouteUtilService,
    private translate: TranslateService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.language(localStorage.getItem('lang') || this.translate.getBrowserLang())
    this.responsivo();
    this.resizeItens();
    document.getElementById('red').style.margin = '0 1%';

    document.getElementById('sidebarCollapse').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('active');
      document.getElementById('item').classList.toggle('scrollIcon');
      document.getElementById('red-width').style.animation = 'coluna .7s';
      document.getElementById('lang').classList.toggle('d-nonee')


      if (document.getElementById('sidebar').classList.contains('active')) {
        document.getElementById('red-width').style.animation = 'coluna2 .7s';
      }

      setTimeout(() => {
        this.responsivo();
      }, 500);
    });

    const menu = document.getElementById('sidebar');
    const item = document.getElementById('item');
    const lang = document.getElementById('lang');

    if (screen.width < 1025) {
      menu.classList.add('active');
      item.classList.add('scrollIcon');
      lang.classList.add('d-nonee');
      setTimeout(() => {
        this.responsivo();
      }, 1000);
    }

    window.addEventListener('resize', () => {
      setTimeout(() => {
        if (screen.width < 1025) {
          menu.classList.add('active');
          item.classList.add('scrollIcon');
          lang.classList.add('d-nonee');

          setTimeout(() => {
            this.responsivo();
          }, 1000);
        } else {
          menu.classList.remove('active');
          item.classList.remove('scrollIcon');
          lang.classList.add('d-none');

          setTimeout(() => {
            this.responsivo();
          }, 500);
        }
      }, 1);
    });

    setTimeout(() => {
      // document.getElementById('red-width').style.width = '100%'
      this.responsivo();
      // this.itemMenu =
      // this.nivel.verificaUrl('vendedor/') ? this.itemsMenu = items : this.itemsMenu = itemsComercial
      if (this.nivel.verificaUrl('vendedor/') === false) {
        document.getElementById('trofeu').classList.add('d-none');
        document.getElementById('retailer').classList.add('d-none');
      } else {
        document.getElementById('trofeu').classList.remove('d-none');
        document.getElementById('retailer').classList.remove('d-none');
      }
    }, 100);

    window.addEventListener('resize', () => {
      this.resizeItens();
    });
  }
  language(lang: string) {
    localStorage.setItem('lang', lang)
    this.translate.use(lang);
    this.iconMudaEn = ''
    this.iconMudaEs = ''
    this.iconMudaPt = ''
    if (lang === 'en') {
      this.iconMudaEn = 'fa fa-circle text-success iconTop d-flex'
    } else if (lang === 'es') {
      this.iconMudaEs = 'fa fa-circle text-success iconTop d-flex'
    } else if (lang === 'pt') {
      this.iconMudaPt = 'fa fa-circle text-success iconTop d-flex'
    }
  }

  resizeItens() {
    setTimeout(() => {
      const item = (document.getElementById('item').style.maxHeight = '260px');

      if (window.screen.width >= 1920) {
        return (document.getElementById('item').style.maxHeight = '100%');
      } else {
        return item;
      }
    }, 500);
  }

  responsivo() {
    const tudo: any = (document.getElementById(
      'red-width'
    ).style.width = `${window.screen.width -
    document.getElementById('sidebar').offsetWidth}`);
    const tela = window.screen.width / 100;
    return (document.getElementById('red-width').style.width = `${tudo /
      tela}%`);
  }

  logout() {
    this.authService.logOut();
  }

  editProfile() {
    this.loading.onLoadingMenuComponents();
    const path = this._routeUtil.getRoutePathByProfileID();
    this._router.navigate(['private', path, 'editUser']);
  }

  get currentUser() {
    return this.authService.currentUser;
  }
}
