import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { AggregatorPartnerReportModel } from 'app/models/aggregator-partner-report.model';
import { AggregatorMyPartnersService } from 'app/service/aggregator-my-partners.service';

declare const $: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = [
    'code',
    'name',
    'document',
    'saleDate',
    'amount',
    'view'
  ];

  partner: any

  dataSource: MatTableDataSource<AggregatorPartnerReportModel>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  partnerName: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _myPartnersServices: AggregatorMyPartnersService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const partnerId = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    this.partnerName = this._activatedRoute.snapshot.queryParamMap.get('partnerName');
    this._myPartnersServices
      .getReportByPartnerId$(partnerId)
      .subscribe(report => {
        this.dataSource = new MatTableDataSource(report);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}
