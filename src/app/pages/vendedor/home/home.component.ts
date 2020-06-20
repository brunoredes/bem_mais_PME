import { Component, OnInit } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { HomeService } from 'app/service/home.service';
import { LoadingService } from 'app/service/loading.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public intitutional: any = [];
  public market: any = [];
  public bestWeek: any = [];
  url: any

  status: any
  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  constructor(public api: HomeService,
    public loading: LoadingService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // this.loading.offLoadingMenuComponents();
    this.url = 'http://www.zurich.com.br'
    this.intitutional = this.activatedRoute.snapshot.data.institucional
    this.market = this.activatedRoute.snapshot.data.market
    this.bestWeek = this.activatedRoute.snapshot.data.bestweek.vendors
    setTimeout(() => {
      for (let i = 0; i < this.bestWeek.length; i++) {
        const element = this.bestWeek[i].id;
        const sales = this.bestWeek[i].salesPercent;
        const goals = this.bestWeek[i].goalPercent;

        const itemSales = document.getElementById(`sales${element}`)
        itemSales.style.width = `${sales}%`

        const itemGoals = document.getElementById(`goal${element}`)
        itemGoals.style.width = `${goals}%`

        const porcentSales = document.getElementById(`porcentSales${element}`)
        const porcentGoals = document.getElementById(`porcentGoals${element}`)

        if (sales === 100) {
          itemSales.style.backgroundColor = '#62BC00'
          porcentSales.style.backgroundColor = '#62BC00'
          porcentSales.classList.add('item_green')
        }
        if (sales < 50) {
          itemSales.style.backgroundColor = '#ff3636'
          porcentSales.style.backgroundColor = '#ff3636'
          porcentSales.classList.add('item_red')
        }

        if (goals === 100) {
          itemGoals.style.backgroundColor = '#62BC00'
          porcentGoals.style.backgroundColor = '#62BC00'
          porcentGoals.classList.add('item_green')
        }
        if (goals < 50) {
          itemGoals.style.backgroundColor = '#ff3636'
          porcentGoals.style.backgroundColor = '#ff3636'
          porcentGoals.classList.add('item_red')
        }
      }
    }, .1);
    const rs = document.readyState;
    switch (rs) {
      case 'interactive':
      case 'complete':
        this.loading.offLoadingMenuComponents();
        break;
    }
  }
}
