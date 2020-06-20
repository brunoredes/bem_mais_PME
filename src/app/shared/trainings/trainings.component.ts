import { Component } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';

declare var $;
@Component({
    selector: 'app-trainings',
    templateUrl: './trainings.component.html',
    styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent {
    vendedor: any
    corretor: any
    constructor(private nivel: NivelService){}
    ngOnInit(){
        this.vendedor = this.nivel.verificaUrl('vendedor')
        this.corretor = this.nivel.verificaUrl('corretor')
    }
}
