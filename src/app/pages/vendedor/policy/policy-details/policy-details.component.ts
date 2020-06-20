import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'app/service/policy.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {
  insurance: any;
  product: any = [];
  consumer: any = [];
  email: any
  constructor(
    public api: PolicyService,
    public message: ToastrService,
  public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.email = this.activatedRoute.snapshot.data.email.message
    this.insurance = this.activatedRoute.snapshot.data.details.insurance
    this.product = this.activatedRoute.snapshot.data.details.product
    this.consumer = this.activatedRoute.snapshot.data.details.consumer
  }

  print() {
    window.print();
  }

  format = value => Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

}
