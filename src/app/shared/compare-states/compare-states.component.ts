import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StateModel } from 'app/models/state.model';
import { HomeComercialService } from '../../service/home-comercial.service';
import { CityModel } from 'app/models/city.model';
import { InsuranceListModel } from 'app/models/insurance-list.model';
import { FormControl } from '@angular/forms';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'app/helpers/utils';
import { UfService } from 'app/service/uf.service';

declare var $;

@Component({
  selector: 'app-compare-states',
  templateUrl: './compare-states.component.html',
  styleUrls: ['./compare-states.component.scss']
})
export class CompareStatesComponent implements OnInit {

  data = [
    {
      'revenda': 'Revenda 1',
      'uf': 'SP',
      'cidade': 'Sao Paulo',
      'seguro': 'Roubo e Furto',
      'totalVendas': 'R$ 55.000,00',
      'vendasSeguro': {
        'total': '100',
        'detalhe': [{ 'seguro': 'Roubo e Furto', 'valor': '50' },
        { 'seguro': 'Auto', 'valor': '50' }]
      },
      'percent': '70'
    },
    {
      'revenda': 'Revenda 6',
      'uf': 'SP',
      'cidade': 'Sao Paulo',
      'seguro': 'Roubo e Furto',
      'totalVendas': 'R$ 65.000,00',
      'vendasSeguro': {
        'total': '150',
        'detalhe': [{ 'seguro': 'Roubo e Furto', 'valor': '80' },
        { 'seguro': 'Auto', 'valor': '70' }]
      },
      'percent': '70'
    },
    {
      'revenda': 'Revenda 5',
      'uf': 'AC',
      'cidade': 'Rio Branco',
      'seguro': 'Roubo e Furto',
      'totalVendas': 'R$ 20.000,00',
      'percent': '20'
    },
    {
      'revenda': 'Revenda 2',
      'uf': 'AC',
      'cidade': 'Rio Branco',
      'seguro': 'Roubo e Furto',
      'totalVendas': 'R$ 20.000,00',
      'percent': '20'
    },
    {
      'revenda': 'Revenda 3',
      'uf': 'AL',
      'cidade': 'Maceio',
      'seguro': 'Roubo e Furto',
      'totalVendas': 'R$ 30.000,00',
      'percent': '45'
    },
    {
      'revenda': 'Revenda 4',
      'uf': 'MG',
      'cidade': 'Belo Horizonte',
      'seguro': 'Roubo e Furto',
      'totalVendas': 'R$ 45.000,00',
      'percent': '60'
    }
  ]

  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  toppingsUf = new FormControl();
  toppingsCity = new FormControl();
  toppingsInsurance = new FormControl();
  listDeleteFilter = [];

  state: StateModel[];
  city: any[];
  insurance: InsuranceListModel[];
  resale: any[] = [];

  selectedUf: any[] = [];
  selectedCity: any[] = [];
  selectedInsurance: InsuranceListModel[] = [];
  selectedResale: any[] = [];
  oldSelectedResale: any[] = [];

  resaleRemove: number;
  modalComparar: string;
  modalComparar2: string;

  chart1: Chart;
  chart2: Chart;
  chart3: Chart;

  conteudoPadrao = false;
  consulta = true;
  mobile = false;

  constructor(
    private _apiHomeComercial: HomeComercialService,
    public loading: LoadingService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private ufService: UfService,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    window.addEventListener('resize', () => {
      this.comparar();
    })

    this.loadingState();
    // this.loadingCity();
    this.loadingInsurance();
    this.comparar();
  }

  loadingState() {
    this.state = this.activatedRoute.snapshot.data.uf
  }

  // loadingCity() {
  //   this.city = this.activatedRoute.snapshot.data.cidade
  // }

  loadingInsurance() {
    this.insurance = this.activatedRoute.snapshot.data.tipoSeguro
  }

  comparar() {
    this.conteudoPadrao = false;
    if (screen.width < 768) {
      this.mobile = true;
      this.consulta = false;
    } else {
      this.mobile = false;
      this.consulta = true;
    }

    setTimeout(() => {
      let data = [0, 1];
      let data2 = [0, 1];
      let data3 = [0, 1];

      const revenda: any = document.getElementById(`chart1`);
      const revenda2: any = document.getElementById(`chart2`);
      const revenda3: any = document.getElementById(`chart3`);
      const ctx = revenda.getContext('2d');
      const ctx2 = revenda2.getContext('2d');
      const ctx3 = revenda3.getContext('2d');

      if (this.selectedResale[0]) {
        data = [this.selectedResale[0].percent, 100 - this.selectedResale[0].percent]
      };

      if (this.selectedResale[1]) {
        data2 = [this.selectedResale[1].percent, 100 - this.selectedResale[1].percent]
      };

      if (this.selectedResale[2]) {
        data3 = [this.selectedResale[2].percent, 100 - this.selectedResale[2].percent]
      };

      if (this.chart1) {
        this.chart1.destroy();
      };

      if (this.chart2) {
        this.chart2.destroy();
      };

      if (this.chart3) {
        this.chart3.destroy();
      };

      this.chart1 = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(0, 90, 171, 1)',
              'rgba(0, 0, 0, 0.1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          cutoutPercentage: 40,
          legend: {
            display: true,
            align: 'center',
            labels: { fontColor: 'rgb(255, 99, 132)', }
          },
          tooltips: {
            enabled: false
          }
        }
      });

