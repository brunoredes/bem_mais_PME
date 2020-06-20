import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArgumentSalesModel } from 'app/models/argument-sales.model';
import { ArgumentSalesService } from 'app/service/argument-sales.service';
import { InsuranceListModel } from 'app/models/insurance-list.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-new-arguments',
  templateUrl: './form-new-arguments.component.html',
  styleUrls: ['./form-new-arguments.component.scss']
})
export class FormNewArgumentsComponent implements OnInit, AfterContentInit {

  newArgumentForm: FormGroup;
  insuranceList: InsuranceListModel[];

  @Input('argument-selected')
  argumentSelected: ArgumentSalesModel;

  @Input('view')
  onlyView: boolean;

  @Output('show-list')
  showList: EventEmitter<void> = new EventEmitter();

  constructor(
    private _fb: FormBuilder,
    private _argumentSalesService: ArgumentSalesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.getListInsurance();
    this.createForm();
  }

  createForm() {
    this.newArgumentForm = this._fb.group({
      title: ['', Validators.required],
      insurance: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  submit() {
    this._argumentSalesService.sendArgument(this.newArgumentForm.value).subscribe(() => {this.goBack()})
  }

  goBack() {
    history.back()
  }

  ngAfterContentInit() {
    if (this.argumentSelected) {
      this.newArgumentForm.patchValue(this.argumentSelected);
      if (this.onlyView) {this.newArgumentForm.disable(); }
    }
  }

  formIsInvalid() {
    return this.newArgumentForm.invalid;
  }

  getListInsurance() {
    this.insuranceList = this.activatedRoute.snapshot.data.insuranceList;
  }

}
