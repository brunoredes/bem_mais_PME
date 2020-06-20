import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedbackModel } from 'app/models/feedback.model';
import { FeedbackCategoryModel } from 'app/models/feedbackCategory.model';
import { FeedbackResponseModel } from 'app/models/feedbackResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // public category: any
  // public listFeed: any
  // public response: any

  // public category$: Subject<any> = new Subject<any>();
  // public listFeed$: Subject<any> = new Subject<any>();
  // public response$: Subject<any> = new Subject<any>();
  constructor(public request: RequestService) { }
  urlFeed = '7_Menu_Feedback'

  getCategory(): Observable<Array<FeedbackCategoryModel>> {
    return this._requestCategory().pipe(
      map((res: any) => {
        return res
      })
    );
  }

  private _requestCategory() {
    return this.request.getVendedor(
      `${this.urlFeed}/1-Consulta_Categorias/Consulta_Vendedor_Response.json`
    );
  }

  getFeed(): Observable<Array<FeedbackModel>> {
    return this._requestFeed().pipe(
      map((res: any) => {
        return res
      })
    );
  }

  private _requestFeed() {
    return this.request.getVendedor(
      `${this.urlFeed}/2-Consulta_Feedbacks/Consulta_Feedback_Response.json`
    );
  }

  getResponse(): Observable<Array<FeedbackResponseModel>> {
    return this._requestResponse().pipe(
      map((res: any) => {
        return res
      })
    );
  }

  private _requestResponse() {
    return this.request.getVendedor(
      `${this.urlFeed}/2-Consulta_Feedbacks/1-Detalhes_Do_Feedback/Consulta_Feedback_Details_Response.json`
   );
  }

  // getCategory() {
  //   this.request.get(`${this.urlFeed}/1-Consulta Categorias/Consulta_Vendedor_Response.json`).subscribe((data: any) => {
  //     this.category = data
  //     this.category$.next(true)
  //   })
  // }

  // getFeed() {
  //   this.request.get(`${this.urlFeed}/2-Consulta Feedbacks/Consulta_Feedback_Response.json`).subscribe((data: any) => {
  //     this.listFeed = data
  //     this.listFeed$.next(true)
  //   })
  // }

  // getResponse() {
  //   this.request.get(`${this.urlFeed}/2-Consulta Feedbacks/1-Detalhes do Feedback/
  // Consulta_Feedback_Details_Response.json`).subscribe((data: any) => {
  //     this.response = data
  //     this.response$.next(true)
  //   })
  // }
}
