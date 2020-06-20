import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carouselData: any[];
  @Input() carouselColors: [];

  SlideOptions = {
    items: 3, dots: true, nav: false, autoWidth: true,
    loop: false, responsiveClass: true, responsive: { 0: { items: 2 }, 600: { items: 2 }, 1000: { itens: 3 } }
  };

  ngOnChanges() {
    this.createChart();
  }

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  createChart() {
    let revenda: any
    let ctx: any
    setTimeout(() => {
      for (let i = 0; i < this.carouselData.length; i++) {
        const element = i + 1;
        revenda = document.getElementById(`Revenda ${element}`);
        ctx = revenda.getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [this.carouselData[i].percent, 100 - this.carouselData[i].percent],
              backgroundColor: this.carouselColors,
              borderWidth: 1,
            }],
          },
          options: {
            tooltips: {
              enabled: false
            }
          }
        });
      }
    }, 10);
  }
}
