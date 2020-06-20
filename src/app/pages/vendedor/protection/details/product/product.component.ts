import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'app/service/insurance.service';
import { CartService } from 'app/service/cart.service';
import { PlanPriceModel } from 'app/models/plan-price.model';

declare var $;

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

    public dataInsurance: any
    selectedProduct: any;
    selectedTab: any;
    plan: PlanPriceModel
    insurancePlanSelected: string

    constructor(
        private _cartService: CartService,
        private insuranceService: InsuranceService
    ) { }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        this.getPlansInsurance();

        $('#thumbs img').click(function () {
            $('#largeImage').attr('src', $(this).attr('src').replace('thumb', 'large'));
            $('#description').html($(this).attr('alt'));
        });

        this.selectedProduct = this._cartService.currentInsurance.productSelected;
        setTimeout(() => {
            if (this.selectedProduct.status === 'Novo') {
                document.getElementById('status-Novo').classList.add('newGreen')
            } else {
                document.getElementById('status-Usado').classList.add('newUsed')
            }
        }, 10);

        if (this._cartService.cart[this._cartService.getIndexToAddProduct()].planPriceSelected) {
            this.insurancePlanSelected = this._cartService.cart[this._cartService.getIndexToAddProduct()].planPriceSelected.planId;
        }
    }

    /***
     * Metodo que retorna as informações dos planos do seguro para ser apresentado
     * no detalhe do produto
     */
    getPlansInsurance() {
        this.insuranceService.dataPlansInsuranceDetails$.subscribe(res => {
            this.dataInsurance = res;
            this.selectedTab = res.details[0];
        })
    }

    changeSelectedTab(item) {
        this.selectedTab = item;
    }

    updateInsurancePlan(item: PlanPriceModel) {
        // let insurance = this._cartService.currentInsurance;
        // insurance.planPriceSelected = item;
        // this._cartService.saveInsuranceInCart(insurance);
        this._cartService.addInsurancePlan(item);
    }

    format = value => {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
}
