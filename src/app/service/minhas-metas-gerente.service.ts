import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MinhasMetasService {

    constructor(
        private request: RequestService,
    ) { }

    getList(): Observable<Array<any>> {
        return this._requestList().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestList() {
        return this.request.getGerente(
            `6_Menu_Minhas_Metas/1_Consulta_Metas/Consulta_Metas_Response.json`
        );
    }
}
