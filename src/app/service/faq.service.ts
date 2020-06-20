import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Subject, Observable } from 'rxjs';
import { FaqModel } from 'app/models/faq.model';
import { map } from 'rxjs/operators';
import { FaqCategoryModel } from 'app/models/faqCategory.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(private request: RequestService) { }

  getFaq(): Observable<Array<FaqModel>> {
    return this._requestFaq().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestFaq() {
    return this.request.getVendedor(
      '6_Menu_Faq/Question/Faq_Itens_Question_Answer_Response.json'
    );
  }
  getFaqCategory(): Observable<Array<FaqCategoryModel>> {
    return this._requestFaqCategory().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestFaqCategory() {
    return this.request.getVendedor(
      '6_Menu_Faq/Faq_Menu_Categories_Response.json'
    );
  }
}
