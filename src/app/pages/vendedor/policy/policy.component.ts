import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { PolicyService } from 'app/service/policy.service';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

declare var $;

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  checkboxes: any;

  color = {
    'Platinum': 'primary',
    'Gold': 'success',
    'Silver': 'warning'
  }

  displayedColumns: string[] = [
    'code',
    'order',
    'consumerName',
    'cpf',
    'vendor',
    'status',
    'visualizar',
    'editar',
    'emailIcon',
    'remover'
  ];
  columnsTitle = ['Código', 'Ordem', 'Nome', 'CPF', 'Vendedor', 'Status'];

  dataSource: MatTableDataSource<any>;

  result: Boolean = false;
  details: Boolean = false;
  public policy: any = [];
  email: any;

  public order: number;
  public cpf: number;
  public imei: number;
  public consumerName: string;
  public vendor: string;
  public salesNotFound = false;
  public produto: string;
  status: any
  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  public imeiM = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];

  public cpfM = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    public api: PolicyService,
    public loading: LoadingService,
    public activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.policy = this.activatedRoute.snapshot.data.policy.policies
    this.email = this.activatedRoute.snapshot.data.email.message


    for (let i = 0; i < this.policy.length; i++) {
      const element = this.policy[i].status;
      if (element === 1) {
        this.status = 'Ativo'
        this.policy[i].status = 'Ativo'
      }
    }

    this.dataSource = new MatTableDataSource(this.policy);

    const rs = document.readyState;
    switch (rs) {
      case 'interactive':
      case 'complete':
        this.loading.offLoadingMenuComponents();
        break;
    }
  }

  filter() {

    this.salesNotFound = false;
    this.policy = [];
    this.loading.onLoadingSearchSales();

    setTimeout(() => {
      this.policy = this.activatedRoute.snapshot.data.policy.policies

      if (this.order) {
        this.policy = this.policy.filter((record) => {
          return record.order === this.order;
        });
      }

      if (this.cpf) {
        this.policy = this.policy.filter((record) => {
          return record.cpf === this.cpf;
        });
      }

      if (this.imei) {
        this.policy = this.policy.filter((record) => {
          return record.imei === this.imei;
        });
      }

      if (this.consumerName) {
        this.policy = this.policy.filter((record) => {
          return record.consumerName === this.consumerName;
        });
      }

      if (this.vendor) {
        this.policy = this.policy.filter((record) => {
          return record.vendor === this.vendor;
        });
      }

      this.dataSource = new MatTableDataSource(this.policy);

      if (this.policy.length === 0) {
        this.salesNotFound = true;
      }

    }, 800);

    this.loading.offLoadingSearchSales();

  }

  emailEvent(event: any) {
    $('#modalEmail').modal('show');
  }

  viewEvent(event: any) {
    this._router.navigate(['/private/vendedor/policy/details']);
  }

  updateEvent(event: any) {

  }

  deleteEvent(event: any) {

  }

}
