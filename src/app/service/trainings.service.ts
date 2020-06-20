import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { ComercialTrainingPartner } from 'app/models/comercial-training-partner.model';
import { ComercialTrainingStatisticStatus } from 'app/models/comercial-training-statistic-status.model';
import { ComercialTrainingStatisticRegion } from 'app/models/comercial-training-statistic-region.model';
import { ComercialTrainingStatisticVendor } from 'app/models/comercial-training-statistic-vendor.model';
import { ComercialTrainingStatisticMostAccessed } from 'app/models/comercial-training-statistic-most-accessed.model';
import { ComercialTrainingStatisticResume } from 'app/models/comercial-training-statistic-resume.model';
import { NivelService } from './nivel.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  comercialItens = false
  constructor(private request: RequestService, private _domSanitizer: DomSanitizer, private nivel: NivelService) { }


  getTrainingsComercial () {

    this.nivel.verificaUrl('comercial/trainings')
            ? (this.comercialItens = true)
            : (this.comercialItens = false);

    let request = this._requestTrainingsComercial();

    if (this.comercialItens) {
      request = this._requestTrainingsVendedor();
    }

      return request.pipe (
        map((res: any) => {
          const trainings = res.data.trainings
          if (trainings.videos) {
          trainings.videos = trainings.videos.map( video => {
            video.url = this._domSanitizer.bypassSecurityTrustResourceUrl(video.url)
            return video;
          })
        }
          return trainings;
        })
      )
  }

  getComboPartners(): Observable< Array<ComercialTrainingPartner> > {
    return this._requestPartnersCombo().pipe(
      map((res: any) => {
        return res.data.partners;
      })
    )
  }

  getComboKindMaterial(): Observable<  Array<ComercialTrainingPartner> > {
    return this._requestKindMaterialCombo().pipe(
      map((res: any) => {
        return res.data.materials;
      })
    )
  }

  getStatusTrainings(): Observable<Array<ComercialTrainingStatisticStatus>> {
    return this._requestStatusTrainings().pipe(
      map((res: any) => {
        return res.data.status;
      })
    )
  }

  getAccessForRegion(): Observable<Array<ComercialTrainingStatisticRegion>> {
    return this._requestAcsessRegion().pipe(
      map((res: any) => {
        return res.data.access;
      })
    )
  }

  getVendorsFinish(): Observable<Array<ComercialTrainingStatisticVendor>> {
    return this._requestVendorsFinish().pipe(
      map((res: any) => {
        return res.data.vendors;
      })
    )
  }

  getTrainingMostAccess(): Observable<Array<ComercialTrainingStatisticMostAccessed>> {
    return this._requestTrainingMoreAccess().pipe(
      map((res: any) => {
        return res.data.trainings;
      })
    )
  }

  getTrainingSummary(): Observable<Array<ComercialTrainingStatisticResume>> {
    return this._requestTrainingSummary().pipe(
      map((res: any) => {
        return res.data.trainings;
      })
    )
  }

 /* Material Apoio e Videos */
  private _requestTrainingsVendedor() {
    return this.request.getVendedor(
      '10_Menu_Treinamentos/Consulta_Treinamentos/Consulta_Treinamentos_Response.json'
      );
  }

 /* Material Apoio e Videos */
 private _requestTrainingsComercial() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/1_Consulta_Treinamentos/Consulta_Treinamentos_Response.json'
  );
}

private _requestPartnersCombo() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/2_Avaliar_Treinamentos/1_Consulta_Combo_Parceiros/Consulta_Parceiros_Response.json'
  );
}

private _requestKindMaterialCombo() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/2_Avaliar_Treinamentos/2_Consulta_Combo_Tipo_de_Material/Consulta_Tipo_Material_Response.json'
  );
}

private _requestStatusTrainings() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/3_Estatistica/1_Consulta_Status_Treinamentos/Consulta_Status_Treinamentos_Response.json'
  );
}


private _requestAcsessRegion() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/3_Estatistica/2_Consulta_Acessos_Por_Regiao/Consulta_Acessos_Regiao_Response.json'
  );
}

private _requestVendorsFinish() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/3_Estatistica/3_Consulta_Vendedores_que_Finalizaram/Consulta_Vendedores_Finalizaram_Response.json'
  );
}

private _requestTrainingMoreAccess() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/3_Estatistica/4_Consulta_Treinamentos_Mais_Acessados/Consulta_Treinamentos_Acessados_Response.json'
  );
}

private _requestTrainingSummary() {
  return this.request.getComercial(
    '7_Menu_Treinamentos/3_Estatistica/5_Consulta_Resumo_Treinamentos/Consulta_Resumo_Treinamentos_Response.json'
  );
}




}
