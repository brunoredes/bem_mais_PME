import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeCardModel } from 'app/models/home-card.model';
import { BestWeekModel } from 'app/models/bestWeek.model';

@Component({
  templateUrl: './gerente-home.component.html',
  styleUrls: ['./gerente-home.component.scss']
})
export class GerenteHomeComponent implements OnInit {

  marketCards: Array<HomeCardModel>;
  linkCards: Array<HomeCardModel>;
  bestsOfTheWeek: Array<BestWeekModel>;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const { marketCards, linkCards, bestsOfTheWeek } = this._activatedRoute.snapshot.data.values;
    this.marketCards = marketCards;
    this.linkCards = linkCards;
    this.bestsOfTheWeek = bestsOfTheWeek;
    this._createProgressBar();
  }


  private _createProgressBar() {
    setTimeout(() => {
      for (let i = 0; i < this.bestsOfTheWeek.length; i++) {
        const element = this.bestsOfTheWeek[i].id;
        const sales = this.bestsOfTheWeek[i].percent;
        const itemSales = document.getElementById(`goal${element}`);
        itemSales.style.width = `${sales}%`;
      }
    }, .1);
  }
}
