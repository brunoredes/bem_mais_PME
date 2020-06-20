import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'app/service/feedback.service';
import { DateAdapter } from '@angular/material/core';
import { NivelService } from 'app/service/nivel.service';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { ActivatedRoute } from '@angular/router';

declare var $;

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    public category: any;
    public register = false;
    public list = false;
    public listFeed: any = [];
    public dateDe: Date;
    public dateAte: Date;
    public subject: string;
    public status: number;
    //
    public image = false
    public title = true

    loadingTemplate = this.loading.loadingTemplate;
    ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

    constructor(
        public api: FeedbackService,
        private _adapter: DateAdapter<any>,
        private nivel: NivelService,
        public loading: LoadingService,
        private activatedRoute: ActivatedRoute
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
        this.nivel.verificaUrl('comercial/feedback') ? this.register = false : this.register = true
        this.nivel.verificaUrl('comercial/feedback') ? this.image = true : this.image = false


        const sidebar = document.getElementById('content-grid-feed');
        const sidebarTrigger = document.getElementById('sidebar__trigger');
        const sidebarClose = document.getElementById('sidebar__close');


        sidebarTrigger.addEventListener('click', () => {
            sidebar.style.display = 'block'
            sidebar.classList.remove('isClosed');
            document.getElementById('menu-overlay').style.display = 'block';
            document.getElementById('sidebar__close').style.display = 'block';
        })
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.add('isClosed');
            document.getElementById('sidebar__close').style.display = 'none';
            document.getElementById('menu-overlay').style.display = 'none';

        })

        // fim open

        const rs = document.readyState;
        switch (rs) {
            case 'interactive':
            case 'complete':
                this.loading.offLoadingMenuComponents();
                break;
        }

        this._adapter.setLocale('br');

        (function () {
            $('#filter-feedback').on('click', function () {
                $('.filter-feedback').fadeToggle('fast');
            });
        })();


        this.category = this.activatedRoute.snapshot.data.category.data.categories;



        this.listFeed = this.activatedRoute.snapshot.data.list.data.feedbacks
        setTimeout(() => {
            for (let i = 0; i < this.listFeed.length; i++) {
                if (this.listFeed[i].status === 1) {
                    document.getElementById(`status${this.listFeed[i].id}`).classList.add('badge-primary')

                } else if (this.listFeed[i].status === 2) {
                    document.getElementById(`status${this.listFeed[i].id}`).classList.add('badge-secundary')
                    document.getElementById(`endDate-${this.listFeed[i].id}`).style.display = 'none'
                    document.getElementById(`startDate-${this.listFeed[i].id}`).style.margin = '0 0 1px auto'
                }
            }
        }, 1);



    }

    dateRangeChange() {
        if (this.dateDe > this.dateAte) {
            this.dateAte = this.dateDe;
        }
        if (!this.dateAte) {
            this.dateAte = this.dateDe;
        }
        if (!this.dateDe) {
            this.dateDe = this.dateAte;
        }
    }

    filter() {

        this.activatedRoute.snapshot.data.list.data.feedbacks
        if (this.subject) {
            this.listFeed = this.listFeed.filter((record) => {
                return record.category === this.subject;
            });
        }

        if (this.dateDe && this.dateAte) {
            this.listFeed = this.listFeed.filter((record) => {

                const dia = record.startDate.split('/')[0];
                const mes = record.startDate.split('/')[1];
                const ano = record.startDate.split('/')[2];
                const date: Date = new Date(`${mes}/${dia}/${ano}`);

                return date >= this.dateDe &&
                    date <= this.dateAte
            });
        }

        if (this.status) {
            this.listFeed = this.listFeed.filter((record) => {
                return record.statusDescription === this.status;
            });
        }

        $('.filter-feedback').fadeOut('fast');

    }

    respondido(obj) {
        this.title = false
        this.register = false
        this.list = true
        this.image = false
        const div = document.getElementById(obj)
        div.style.background = '#F9F8F8'
        localStorage.setItem('obj', obj)
        setTimeout(() => {

            document.getElementById('content-grid-feed').classList.add('isClosed');
            document.getElementById('sidebar__close').style.display = 'none';
            document.getElementById('menu-overlay').style.display = 'none';

        }, 1);
    }

    lista() {
        this.title = true
        this.list = false
        this.nivel.verificaUrl('comercial/feedback') ? this.image = true : this.register = true
        const div = document.getElementById(localStorage.getItem('obj'))
        div.style.background = '#F0F0F0'
        localStorage.removeItem('obj')

        setTimeout(() => {

            document.getElementById('content-grid-feed').classList.add('isClosed');
            document.getElementById('sidebar__close').style.display = 'none';
            document.getElementById('menu-overlay').style.display = 'none';

        }, 1);


    }

}
