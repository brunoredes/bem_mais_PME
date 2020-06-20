import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { FaqService } from 'app/service/faq.service';

@Injectable({providedIn: 'root'})
export class FaqResolve implements Resolve<any> {

    constructor(private faqService: FaqService) {}

    resolve() {
        return this.faqService.getFaq()
    }
}