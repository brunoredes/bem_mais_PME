import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeCardModel } from 'app/models/home-card.model';

@Component({
  templateUrl: './corretor-home.component.html',
  styleUrls: ['./corretor-home.component.scss']
})
export class CorretorHomeComponent implements OnInit {

  marketCards: Array<HomeCardModel>;
  linkCards: Array<HomeCardModel>;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const { marketCards, linkCards } = this._activatedRoute.snapshot.data.values;
    this.marketCards = marketCards;
    this.linkCards = linkCards;
  }

}
