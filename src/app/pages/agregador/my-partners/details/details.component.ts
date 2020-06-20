import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AggregatorMyPartnersService } from 'app/service/aggregator-my-partners.service';
import { DetailsPolicyModel } from 'app/models/detailsPolicy.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  details: DetailsPolicyModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _myPartnersServices: AggregatorMyPartnersService
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const reportId = Number.parseInt(
    this._activatedRoute.snapshot.paramMap.get('id'), 10
);
    this._myPartnersServices
      .getDetailsByReportId$(reportId)
      .subscribe(details => {
        this.details = details;
      });
  }

  print() {
    window.print();
  }

  get insurance() {
    return this.details.insurance;
  }
  get product() {
    return this.details.product;
  }
  get consumer() {
    return this.details.consumer;
  }

}
