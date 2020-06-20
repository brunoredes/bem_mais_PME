import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { FeedbackService } from 'app/service/feedback.service';

@Injectable({providedIn: 'root'})
export class FeedbackResolve implements Resolve<any> {

    constructor(private feedbackService: FeedbackService) {}

    resolve() {
        return this.feedbackService.getFeed()
    }
}
