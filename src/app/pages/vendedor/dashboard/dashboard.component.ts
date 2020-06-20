import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';
import { UtilService } from '../../../helpers/utils';
import { Router } from '@angular/router';

declare var $
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    vendas = true
    metas = false
    cancelamento = false
    TitleDash = '';
    AbaVendasDash = '';
    AbaMetaDash = '';
    AbaCancelamentosDash = '';

    constructor(private _router: Router, private UtilService: UtilService) { }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        this.TitleDash = this.UtilService.getTitleDash();
        this.AbaVendasDash = this.UtilService.getAbaVendasDash();
        this.AbaMetaDash = this.UtilService.getAbaMetaDash();
        this.AbaCancelamentosDash = this.UtilService.getAbaCancelamentosDash();
    }
    // verifyRoute() {
    //     let paths = this._router.url.split("/");
    //     paths[4] === 'vendas' ?
    //       this.TitleDash = this.UtilService.getAbaVendasDash()
    //       : paths[4] === 'cancelamentos' ?
    //         this.TitleDash = this.UtilService.getAbaCancelamentosDash()
    //         : this.TitleDash = this.UtilService.getAbaMetaDash()
    //   }
}



