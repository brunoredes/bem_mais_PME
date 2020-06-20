import { Component, OnInit } from '@angular/core';
import { ComercialCampaign } from 'app/models/comercial-new-campaign-form.model';
import { ComercialCampaignService } from 'app/service/comercial-campaign.service';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {

  newCampaign = false

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; }

}
