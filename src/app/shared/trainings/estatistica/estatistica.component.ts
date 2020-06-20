import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComercialTrainingStatisticMostAccessed } from 'app/models/comercial-training-statistic-most-accessed.model';
import { ComercialTrainingStatisticResume } from 'app/models/comercial-training-statistic-resume.model';
import { ComercialTrainingStatisticStatus } from 'app/models/comercial-training-statistic-status.model';
import { ComercialTrainingStatisticVendor } from 'app/models/comercial-training-statistic-vendor.model';
import { TrainingsService } from 'app/service/trainings.service';
import { Chart } from 'chart.js';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { NivelService } from 'app/service/nivel.service';
declare var $;

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.scss']
})
export class EstatisticaComponent implements OnInit {

  trainings: Array<ComercialTrainingStatisticStatus>;
  vendors: Array<ComercialTrainingStatisticVendor>;
  mostAcess: Array<ComercialTrainingStatisticMostAccessed>;
  summary: Array<ComercialTrainingStatisticResume>;
  regions: Array<any>
  filterForm: FormGroup;
  mockList = [{ id: 1, name: 'Mock' }];

  dateDeTrainingRegion: Date = new Date();
  dateAteTrainingRegion: Date = new Date();

  corretor: any
  constructor(
    private trainingService: TrainingsService,
    private _formBuild: FormBuilder,
    private _adapter: DateAdapter<any>,
    private activatedRoute: ActivatedRoute,
    private nivel: NivelService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        // Esconde a modal do filtro com classe
        $(document).mouseup(function(e) {
          const container = $('.filter-div');
          if (!container.is(e.target) && container.has(e.target).length === 0)
          {
              container.hide();
          }
          // Filter
        }),
    this.nivel.verificaUrl('/corretor') ? this.corretor = false : this.corretor = true

    this._adapter.setLocale('br');
    this._buildFilterForm();
    this.trainings = this.activatedRoute.snapshot.data.statusDash;
    this.vendors = this.activatedRoute.snapshot.data.vendedorFinish;
    this.regions = this.activatedRoute.snapshot.data.regionDash;
    this.mostAcess = this.activatedRoute.snapshot.data.mostAcess;
    this.summary = this.activatedRoute.snapshot.data.summary;

    setTimeout(() => {
      let revenda: any
      let ctx: any
      for (let i = 0; i < this.trainings.length; i++) {
        const element = this.trainings[i].id;
        revenda = document.getElementById(`revenda${element}`);
        ctx = revenda.getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{

              data: [this.trainings[i].percentage, 100 - this.trainings[i].percentage],
              backgroundColor: [
                'rgba(0, 90, 171, 1)',
                'rgba(0, 0, 0, 0.1)',

              ],
              borderWidth: 1,
            }],
          },
          options: {
            cutoutPercentage: 60,
            legend: {
              display: true,
              align: 'center',
              labels: { fontColor: 'rgb(255, 99, 132)', }

            },
            tooltips: {
              enabled: false,
            },
          }
        });
      }
    }, 10);
    // Response vendedor
    for (let i = 0; i < this.vendors.length; i++) {
      const element = this.vendors[i].name
      window.addEventListener('resize', () => {
        if (screen.width < 1024) {

          document.getElementById(`justify${element}`).classList.add('justify')
          document.getElementById(`justifyTrainings${element}`).classList.add('justify')
        } else {

          document.getElementById(`justify${element}`).classList.remove('justify')
          document.getElementById(`justifyTrainings${element}`).classList.remove('justify')
        }
      });
    }

    // Star Ratings

    // inicio star
    let starClicked = false;

    $(function () {

      $('.star').click(function () {

        $(this).children('.selected').addClass('is-animated');
        $(this).children('.selected').addClass('pulse');

        const target = this;

        setTimeout(function () {
          $(target).children('.selected').removeClass('is-animated');
          $(target).children('.selected').removeClass('pulse');
        }, 1000);

        starClicked = true;
      })

      $('.half').click(function () {
        if (starClicked === true) {
          setHalfStarState(this)
        }
        $(this).closest('.rating').find('.js-score').text($(this).data('value'));

        $(this).closest('.rating').data('vote', $(this).data('value'));
        calculateAverage();

      })

      $('.full').click(function () {
        if (starClicked === true) {
          setFullStarState(this)
        }
        $(this).closest('.rating').find('.js-score').text($(this).data('value'));

        $(this).find('js-average').text(parseInt($(this).data('value'), 10));

        $(this).closest('.rating').data('vote', $(this).data('value'));
        calculateAverage();
      })

      $('.half').hover(function () {
        if (starClicked === false) {
          setHalfStarState(this)
        }

      })

      $('.full').hover(function () {
        if (starClicked === false) {
          setFullStarState(this)
        }
      })

    })

    function updateStarState(target) {
      $(target).parent().prevAll().addClass('animate');
      $(target).parent().prevAll().children().addClass('star-colour');

      $(target).parent().nextAll().removeClass('animate');
      $(target).parent().nextAll().children().removeClass('star-colour');
    }

    function setHalfStarState(target) {
      $(target).addClass('star-colour');
      $(target).siblings('.full').removeClass('star-colour');
      updateStarState(target)
    }

    function setFullStarState(target) {
      $(target).addClass('star-colour');
      $(target).parent().addClass('animate');
      $(target).siblings('.half').addClass('star-colour');

      updateStarState(target)
    }

    function calculateAverage() {
      let average = 0

      $('.rating').each(function () {
        average += $(this).data('vote')
      })

      $('.js-average').text((average / $('.rating').length).toFixed(1))
    }

    const canvasVestados: any = document.getElementById('chart2');
    const ctx2 = canvasVestados.getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: this.regions.map(region => region.region),
        datasets: [{
          data: this.regions.map(region => region.amount),
          barThickness: 20,
          backgroundColor: '#1862c6',
          borderColor: '#1862c6',
          pointBackgroundColor: '#1862c6',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#1862c6',
          pointRadius: 1,
          pointHoverRadius: 1,
          borderWidth: 2,

        }]
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {


        },

        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });

    // filtro
    (function () {
      $('#filter-estatistica').on('click', function () {
        $('.filter-estatistica').fadeToggle('fast');
      });

      $('#filter-Exportar-regiao').on('click', function () {
        $('.filter-Exportar-regiao').fadeToggle('fast');
      });

      $('#filter-Exportar').on('click', function () {
        $('.filter-Exportar').fadeToggle('fast');
      });
    })();

    (function () {
      $('#chart-training-region').on('click', function () {
        $('.chart-training-region').fadeToggle('fast');
      });
    })();

  }

  filter() {
    $('.filter-estatistica').fadeOut('fast');
    $('.filter-Exportar').fadeOut('fast');
    $('.filter-Exportar-regiao').fadeOut('fast');
  }

  dateRangeChange() {
    const startDateControl = this.filterForm.get('startDate');
    const endDateControl = this.filterForm.get('endDate');
    if (startDateControl.value > endDateControl.value) {
      endDateControl.setValue(startDateControl.value);
    }
    if (!endDateControl.value) {
      endDateControl.setValue(startDateControl.value);
    }

    if (this.dateDeTrainingRegion > this.dateAteTrainingRegion) {
      this.dateAteTrainingRegion = this.dateDeTrainingRegion;
    }
    if (!this.dateAteTrainingRegion) {
      this.dateAteTrainingRegion = this.dateDeTrainingRegion;
    }
  }

  private _buildFilterForm() {
    this.filterForm = this._formBuild.group({
      startDate: '',
      endDate: '',
      status: '',
      training: '',
      trainingStatus: '',
      trainingManager: '',
      partnerHierarchy: '',
      state: '',
      city: ''
    });
  }

  toggleIcon(id: string) {
    if (document.getElementById(id).classList.contains('fa-chevron-down')) {
      document.getElementById(id).classList.remove('fa-chevron-down');
      document.getElementById(id).classList.add('fa-chevron-up');
    } else {
      document.getElementById(id).classList.remove('fa-chevron-up');
      document.getElementById(id).classList.add('fa-chevron-down');
    }
  }

}