      this.chart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: data2,
            backgroundColor: [
              'rgba(0, 90, 171, 1)',
              'rgba(0, 0, 0, 0.1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          cutoutPercentage: 40,
          legend: {
            display: true,
            align: 'center',
            labels: { fontColor: 'rgb(255, 99, 132)', }
          },
          tooltips: {
            enabled: false
          }
        }
      });

      this.chart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: data3,
            backgroundColor: [
              'rgba(0, 90, 171, 1)',
              'rgba(0, 0, 0, 0.1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          cutoutPercentage: 40,
          legend: {
            display: true,
            align: 'center',
            labels: { fontColor: 'rgb(255, 99, 132)', }
          },
          tooltips: {
            enabled: false
          }
        }
      });
    }, 10);

  }

  checkSelectedResale() {
    this.modalComparar = '';
    if (this.selectedResale && this.selectedResale.length > 1) {
      this.comparar();
      this.modalComparar = 'modal';
    } else {
      this.toastr.error('Selecione pelo menos duas revendas para comparar.');
    }
  }

  addTopping(field: string, value: any) {

    let toppingsSelected = []
    if (field === 'uf') {
      toppingsSelected = this.toppingsUf.value;
      if (this.selectedUf.includes(value)) {
        this.removeSelected('uf', this.selectedUf.indexOf(value));
      } else {
        if (this.toppingsUf.value.length <= 3) {
          this.selectedUf.push(value);
          this.loadingResale();
        } else {
          toppingsSelected.splice(toppingsSelected.indexOf(value), 1);
          this.toppingsUf.setValue(toppingsSelected);
          this.toastr.error(this._translate.getComercialToastrState());
        }
      }
    } else if (field === 'city') {
      toppingsSelected = this.toppingsCity.value;
      // if (this.selectedCity.includes(value)) {
      if (this.selectedCity.some(item => item.city === value.city)) {
        this.removeSelected('city', this.selectedCity.indexOf(value));
      } else {
        if (this.toppingsCity.value.length <= 3) {
          this.selectedCity.push(value);
          this.loadingResale();
        } else {
          toppingsSelected.splice(toppingsSelected.indexOf(value.city), 1);
          this.toppingsCity.setValue(toppingsSelected);
          this.toastr.error(this._translate.getComercialToastrCity());
        }
      }
    } else if (field === 'insurance') {
      toppingsSelected = this.toppingsInsurance.value;
      if (this.selectedInsurance.includes(value)) {
        this.removeSelected('insurance', this.selectedInsurance.indexOf(value));
      } else {
        if (this.toppingsInsurance.value.length <= 1) {
          this.selectedInsurance.push(value);
          this.loadingResale();
        } else {
          toppingsSelected.splice(toppingsSelected.indexOf(value.id), 1);
          this.toppingsInsurance.setValue(toppingsSelected);
          this.toastr.error(this._translate.getComercialToastrInsur());
        }
      }
    }
  }

  removeSelected(field: string, index: number) {

    let toppingsSelected = []

    if (field === 'uf') {
      let i = 0;
      while (i < this.selectedCity.length) {
        const item = this.selectedCity[i];
        if (item.state === this.selectedUf[index]) {
          this.selectedCity.splice(i, 1);
        } else {
          i += 1;
        }
      };

      this.selectedUf.splice(index, 1);
      this.change();

      this.selectedCity.forEach((value) => {
        toppingsSelected.push(value.city);
      });
      this.toppingsCity.setValue(toppingsSelected);

      toppingsSelected = []
      this.selectedUf.forEach((value) => {
        toppingsSelected.push(value);
      });
      this.toppingsUf.setValue(toppingsSelected);

      this.loadingResale();
    } else if (field === 'city') {
      this.selectedCity.splice(index, 1);
      this.selectedCity.forEach((value) => {
        toppingsSelected.push(value.city);
      });
      this.toppingsCity.setValue(toppingsSelected);
      this.loadingResale();
    } else if (field === 'insurance') {
      this.selectedInsurance.splice(index, 1);
      this.selectedInsurance.forEach((value) => {
        toppingsSelected.push(value.id);
      });
      this.toppingsInsurance.setValue(toppingsSelected);
      this.loadingResale();
    }
  }

  loadingResale() {

    if (this.selectedUf.length > 0 || this.selectedCity.length > 0 || this.selectedInsurance.length > 0) {
      let resale = [];
      let i = 0;

      this.loading.onLoadingResale();

      this.resale = [];

      this.selectedUf.forEach((value) => {
        resale = this.data.filter((record) => {
          return record.uf === value;
        });

        if (resale.length > 0) {
          resale.forEach((value) => {
            this.resale.push(value);
          });
        };
      });

      this.listDeleteFilter = [];
      this.selectedCity.forEach((value) => {
        i = 0;
        while (i < this.resale.length) {
          const item = this.resale[i];

          if (!this.listDeleteFilter[i]) {
            this.listDeleteFilter.push({ 'delete': 'Y' })
          }

          if (value.city.toLowerCase() !== item.cidade.toLowerCase()) {
            i += 1;
          } else {
            this.listDeleteFilter[i]['delete'] = 'N'
            i += 1;
          }
        };
      });

      this.deleteArray();

      this.listDeleteFilter = [];
      this.selectedInsurance.forEach((value) => {
        i = 0;
        while (i < this.resale.length) {
          const item = this.resale[i];

          if (!this.listDeleteFilter[i]) {
            this.listDeleteFilter.push({ 'delete': 'Y' })
          }

          if (value.name !== item.seguro) {
            i += 1;
          } else {
            this.listDeleteFilter[i]['delete'] = 'N'
            i += 1;
          }
        };
      });
      this.deleteArray();

      this.resale.forEach((value) => {
        if (this.selectedResale.includes(value)) {
          value['checked'] = true;
        } else {
          value['checked'] = false;
        }
      });

      this.resale.sort(function (a, b) {
        return a.checked > b.checked ? -1 : a.checked < b.checked ? 1 : 0;
      });

      this.loading.offLoadingResale();
    } else {
      this.loading.onLoadingResale();
      this.resale = [];
      this.loading.offLoadingResale();
    }
  }

  deleteArray() {
    this.listDeleteFilter.forEach(() => {
      this.listDeleteFilter.forEach(() => {
        let i = 0;
        while (i < this.resale.length) {
          const item = this.listDeleteFilter[i];
          if (item['delete'] === 'Y') {
            this.resale.splice(i, 1);
            this.listDeleteFilter.splice(i, 1);
          } else {
            i += 1;
          }
        };
      });
    });
  }

  addResale(resale: any, index: number) {
    if (this.selectedResale.includes(resale)) {
      this.selectedResale.splice(this.selectedResale.indexOf(resale), 1);
    } else {
      if (this.selectedResale.length <= 2) {
        this.selectedResale.push(resale);
      }
    }
  }

  setResaleToRemove(index: number) {
    this.resaleRemove = index;
  }

  removeResale() {

    this.modalComparar2 = '';
    this.selectedResale.splice(this.resaleRemove, 1);
    this.resaleRemove = undefined;

    if (this.selectedResale.length < 2) {
      this.modalComparar2 = 'modal';
      this.loadingResale();
    } else {
      this.comparar();
    }
  }

  cancel() {
    this.selectedResale = this.oldSelectedResale;
    this.comparar();
    this.modalComparar = 'modal';
  }

  setOldSelectedResale() {
    this.oldSelectedResale = [];
    this.selectedResale.forEach((value) => {
      this.oldSelectedResale.push(value);
    });
  }

  toggleIcon(id: string) {
    if (document.getElementById(id).classList.contains('glyphicon-plus')) {
      document.getElementById(id).classList.remove('glyphicon-plus');
      document.getElementById(id).classList.add('glyphicon-minus');
    } else {
      document.getElementById(id).classList.remove('glyphicon-minus');
      document.getElementById(id).classList.add('glyphicon-plus');
    }
  }

  getValue(insurance: string, index: number, field: string) {
    if (field === 'VendasSeguro') {
      if (this.selectedResale[index] && this.selectedResale[index].vendasSeguro) {
        const filtrados = this.selectedResale[index].vendasSeguro.detalhe.filter((value) => {
          return value.seguro === insurance
        });
        return filtrados[0]['valor'];
      } else {
        return '-';
      }
    }
  }

  getTotal(field: string, index: number) {
    if (field === 'VendasSeguro') {
      if (this.selectedResale[index] && this.selectedResale[index].vendasSeguro) {
        return this.selectedResale[index].vendasSeguro.total;
      } else {
        return '-';
      }
    }
  }

  containerExport() {
    if (document.getElementById('containerExport').style.display === 'block') {
      document.getElementById('containerExport').style.display = 'none';
      document.getElementById('iconExport').classList.remove('fa-chevron-up');
      document.getElementById('iconExport').classList.add('fa-chevron-down');
    } else {
      document.getElementById('containerExport').style.display = 'block';
      document.getElementById('iconExport').classList.remove('fa-chevron-down');
      document.getElementById('iconExport').classList.add('fa-chevron-up');
    }
  }

  change() {
    let count = 0;
    this.city = [];
    this.selectedUf.forEach((value) => {
      this.ufService.getCidade(value).subscribe(res => {
        res.forEach((state) => {
          this.city.push({ 'state': value, 'city': state.substr(8) })
        })
        // this.city = this.city.concat(res);
        count++;
        if (count === this.selectedUf.length) {
          this.city.sort();
        }
      })
    });
  }

}
