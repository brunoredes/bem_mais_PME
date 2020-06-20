import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConsultationsService } from 'app/service/consultations.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { LoadingService } from 'app/service/loading.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FaqComponent implements OnInit {
    showFaqStatus = false;
    showFaqQuesStatus = true;
    public data: any = [];
    public category: any = [];
    public faqSearch: string;
    loadingTemplate = this.loading.loadingTemplate;
    ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

    constructor(
        public consulta: ConsultationsService,
        public loading: LoadingService,
        public activatedRoute: ActivatedRoute
    ) { }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        this.data = this.activatedRoute.snapshot.data.faq
        this.category = this.activatedRoute.snapshot.data.categoria
        const rs = document.readyState;
        switch (rs) {
            case 'interactive':
            case 'complete':
                this.loading.offLoadingMenuComponents();
                break;
        }
        setTimeout(() => {
            document.getElementById(`pills-welcome-tab1`).classList.add('active')
        }, 1);
    }
    // onMyFaqPageContent method is used to show a my faq content.
    onMyFaqPageContent() {
        this.showFaqStatus = true;
        this.showFaqQuesStatus = false;
    }
    // showQuesContent method is used to show list of question content.
    showQuesContent() {
        this.showFaqStatus = false;
        this.showFaqQuesStatus = true;
    }
    // faqListActive method is used to active the feedback-list-active class.
    faqListActive() {
        document.getElementById('pills-tab').classList.toggle('faq-list-responsive');
    }
}
