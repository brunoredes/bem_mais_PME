import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CampaignCorretorService } from 'app/service/campaign-corretor.service';
import { ComercialFilterCampaign } from 'app/models/comercial-filter-campaign.model';
import { ComercialCampaign } from 'app/models/comercial-new-campaign-form.model';
import { ProfileListModel } from 'app/models/profile-list.model';
import { DateAdapter } from '@angular/material/core';

declare const $: any;
@Component({
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<ComercialCampaign>;
  displayedColumns = [
    'code',
    'profile',
    'title',
    'description',
    'startDate',
    'endDate',
    'insurance',
    'goalDescription',
    'visualizar',
    'editar',
    'remover'
  ];
  columnsTitle = ['Código', 'Perfil', 'Título', 'Descrição', 'Data Início', 'Data Fim', 'Seguro', 'Meta Atribuida'];

  formFilter: FormGroup;
  profileList: ProfileListModel[] = [];
  recordDelete: ComercialCampaign;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _goalService: CampaignCorretorService,
    private _router: Router,
    private _adapter: DateAdapter<any>
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    })

    $('#filter-campaign').on('click', () => {
      $('.filter-campaign').fadeToggle('fast');
    });

    this._adapter.setLocale('br');

    this._buildFilterForm();

    const {
      campaigns,
      profileList
    } = this._activatedRoute.parent.snapshot.data.values;
    this.profileList = profileList;
    this.dataSource = new MatTableDataSource(campaigns);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  findCampaign() {
    const filter = this._filterValue;
    $('.filter-campaign').fadeToggle('fast');
    this._goalService.getCampaigns$(filter).subscribe(campaigns => {
      this.dataSource = new MatTableDataSource(campaigns);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  private _buildFilterForm() {
    this.formFilter = this._formBuilder.group({
      code: [''],
      profile: [''],
      name: [''],
      validityStartDate: [''],
      validityEndDate: ['']
    });
  }

  get _filterValue(): ComercialFilterCampaign {
    return this.formFilter.value;
  }

  viewRecord(record: ComercialCampaign) {
    this._router.navigate(['private/corretor/campaign/', record.id, 'view'], { queryParams: { disableForm: true } });
  }

  updateRecord(record: ComercialCampaign) {
    this._router.navigate(['private/corretor/campaign/', record.id, 'update']);
  }

  setRecordDelete(recordDelete: ComercialCampaign) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
