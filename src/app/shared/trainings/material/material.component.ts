import { Component, OnInit } from '@angular/core';
import { ComercialTrainingOfUser } from 'app/models/comercial-training-of-user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComercialTrainingPartner } from 'app/models/comercial-training-partner.model';
import { TrainingsService } from 'app/service/trainings.service';
import { NivelService } from 'app/service/nivel.service';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'app/helpers/utils';

declare var $
@Component({
  selector: 'app-material',
  templateUrl: 'material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {



  SlideOptions = {
    items: 3,
    dots: true,
    nav: false,
    autoWidth: true,
    loop: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { itens: 3 }
    }
  };
  //
  comercialItens = false;
  material = true;
  novoTreinamento = false;
  estatistica = false;
  TitleTrainingsMaterial = '';
  TitleTrainingsNovoTreina = '';
  TitleTrainingsEstatistica = '';

  supportsMaterial: Array<ComercialTrainingOfUser>;
  videoTrainings: Array<ComercialTrainingOfUser>;

  newTrainingForm: FormGroup;

  partnersCombo: Array<ComercialTrainingPartner>;
  materialsCombo: Array<ComercialTrainingPartner>;

  showListGrid = true;
  formImportArchive: FormGroup;
  filterForm: FormGroup;
  corretor: any
  comercial: any
  vendedor: any
  mock: any
  dateRangeChange: any
  trainings: any
  mockList: any

  constructor(
    private nivel: NivelService,
    public _formBuild: FormBuilder,
    private UtilService: UtilService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.getTrainings()

    $(document).mouseup(function(e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.hide();
      }
      // Filter
    }),

    this.nivel.verificaUrl('/corretor') ? this.corretor = false : this.corretor = true
    this.comercial = this.nivel.verificaUrl('/comercial')
    this.vendedor = this.nivel.verificaUrl('vendedor')

    this.TitleTrainingsMaterial = this.UtilService.getTitleTrainingsMaterial();
    this.TitleTrainingsNovoTreina = this.UtilService.getTitleTrainingsNovoTreina();
    this.TitleTrainingsEstatistica = this.UtilService.getTitleTrainingsEstatistica();
    $(document).mouseup(function(e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.hide();
      }
      // Filter
    });
    // card material de apoio
    window.addEventListener('resize', () => {
      this.resize();
    });

    // filtro
    (function () {
      $('#edit-material').on('click', function () {
        $('.edit-material').fadeToggle('fast');
      });
    })();
    

    this.nivel.verificaUrl('comercial/trainings')
      ? (this.comercialItens = true)
      : (this.comercialItens = false);
    // inicio star
    let starClicked = false;

    $(function () {
      $('.star').click(function () {
        $(this)
          .children('.selected')
          .addClass('is-animated');
        $(this)
          .children('.selected')
          .addClass('pulse');

        const target = this;

        setTimeout(function () {
          $(target)
            .children('.selected')
            .removeClass('is-animated');
          $(target)
            .children('.selected')
            .removeClass('pulse');
        }, 1000);

        starClicked = true;
      });

      $('.half').click(function () {
        if (starClicked === true) {
          setHalfStarState(this);
        }
        $(this)
          .closest('.rating')
          .find('.js-score')
          .text($(this).data('value'));

        $(this)
          .closest('.rating')
          .data('vote', $(this).data('value'));
        calculateAverage();
      });

      $('.full').click(function () {
        if (starClicked === true) {
          setFullStarState(this);
        }
        $(this)
          .closest('.rating')
          .find('.js-score')
          .text($(this).data('value'));

        $(this)
          .find('js-average')
          .text(parseInt($(this).data('value'), 10));

        $(this)
          .closest('.rating')
          .data('vote', $(this).data('value'));
        calculateAverage();

      });

      $('.half').hover(function () {
        if (starClicked === false) {
          setHalfStarState(this);
        }
      });

      $('.full').hover(function () {
        if (starClicked === false) {
          setFullStarState(this);
        }
      });
    });

    function updateStarState(target) {
      $(target)
        .parent()
        .prevAll()
        .addClass('animate');
      $(target)
        .parent()
        .prevAll()
        .children()
        .addClass('star-colour');

      $(target)
        .parent()
        .nextAll()
        .removeClass('animate');
      $(target)
        .parent()
        .nextAll()
        .children()
        .removeClass('star-colour');
    }

    function setHalfStarState(target) {
      $(target).addClass('star-colour');
      $(target)
        .siblings('.full')
        .removeClass('star-colour');
      updateStarState(target);
    }

    function setFullStarState(target) {
      $(target).addClass('star-colour');
      $(target)
        .parent()
        .addClass('animate');
      $(target)
        .siblings('.half')
        .addClass('star-colour');

      updateStarState(target);
    }

    function calculateAverage() {
      let average = 0;

      $('.rating').each(function () {
        average += $(this).data('vote');
      });

      $('.js-average').text((average / $('.rating').length).toFixed(1));
    }
    // termino star


    const $star_rating = $('.star-rating .fa');

    const SetRatingStar = function () {
      return $star_rating.each(function () {
        if (
          parseInt($star_rating.siblings('input.rating-value').val(), 10) >=
          parseInt($(this).data('rating'), 10)
        ) {
          return $(this)
            .removeClass('fa-star-o')
            .addClass('fa-star');
        } else {
          return $(this)
            .removeClass('fa-star')
            .addClass('fa-star-o');
        }
      });
    };

    $star_rating.on('click', function () {
      $star_rating.siblings('input.rating-value').val($(this).data('rating'));
      return SetRatingStar();
    })

    SetRatingStar();
    $(document).ready(function () {
      $('.owl-item').css({ width: '360px' });
      $('.owl-theme').css({ width: '79vw' });
      setTimeout(() => {
        $('.owl-stage').css({ width: $('#tamanho').width() * $('.owl-item').length + 200 + 'px' });
      }, 0.01);
    });

    // filtro
    (function () {
      $('#filter-estatistica').on('click', function () {
        $('.filter-estatistica').fadeToggle('fast');
      });
    })();

  }
  getTrainings() {
    this.supportsMaterial = this.activatedRoute.snapshot.data.trainings.manuals
    this.videoTrainings = this.activatedRoute.snapshot.data.trainings.videos
  }
  filter() {
    $('.edit-material').fadeOut('fast');
    $('.filter-estatistica').fadeOut('fast');
    $('.filter-Exportar').fadeOut('fast');
    $('.filter-Exportar-regiao').fadeOut('fast');
  }

  resize() {
    for (let i = 0; i < this.supportsMaterial.length; i++) {
      if (screen.width <= 425 && screen.width > 320) {
        document.getElementById(`mobileCard${i}`).style.width = '63vw';
      } else if (screen.width <= 320) {
        document.getElementById(`mobileCard${i}`).style.width = '55vw';
      } else {
        document.getElementById(`mobileCard${i}`).style.width = 'auto';
      }
    }
  }

  showEditMaterial(index: number) {
    if (document.getElementById(`editMaterial${index}`).style.display === 'block') {
      document.getElementById(`editMaterial${index}`).style.display = 'none';
    } else {
      document.getElementById(`editMaterial${index}`).style.display = 'block';
    }
 
    (function () {
      $('#chart-training-region').on('click', function () {
        $('.chart-training-region').fadeToggle('fast');
      });
    })();
    
  }

  public _buildFilterForm() {
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
 

}
