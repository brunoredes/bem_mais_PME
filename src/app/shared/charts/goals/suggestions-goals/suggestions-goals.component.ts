import { Component, OnInit } from '@angular/core';
import { DashGoalsService } from 'app/service/dash-goals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestions-goals',
  templateUrl: './suggestions-goals.component.html',
  styleUrls: ['./suggestions-goals.component.scss']
})
export class SuggestionsGoalsComponent implements OnInit {
  public suggestionsGoals: any = []
  constructor(public activaredRoute: ActivatedRoute ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.suggestionsGoals = this.activaredRoute.snapshot.data.suggestionsGoals
  }

  format = value => Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

}
