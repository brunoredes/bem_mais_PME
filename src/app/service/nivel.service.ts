import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NivelService {
    verificaUrl(url: string ) {
        return ((window.location.href).indexOf(url) > -1)
    }
}
