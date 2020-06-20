import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  AfterContentInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComercialCampaign } from 'app/models/comercial-new-campaign-form.model';
import { Location } from '@angular/common';
import { ComercialCampaignService } from 'app/service/comercial-campaign.service';
import { EventEmitter } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ProfileListModel } from 'app/models/profile-list.model';
import { InsuranceListModel } from 'app/models/insurance-list.model';
import { GoalsListModel } from 'app/models/goals-list.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit {

  profileList: ProfileListModel[] = [];
  insuranceList: InsuranceListModel[] = [];
  goalsList: GoalsListModel[] = [];
  formCampaign: FormGroup
  onlyView: Boolean = true
  _fileReader: FileReader;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _service: ComercialCampaignService
  ) { }

  ngOnInit() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    this.getListGoals()
    this.getListInsurance()
    this.getListProfile()
    this.createForm()

    this._fileReader = new FileReader();
    this._fileReader.addEventListener('load', (event: any) => {
      this._imageControl.setValue(event.target.result);
    })

    const goalId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );    
    if (goalId) {
      this._service.getCampaignById$(goalId).subscribe(value => {      
        this.formCampaign.patchValue(value)        
      });
      if (this._activatedRoute.snapshot.queryParams.disableForm === 'true') {
        this.formCampaign.disable()
        this.onlyView = false
      } else {
        this.formCampaign.enable()
        this.onlyView = true
      }
    } else {
      this.formCampaign.enable()
    }
  }

  formatDate = value => new Intl.DateTimeFormat('pt-BR').format(value)

  createForm = () => {
    this.formCampaign = this.fb.group({
      code: ['', [Validators.required]],
      title: ['', [Validators.required]],
      insurance: ['', [Validators.required]],
      profile: ['', [Validators.required]],
      goal: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      image: ['', [Validators.required]],
      goalDescription: [''],
    })
  }

  submit = () => {
    this._service.sendCampaign(this.campaign).subscribe(() => this.goBack())
  }

  goBack = () => {
    history.back()
  }

  formIsInvalid() {
    return this.formCampaign.invalid;
  }

  changeImageInput =event => {
    const file = event.target.files[0];
    this._fileReader.readAsDataURL(file);
    this.formCampaign.get('imageName').setValue(file.name);
  }

  get imageName() {
    return this.formCampaign.get('image').value || '';
  }

  get campaign(): ComercialCampaign {
    return this.formCampaign.value;
  }

  get _imageControl() {
    return this.formCampaign.get('image');
  }

  getListProfile = () => {
    this.profileList = this._activatedRoute.snapshot.data.profileListCampaign;
  }

  getListInsurance = () => {
    this.insuranceList = this._activatedRoute.snapshot.data.insuranceListCampaign;
  }

  getListGoals = () => {
    this.goalsList = this._activatedRoute.snapshot.data.goalsListCampaign;
  }

}
